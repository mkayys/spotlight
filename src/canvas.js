let canvas = document.querySelector('canvas');
// console.log(canvas);

let ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

// let imgObj = new Image();

// imgObj.onload = function () {
//     ctx.drawImage(imgObj, 50, 10);
// };

// imgObj.src = 'moon.jpg';

ctx.fillStyle = "black";
ctx.fillRect(0, 0, innerWidth, innerHeight);

let img = new Image();
img.src = 'girl_running.png';

let spriteWidth = 480 / 8;
let spriteHeight = 240 / 4;
let spritePos = { x: 0, y: 0 };
let canvasPos = { x: 200, y: 200 };
// console.dir(img);

// document.addEventListener("keydown", pressKeyDown);
// document.addEventListener("keyup", pressKeyUp);

document.addEventListener("keydown", pressKeyDown);
document.addEventListener("keyup", pressKeyUp);

let isPressed = false;
let keys = {
    "ArrowLeft": false,
    "ArrowRight": false,
    "ArrowUp": false,
    "ArrowDown": false,
}

function pressKeyDown(e) {
    e.preventDefault();
    
    keys[e.key] = true;
    // spritePos.y = 0;
    // console.log(keys);
    // if (keys.ArrowLeft) {
    //     // console.log(keys);
    //     spritePos.y = spriteHeight;
    //     // console.log(spritePos.y);
    // } else if (keys.ArrowRight) {
    //     spritePos.y = spriteHeight * 2;
    //     console.log(spritePos.y);
    // } else if (keys.ArrowUp) {
    //     spritePos.y = spriteHeight * 3;
    // } else if (keys.ArrowDown) {
    //     spritePos.y = 0;
    // }
    
    setSpriteSheetRow();
    // console.log('trying to become true');
    isPressed = true;
    // console.log(isPressed);
    // moveSprite();
}

function setSpriteSheetRow() {
    spritePos.y = 0;
    if (keys.ArrowLeft) {
        // console.log(keys);
        spritePos.y = (spritePos.y + spriteHeight);
        // console.log(spritePos.y);
    } else if (keys.ArrowRight) {
        spritePos.y = (spritePos.y + (spriteHeight * 2));
        // console.log(spritePos.y);
    } else if (keys.ArrowUp) {
        spritePos.y = (spritePos.y + (spriteHeight * 3));
    } else if (keys.ArrowDown) {
        spritePos.y = 0;
    }

}


function pressKeyUp(e) {
    e.preventDefault();

    keys[e.key] = false;
    spriteIdle(e);

    isPressed = false;
    // draw();
   
    // console.log(keys);
}

function spriteIdle(e) {
    if (e.key === "ArrowUp") {
        spritePos.y = (spriteHeight * 3);
        spritePos.x = (spriteWidth * 7);
    } else {
        spritePos.y = 0;
        spritePos.x = (spriteWidth * 5);
    }

    // draw();
}

let count = 0;

function draw() {
    
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


function moveSprite() {
    // console.log('you made it');
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.fillRect(0, 0, innerWidth, innerHeight);

    draw();

    if (count % 8 === 0) {
        if (spritePos.x < 420) {
            spritePos.x += spriteWidth;
            // console.log(spritePos.x);
        } else {
            spritePos.x = 0;
        }
        // spritePos.x = (spritePos.x < 480 ? 0 : (spritePos.x + spriteWidth));
    }

    count++;
    if (canvasPos.x < (innerWidth - 60) && keys.ArrowRight) {
        canvasPos.x += 2;
    } 
    if(canvasPos.x > 0 && keys.ArrowLeft) {
        canvasPos.x -= 2;
    } 
    if (canvasPos.y < (innerHeight -60) && keys.ArrowDown ) {
        canvasPos.y += 2;
    } 
    if (canvasPos.y > 0 && keys.ArrowUp) {
        canvasPos.y -= 2;
    } 
    
    
    requestAnimationFrame(moveSprite);

    // else {
    //     canvasPos.x = 0;
    //     canvasPos.y = 0;
    // }
}


// cancelAnimationFrame(window.move);
// console.log('before');
// console.log(isPressed);
if (isPressed) {
    // console.log(isPressed);
}
moveSprite();
// console.log('after');