
export default class Tile {

    constructor(x, y) {
        this.pos = { "x": x, "y": y };
        this.width = 100;
        this.count = 0;
        this.walls = [
            new Wall(this.pos.x, this.pos.y, this.pos.x + this.width, this.pos.y, Math.floor(Math.random() * 100000)),
            new Wall(this.pos.x, this.pos.y + this.width, this.pos.x, this.pos.y, Math.floor(Math.random() * 100000))
        ]
        this.visited = false;
        this.isPresent = false;
    }

}