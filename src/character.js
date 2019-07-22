let spriteWidth = 480 / 8;
let spriteHeight = 240 / 4;
let spritePos = { x: 0, y: 0 };
let canvasPos = { x: 200, y: 200 };

export default class Character {

    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.dimensions.width;
        this.y = this.dimensions.height / 2;
    }

    draw(ctx) {
        ctx.drawImage(
            img,
            spritePos.x,
            // (spritePos.y + (spriteHeight * 2)),
            // (spritePos.y + (spriteHeight)),
            spritePos.y,
            spriteWidth,
            spriteHeight,
            canvasPos.x,
            canvasPos.y,
            (spriteWidth * 1.4),
            (spriteHeight * 1.4)
        );
    }

    moveSprite() {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        ctx.fillRect(0, 0, innerWidth, innerHeight);

        draw();

        if (count % 8 === 0) {
            if (spritePos.x < 420) {
                spritePos.x += spriteWidth;
            } else {
                spritePos.x = 0;
            }
        }

        count++;
        if (canvasPos.x < (innerWidth - 60) && keys.ArrowRight) {
            canvasPos.x += 2;
        }
        if (canvasPos.x > 0 && keys.ArrowLeft) {
            canvasPos.x -= 2;
        }
        if (canvasPos.y < (innerHeight - 60) && keys.ArrowDown) {
            canvasPos.y += 2;
        }
        if (canvasPos.y > 0 && keys.ArrowUp) {
            canvasPos.y -= 2;
        }


        requestAnimationFrame(moveSprite);

    }

    animate() {
        this.moveSprite();
    }

    


}