# Daily Quote Generator 📰

Choose a category that you want to find motivation in and a random quote will be generated for you! (text-to-speech application)

**Live Demo:** <a href="https://quote-generator-jenna-nguyen.netlify.app/">Demo</a><i> for display purposes only, still needs an API key for functionality</i>

<img width="946" alt="Complex Quote API" src="https://user-images.githubusercontent.com/88993361/138136416-ed85a64f-f566-4f96-b445-d3579def31fa.png">

## How It's Made

The application uses two different APIs in order to generate the output, according to the user's input. The first API, the Quotes Rest API, uses the user's chosen category as a parameter value to generate a random quote while the second API, the Speech API, uses the quote that was sent back and inserts it as a parameter value to change the words to speech.

## What I Learned
This was the first time I had actually used a nested fetch request so it was interesting to learn how to structure it. Because I wasn't super confident in my understanding of promises, it also helped me gain some practice by allowing me to change my usual fetch request into something a little more depthful.
