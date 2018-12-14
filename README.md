# JavaScript Assignment - Psychic Game (Basic)

## Overview

Psychic Game is an app that runs in the browser, and features dynamically updated HTML and CSS powered by JavaScript.

### Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

## Folder Structure

1. Create a new GitHub repo `Psychic-Game`, then, clone it to your computer.

2. Inside your local git repository, create an `index.html`.

3. While still in your local git repo, create a directory called `assets`.

4. `cd` your way into the `assets` folder, then make three additional folders: `javascript`, `css` and `images`.

   * In the `javascript` folder, make a file called `game.js`. Use the `src` attribute of the `script` tag to link to this file, rather than embedding the code directly in your HTML document.
   * In the `css` folder, make a file called `style.css`.
   * Also in the `css` folder, make a file called `reset.css`. Paste into it the code from the Meyerweb reset stylesheet. If you opt to use Bootstrap instead of writing your own CSS, skip this step, and simply include a link to Bootstrap via CDN.
   * In the `images` folder, save whatever images you plan on using.

```
├── assets
|  ├── css
|  |  └── style.css
|  ├── images
|  └── javascript
|     └── game.js
└── index.html
```

5. Push your selected game to Github Pages.


## Psychic Game Outline

1. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose.

2. Guess what letter I'm thinking of

3. Wins: (# of times the user has guessed the letter correctly)

4. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

5. Guesses Left: (# of guesses left. This will update)

6. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

7. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

8. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

![alt text]([IMG]http://i66.tinypic.com/30ivy9f.png[/IMG])
