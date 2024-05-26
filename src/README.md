## Genkit DadJoke Generator
> Sample code of using firebase genkit

This project utilizes `genkit` flows and `genkitx-ollama` to generate dad jokes based on user-provided topics.


## Overview 

This application integrates with [Genkit](https://firebase.google.com/docs/genkit) to generate humorous dad jokes. It leverages the `genkitx-ollama` plugin for gemma model interaction on local and uses `@genkit-ai/flow` for defining and managing the joke generation process.

## Features
* Dad Joke Generation: Generates 5 original dad jokes related to a user-provided topic.
* Family-Friendly Content: Ensures jokes are suitable for all audiences.
* Humor and Puns: Prioritizes humor, wordplay, and puns.
* Customizable Models: Uses the 'gemma' model from Ollama for joke generation.
* Interactive Presentation: Presents jokes individually with a lighthearted tone.

## Requirements
* Node.js
* @genkit-ai/ai
* @genkit-ai/core
* @genkit-ai/flow
* zod
* genkitx-ollama

## Setup 

```sh
$ git clone 
$ npm install
$ npm i -g genkit 
$ genkit start
```

## Demo

![](/genkit-demo.png)

## License
[WTFPL](https://en.wikipedia.org/wiki/WTFPL)