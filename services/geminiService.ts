import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Edits an image based on a text prompt using Gemini 2.5 Flash Image.
 * 
 * @param imageBase64 The base64 encoded string of the input image (raw data, no prefix).
 * @param mimeType The mime type of the input image (e.g., 'image/png').
 * @param prompt The text prompt describing the edit.
 * @returns The base64 data URI of the generated image.
 */
export const editImageWithGemini = async (
  imageBase64: string,
  mimeType: string,
  prompt: string
): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: imageBase64,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    if (!response.candidates || response.candidates.length === 0) {
      throw new Error("No candidates returned from Gemini API");
    }

    const content = response.candidates[0].content;
    
    // Iterate through parts to find the image
    if (content.parts) {
      for (const part of content.parts) {
        if (part.inlineData && part.inlineData.data) {
          // Construct the data URI
          return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
        }
      }
    }

    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};
