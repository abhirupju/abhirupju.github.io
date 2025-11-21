import { PAPERS, PROFILE } from '../constants';
import { DETAILED_PAPERS } from '../detailed-papers';
import { PROMPT_TEMPLATES, populateTemplate } from '../prompt-templates';

const OPENROUTER_API_KEY = (import.meta as any).env.VITE_OPENROUTER_API_KEY;
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";
const MODEL = "google/gemma-3-27b-it:free"; // Better free model

export const askResearchAssistant = async (question: string): Promise<string> => {
  if (!OPENROUTER_API_KEY) {
    console.error("API Key not found. Expected VITE_OPENROUTER_API_KEY in .env file");
    return "Error: OpenRouter API Key missing. Cannot connect to Research Assistant.";
  }

  // Smart context generation based on query type
  const generatePaperContext = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    // Check if question is about collaborators/co-authors
    const isCollaboratorQuery = () => {
      const collaboratorKeywords = ['papers with', 'collaborated with', 'co-author', 'worked with', 'publications with', 'joint work', 'together with'];
      const hasCollaboratorKeyword = collaboratorKeywords.some(keyword => lowerQuestion.includes(keyword));
      
      if (hasCollaboratorKeyword) {
        // Extract potential collaborator names
        const allAuthors = new Set<string>();
        PAPERS.forEach(paper => {
          paper.authors.forEach(author => {
            if (author !== PROFILE.name) { // Exclude the main author
              allAuthors.add(author);
            }
          });
        });
        
        // Find mentioned collaborators
        const mentionedCollaborators = Array.from(allAuthors).filter(author => {
          const nameParts = author.toLowerCase().split(' ');
          const lastName = nameParts[nameParts.length - 1];
          const firstName = nameParts[0];
          
          // Check for full name, last name, or first+last combination
          return lowerQuestion.includes(author.toLowerCase()) ||
                 (lastName.length > 3 && lowerQuestion.includes(lastName)) ||
                 (firstName.length > 3 && lastName.length > 3 && 
                  lowerQuestion.includes(firstName) && lowerQuestion.includes(lastName));
        });
        
        return mentionedCollaborators.length > 0 ? mentionedCollaborators : null;
      }
      
      return null;
    };

    // Check if question is about a specific paper
    const isSpecificPaperQuery = () => {
      // Check if question mentions specific paper titles, authors, or venues
      for (const paper of PAPERS) {
        const titleWords = paper.title.toLowerCase().split(' ');
        const significantWords = titleWords.filter(word => word.length > 3);
        
        // Check for title keywords (need at least 2 significant words)
        if (significantWords.length >= 2) {
          const matchCount = significantWords.filter(word => lowerQuestion.includes(word)).length;
          if (matchCount >= 2) return paper.id;
        }
        
        // Check for exact venue matches
        if (lowerQuestion.includes(paper.venue.toLowerCase())) {
          const venueWords = paper.venue.toLowerCase().split(' ');
          if (venueWords.some(word => word.length > 3 && lowerQuestion.includes(word))) {
            return paper.id;
          }
        }
      }
      
      return null;
    };
    
    const collaborators = isCollaboratorQuery();
    const specificPaperId = isSpecificPaperQuery();
    
    // Handle collaborator queries first (higher priority)
    if (collaborators) {
      const collaboratorPapers = PAPERS.filter(paper => 
        collaborators.some(collaborator => 
          paper.authors.some(author => 
            author.toLowerCase().includes(collaborator.toLowerCase()) ||
            collaborator.toLowerCase().includes(author.toLowerCase())
          )
        )
      );
      
      if (collaboratorPapers.length > 0) {
        let contextInfo = `COLLABORATOR ANALYSIS - Papers with: ${collaborators.join(', ')}\n\n`;
        
        // Group papers by collaborator for better organization
        const papersByCollaborator = new Map<string, typeof PAPERS>();
        
        collaborators.forEach(collaborator => {
          const papers = PAPERS.filter(paper => 
            paper.authors.some(author => 
              author.toLowerCase().includes(collaborator.toLowerCase()) ||
              collaborator.toLowerCase().includes(author.toLowerCase())
            )
          );
          if (papers.length > 0) {
            papersByCollaborator.set(collaborator, papers);
          }
        });
        
        // Generate detailed context for collaborator papers
        papersByCollaborator.forEach((papers, collaborator) => {
          contextInfo += `PAPERS WITH ${collaborator.toUpperCase()}:\n`;
          
          papers.forEach(paper => {
            contextInfo += `- Title: ${paper.title} (${paper.year}) in ${paper.venue}\n`;
            contextInfo += `  Authors: ${paper.authors.join(', ')}\n`;
            contextInfo += `  Abstract: ${paper.abstract}\n`;
            
            // Add detailed info if available
            const detailedPaper = DETAILED_PAPERS.find(p => p.id === paper.id);
            if (detailedPaper) {
              if (detailedPaper.fullAbstract) {
                contextInfo += `  Full Abstract: ${detailedPaper.fullAbstract}\n`;
              }
              if (detailedPaper.keyFindings && detailedPaper.keyFindings.length > 0) {
                contextInfo += `  Key Findings: ${detailedPaper.keyFindings.join('; ')}\n`;
              }
              if (detailedPaper.methodology) {
                contextInfo += `  Methodology: ${detailedPaper.methodology}\n`;
              }
            }
            contextInfo += '\n';
          });
          contextInfo += '\n';
        });
        
        // Add summary statistics
        contextInfo += `COLLABORATION SUMMARY:\n`;
        contextInfo += `- Total papers with mentioned collaborators: ${collaboratorPapers.length}\n`;
        papersByCollaborator.forEach((papers, collaborator) => {
          contextInfo += `- Papers with ${collaborator}: ${papers.length}\n`;
        });
        
        return contextInfo;
      }
    }
    
    if (specificPaperId) {
      // Provide detailed context for the specific paper
      const detailedPaper = DETAILED_PAPERS.find(p => p.id === specificPaperId);
      const basicPaper = PAPERS.find(p => p.id === specificPaperId);
      
      if (detailedPaper) {
        let paperInfo = `SPECIFIC PAPER DETAILS:
- Title: ${detailedPaper.title} (${detailedPaper.year}) in ${detailedPaper.venue}
  Authors: ${detailedPaper.authors.join(', ')}
  Abstract: ${detailedPaper.abstract}`;
        
        if (detailedPaper.fullAbstract) {
          paperInfo += `\n  Full Abstract: ${detailedPaper.fullAbstract}`;
        }
        if (detailedPaper.keywords && detailedPaper.keywords.length > 0) {
          paperInfo += `\n  Keywords: ${detailedPaper.keywords.join(', ')}`;
        }
        if (detailedPaper.methodology) {
          paperInfo += `\n  Methodology: ${detailedPaper.methodology}`;
        }
        if (detailedPaper.keyFindings && detailedPaper.keyFindings.length > 0) {
          paperInfo += `\n  Key Findings: ${detailedPaper.keyFindings.join('; ')}`;
        }
        if (detailedPaper.relatedWork) {
          paperInfo += `\n  Related Work: ${detailedPaper.relatedWork}`;
        }
        if (detailedPaper.futureWork) {
          paperInfo += `\n  Future Work: ${detailedPaper.futureWork}`;
        }
        
        // Add overview of other papers for context
        paperInfo += `\n\nOVERVIEW OF OTHER PAPERS:\n`;
        paperInfo += PAPERS.filter(p => p.id !== specificPaperId)
          .map(p => `- ${p.title} (${p.year}) in ${p.venue}: ${p.abstract}`)
          .join('\n');
        
        return paperInfo;
      } else if (basicPaper) {
        return `SPECIFIC PAPER: ${basicPaper.title} (${basicPaper.year}) in ${basicPaper.venue}: ${basicPaper.abstract}\n\nOTHER PAPERS:\n` +
          PAPERS.filter(p => p.id !== specificPaperId)
            .map(p => `- ${p.title} (${p.year}) in ${p.venue}: ${p.abstract}`)
            .join('\n');
      }
    }
    
    // For general queries, provide overview from constants.ts
    return `RESEARCH PORTFOLIO OVERVIEW:\n` + 
      PAPERS.map(p => `- ${p.title} (${p.year}) in ${p.venue}: ${p.abstract}`).join('\n');
  };
  
  
  // Determine which template to use and generate context
  const paperContext = generatePaperContext(question);
  const isSpecificQuery = paperContext.startsWith('SPECIFIC PAPER DETAILS:');
  const isCollaboratorQuery = paperContext.startsWith('COLLABORATOR ANALYSIS');
  
  let template;
  if (isCollaboratorQuery) {
    template = PROMPT_TEMPLATES.COLLABORATOR_PROMPT;
  } else if (isSpecificQuery) {
    template = PROMPT_TEMPLATES.SPECIFIC_PAPER_PROMPT;
  } else {
    template = PROMPT_TEMPLATES.GENERAL_RESEARCH_PROMPT;
  }
  
  const context = populateTemplate(template, {
    PROFILE_NAME: PROFILE.name,
    PROFILE_BIO: PROFILE.bio,
    PAPER_CONTEXT: paperContext,
    QUESTION: question
  });  try {
    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://github.com",
        "X-Title": "Academic Portfolio",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: "user",
            content: context,
          },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter API Error - Status:", response.status);
      console.error("OpenRouter API Error - Response:", errorText);
      try {
        const error = JSON.parse(errorText);
        return `Error: ${error.error?.message || 'API request failed'}`;
      } catch {
        return `Error: API returned status ${response.status}: ${errorText.substring(0, 100)}`;
      }
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "I couldn't generate a response.";
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    console.error("Error details:", error instanceof Error ? error.message : String(error));
    return `Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`;
  }
};

export const generateNewsUpdate = async (topic: string): Promise<string> => {
  if (!OPENROUTER_API_KEY) return "API Key missing.";

  const context = populateTemplate(PROMPT_TEMPLATES.NEWS_GENERATION_PROMPT, {
    PROFILE_NAME: PROFILE.name,
    TOPIC: topic
  });

  try {
    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://github.com",
        "X-Title": "Academic Portfolio",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: "user",
            content: context,
          },
        ],
        temperature: 0.7,
        max_tokens: 256,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter API Error - Status:", response.status);
      console.error("OpenRouter API Error - Response:", errorText);
      try {
        const error = JSON.parse(errorText);
        return `Error generating update: ${error.error?.message || 'API request failed'}`;
      } catch {
        return `Error: API returned status ${response.status}: ${errorText.substring(0, 100)}`;
      }
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Could not generate update.";
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    console.error("Error details:", error instanceof Error ? error.message : String(error));
    return `Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`;
  }
}
