import { PAPERS, PROFILE } from '../constants';

const OPENROUTER_API_KEY = (import.meta as any).env.VITE_OPENROUTER_API_KEY;
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";
const MODEL = "google/gemma-3-27b-it:free"; // Better free model

export const askResearchAssistant = async (question: string): Promise<string> => {
  if (!OPENROUTER_API_KEY) {
    console.error("API Key not found. Expected VITE_OPENROUTER_API_KEY in .env file");
    return "Error: OpenRouter API Key missing. Cannot connect to Research Assistant.";
  }

  const context = `You are a helpful academic research assistant for ${PROFILE.name}.
    
Here is the profile biography: "${PROFILE.bio}"

Here is the list of published papers:
${PAPERS.map(p => `- Title: ${p.title} (${p.year}) in ${p.venue}. Abstract: ${p.abstract}`).join('\n')}

User Question: "${question}"

Please answer the user's question based ONLY on the provided research and profile context. 
If the answer is not in the context, say "I don't have information on that specifically in the publication list."
Be concise, professional, and encouraging.`;

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

  const context = `You are the communications manager for ${PROFILE.name}.
Write a short, professional, yet exciting news update (max 2 sentences) for the personal website news section.
Topic/Draft: "${topic}"`;

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
