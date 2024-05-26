"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dadJoke = void 0;
const ai_1 = require("@genkit-ai/ai");
const core_1 = require("@genkit-ai/core");
const flow_1 = require("@genkit-ai/flow");
const z = __importStar(require("zod"));
const genkitx_ollama_1 = require("genkitx-ollama");
(0, core_1.configureGenkit)({
    plugins: [
        (0, genkitx_ollama_1.ollama)({
            models: [{ name: 'gemma' }],
            serverAddress: 'http://127.0.0.1:11434', // default ollama local address
        }),
    ],
    logLevel: 'debug',
    enableTracingAndMetrics: true,
});
exports.dadJoke = (0, flow_1.defineFlow)({
    name: 'dadJoke',
    inputSchema: z.string(),
    outputSchema: z.string(),
}, async (topic) => {
    const llmResponse = await (0, ai_1.generate)({
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
});
(0, flow_1.startFlowsServer)();
//# sourceMappingURL=index.js.map