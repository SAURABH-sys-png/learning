import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';

const app = express();
const upload = multer(); // Keeps files in memory buffers instead of writing to disk

// Initialize Gemini with your environment variable API key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.use(cors({ origin: 'http://localhost:5173' }));

app.post('/api/generate', upload.single('file'), async (req, res) => {
  try {
    const file = req.file; // Provided by multer
    const inputType = req.body.inputType; // 'image' or 'audio'

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // 1. Convert the file buffer to a Base64 string
    const base64Data = file.buffer.toString('base64');

    // 2. Format the object exactly how Gemini expects it
    const filePart = {
      inlineData: {
        data: base64Data,
        mimeType: file.mimetype // e.g., 'image/png' or 'audio/mp3'
      }
    };

    // 3. Assemble the prompt parts
    const promptInstructions = `
      Analyze this ${inputType}. If it is an image, read the coding problem description carefully. 
      If it is audio, listen to the feature requirement. Generate a list of robust test cases, 
      including typical inputs, edge cases, and extreme inputs.
    `;

    // 4. Send both text instructions and the file structure to the model
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        promptInstructions,
        filePart
      ],
    });

    res.json({ result: response.text });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));