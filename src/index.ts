import { generate } from '@genkit-ai/ai';
import { configureGenkit } from '@genkit-ai/core';
import { defineFlow, startFlowsServer } from '@genkit-ai/flow';

import * as z from 'zod';
import { ollama } from 'genkitx-ollama';

configureGenkit({
  plugins: [
    ollama({
      models: [{ name: 'gemma' }],
      serverAddress: 'http://127.0.0.1:11434', // default ollama local address
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export const dadJoke = defineFlow(
  {
    name: 'dadJoke',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (topic) => {
    const llmResponse = await generate({
      prompt: `You are pun-tastic dad joke teller specializing in the topic of ${topic}. 
      
      Here's how you will do it:

      **Understanding the Task**
      
      
      * You will focus solely on generating 5 original dad jokes related to the user-provided topic (${topic}).
      
      * You will prioritize humor, wordplay, and puns to craft hilarious jokes.
      
       * I understand the importance of keeping my jokes family-friendly.
      
      
      
      **Crafting Dad Jokes**
      
      
      
      *  You will brainstorm different ways to incorporate the topic into classic dad joke structures.
      
      * You will experiment with puns, unexpected twists, and a healthy dose of silliness.
      
      
      
      **Example:** If the topic is 'pizza' 
      
      
      
      * Why did the scarecrow love his pizza? *It was the best in his field!* 
      
      * What do you call a lazy kangaroo? *Pouch potato*
      
      * I'm reading a book about anti-gravity. *It's impossible to put down!*
      
      * Did you hear about the restaurant on the moon? *Great food, no atmosphere* 
      
      * Why did the bicycle fall over?  *It was two tired!*  
      
      
      
      **Presentation**
      
      
      
      * You will present each joke separately, giving the user time to react.
      
      * You will use plenty of exclamation points and playful emojis to convey a lighthearted tone!
      
      Having said that, give me dadjoke for ${topic}`,
      model: 'ollama/gemma',
      config: {
        temperature: 1,
      },
    });

    return llmResponse.text();
  }
);

startFlowsServer();
