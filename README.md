# Spotlight

## Background
Spotlight is a game, where Simon Says meets maze. A player must memorize the right sequence of moves to get to the exit. One wrong move and the player must start over from the first platform.

## Architecture and Technologies

This project implemented the following:

* Vanilla JavaScript for game logic
* HTML5 Canvas for rendering 
* Spritesheet for the main character
* Webpack to bundle and run all the scripts

## Functionality and MVP

* Players can control the character with the arrow keys on the keyboard (Left, Right, Up, Down)
* Players can only see the platform they are on

### Character Movement
* Character is rendered through canvas and animated with a spritesheet (rendering different frames for when the character is idle, moving left, right, up, or down)


## Future Implementations

* Render the grid and tiles
* Random generation of playing field for more variety
* Adding a timer for each round