import Character from "./character";
import Grid from "./grid";

export default class Spotlight {

    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: innerWidth, height: innerHeight };
        this.registerEvents();
        this.restart();
    }

    play() {
        // load the "level" or have it random
    }

    restart() {
        // go to the first platform
    }

    registerEvents() {
        // add event listener for key presses
    }


    gameOver() {
        // replay
    }


    animate() {
        // draw the tiles on grid
        // animate the inital path from point A to B
        // draw and move character
       
        
        if (this.gameOver()) {
            // restart the level on platform 1
        }

       
    }

    
}