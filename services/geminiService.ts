
import { GoogleGenAI, Type } from "@google/genai";
import { JobDetails, VerificationResult } from "../types";

// Initialize the Google GenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeJob = async (job: JobDetails): Promise<VerificationResult> => {
  const prompt = `
    Analyze this job/internship listing for potential fraud.
    Company: ${job.companyName}
    Link: ${job.jobLink}
    Recruiter Email: ${job.recruiterEmail}
    Description: ${job.description}

    Based on common job scam patterns (urgent hiring, pay for training, unrealistic salary, free email providers, domain mismatch), evaluate the safety of this job.
    
    Return a structured JSON report.
  `;

  // Use the gemini-3-pro-preview model for complex text reasoning tasks.
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          trustScore: { type: Type.NUMBER, description: "A score from 0-100 where 100 is perfectly safe." },
          status: { type: Type.STRING, description: "One of 'safe', 'warning', 'risky'." },
          analysis: {
            type: Type.OBJECT,
            properties: {
              websiteSecurity: { type: Type.STRING },
              emailVerification: { type: Type.STRING },
              descriptionAnalysis: { type: Type.STRING },
              aiPrediction: { type: Type.STRING },
              redFlags: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["websiteSecurity", "emailVerification", "descriptionAnalysis", "aiPrediction", "redFlags"]
          },
          details: {
            type: Type.OBJECT,
            properties: {
              isSecure: { type: Type.BOOLEAN },
              isCorporateEmail: { type: Type.BOOLEAN },
              domainMatchesCompany: { type: Type.BOOLEAN },
              suspiciousKeywordsFound: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["isSecure", "isCorporateEmail", "domainMatchesCompany", "suspiciousKeywordsFound"]
          }
        },
        required: ["trustScore", "status", "analysis", "details"]
      }
    }
  });

  // Accessing text directly from the GenerateContentResponse object.
  const resultText = response.text || '{}';
  return JSON.parse(resultText);
};
