// Helper template for adding detailed paper information
// Copy this template for each paper and fill in the details

/*
TEMPLATE FOR ADDING DETAILED PAPER INFO:

{
  id: "p1", // Must match ID from constants.ts
  title: "Full paper title",
  authors: ["Author 1", "Author 2", "Author 3"],
  venue: "Conference/Journal Name",
  year: 2024,
  abstract: "Short abstract for website display",
  fullAbstract: "Complete abstract with all technical details, background, methodology, results, and conclusions. This provides rich context for the AI assistant.",
  link: "https://main-paper-link.com",
  pdfLink: "https://direct-pdf-link.com", // Optional
  tags: ["Tag1", "Tag2", "Tag3"],
  keywords: ["keyword1", "keyword2", "keyword3"], // For LLM context
  methodology: "Detailed description of the methodology used in the research. Include algorithms, datasets, experimental setup, evaluation metrics, etc.",
  keyFindings: [
    "First key finding or contribution",
    "Second key finding or contribution", 
    "Third key finding or contribution"
  ],
  relatedWork: "Description of related work and how this research differs or builds upon existing work.",
  futureWork: "Future research directions, limitations, and potential improvements mentioned in the paper.",
  citations: 15, // Number of citations if known
  doi: "10.1000/xyz123", // DOI if available
  bibtex: `@inproceedings{author2024title,
    title={Paper Title},
    author={Author, First and Author, Second},
    booktitle={Conference Name},
    year={2024},
    pages={1--10}
  }`
}

INSTRUCTIONS:
1. Copy the above template
2. Replace all placeholder values with actual paper information
3. Add it to the DETAILED_PAPERS array in detailed-papers.ts
4. Make sure the ID matches the corresponding paper in constants.ts
5. The more detailed information you provide, the better the AI can answer questions about your research

BENEFITS:
- AI can answer specific questions about methodology
- AI can explain technical details and contributions
- AI can discuss related work and future directions  
- AI can provide proper citations and references
- Richer context leads to more accurate and helpful responses
*/