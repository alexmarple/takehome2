import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'sk-proj-dIK9Vvla6qZq5gTdWwGBT3BlbkFJbOmAP35LYAZJCdWK5AKa',
  dangerouslyAllowBrowser: true,
});

export default openai;
