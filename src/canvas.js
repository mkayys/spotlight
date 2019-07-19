let canvas = document.querySelector('canvas');
// console.log(canvas);

let ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.fillStyle = "purple";
ctx.fillRect(0, 0, innerWidth, innerHeight);

let img = new Image();
img.src = './girl_running.png';

let spriteWidth = 480 / 8;
let spriteHeight = 240 / 4;
let spritePos = { x: 0, y: 0 };
let canvasPos = { x: 200, y: 200 };
// console.dir(img);

let count = 0;

function rightDraw() {
    ctx.drawImage(
        img,
        spritePos.x,
        (spritePos.y + (spriteHeight * 2)),
        // (spritePos.y + (spriteHeight)),
        // spritePos.y,
        spriteWidth,
        spriteHeight,
        canvasPos.x,
        canvasPos.y,
        (spriteWidth * 1.4),
        (spriteHeight * 1.4)
    );
}


function rightShow() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.fillRect(0, 0, innerWidth, innerHeight);

    rightDraw();

    if (count % 8 === 0) {
        if (spritePos.x < 420) {
            spritePos.x += spriteWidth;
        } else {
            spritePos.x = 0;
        };
    }

    count++;
    if (canvasPos.x < (innerWidth - 60)) {
        canvasPos.x += 2;
    } else {
        canvasPos.x = -2;
    }
    requestAnimationFrame(rightShow);
}

document.addEventListener("keydown", e => {
    // console.log(e.key);
    switch (e.key) {
        case "ArrowLeft":
            // new spritePos.y = (spritePos.y + (spriteHeight))
            // new spritePos.x = spriteWidth (480) <-- actually might be okay (no need to change?)
            // canvasPos.x -= 2

            leftShow();
        case "ArrowRight":
            //new spritePos.y = (spritePos.y + (spriteHeight * 2))
            // canvasPos.x += 2
            rightShow();

        // case "ArrowUp":

        // case "ArrowDown":

    }
});

let count1 = 0;

function leftDraw() {
    ctx.drawImage(
        img,
        spritePos.x,
        // (spritePos.y + (spriteHeight * 2)),
        (spritePos.y + (spriteHeight)),
        // spritePos.y,
        spriteWidth,
        spriteHeight,
        canvasPos.x,
        canvasPos.y,
        (spriteWidth * 1.4),
        (spriteHeight * 1.4)
    );
}


function leftShow() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    leftDraw();

    if (count1 % 8 === 0) {
        if (spritePos.x < 420) {
            spritePos.x += spriteWidth;
        } else {
            spritePos.x = 0;
        };
    }

    count1++;
    if (canvasPos.x > 0) {
        canvasPos.x -= 2;
    } else {
        canvasPos.x = innerWidth + 1;
    }
    requestAnimationFrame(leftShow);
}





// export const canvas = () => {

//     var charSprite = new Image();
//     charSprite.src = "../adventurer-Sheet.png";

//     function sprite(options) {

//         var that = {};

//         that.context = options.context;
//         that.width = options.width;
//         that.height = options.height;
//         that.image = options.image;
//         that.render = function () {
    
//             that.context.drawImage(
//                 that.image,
//                 0,
//                 0,
//                 that.width,
//                 that.height,
//                 0,
//                 0,
//                 (that.width * 3),
//                 (that.height * 3)
//             );
//         }
//         return that;
//     };

//     let canvas = document.getElementById('canvas');

//     let character = sprite({
//         context: canvas.getContext("2d"),
//         width: 100,
//         height: 37,
//         image: charSprite
//     });
    
//     character.render();
//     // character.context.drawImage(image, 0, 0, 100, 37, 0, 0, 100, 37);

// }

    


   