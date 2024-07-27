import openai from '../openaiClient';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWithRetry = async (fetchFunction, retries = 5, delayMs = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetchFunction();
    } catch (error) {
      if (error.response?.status === 429 && i < retries - 1) {
        console.warn(`Rate limit hit, retrying in ${delayMs}ms...`);
        await delay(delayMs);
        delayMs *= 2;
      } else {
        throw error;
      }
    }
  }
};

export const summarizePatient = async (patient) => {
  const prompt = `Summarize the following patient data:\n\nFirst Name: ${patient.firstName}\nLast Name: ${patient.lastName}\nCondition: ${patient.condition}\nAllergies: ${patient.allergies}\nMedications: ${patient.medications}\nNotes: ${patient.notes}\n`;

  try {
    const response = await fetchWithRetry(() =>
      openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 100,
      })
    );
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error summarizing patient data:', error);
    return 'Error summarizing patient data';
  }
};
