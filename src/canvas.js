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
img.src = '../girl_running.png';

let spriteWidth = 480 / 8;
let spriteHeight = 240 / 4;
let spritePos = { x: 0, y: 0 };
let canvasPos = { x: 200, y: 200 };
// console.dir(img);

// document.addEventListener("keydown", pressKeyDown);
// document.addEventListener("keyup", pressKeyUp);

document.addEventListener("keydown", pressKeyDown);
document.addEventListener("keyup", pressKeyUp);


let keys = {
    "ArrowLeft": false,
    "ArrowRight": false,
    "ArrowUp": false,
    "ArrowDown": false,
}

function pressKeyDown(e) {
    e.preventDefault();
    keys[e.key] = true;
    spritePos.y = 0;
    // console.log(keys);
    
    if (keys.ArrowLeft) {
        // console.log(keys);
        spritePos.y = (spritePos.y + (spriteHeight));
        // console.log(spritePos.y);
    } else if (keys.ArrowRight) {
        spritePos.y = (spritePos.y + (spriteHeight * 2));
    } else if (keys.ArrowUp) {
        spritePos.y = (spritePos.y + (spriteHeight * 3));
    } else if (keys.ArrowDown) {
        spritePos.y = 0;
    }
    show();
}

function pressKeyUp(e) {
    e.preventDefault();
    if (e.key === "ArrowUp") {
        spritePos.y = (spriteHeight * 3);
        spritePos.x = (spriteWidth * 7);
        keys[e.key] = false;
    } else {
        spritePos.y = 0;
        spritePos.x = (spriteWidth * 5);
        keys[e.key] = false;
    }
    

    // spritePos.y = 0; // she faces forward after every keypress ends but she teleports
   
    
    // console.log(keys);
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


function show() {
    // console.log('you made it');
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
        requestAnimationFrame(show);
    } else if(canvasPos.x > 0 && keys.ArrowLeft) {
        canvasPos.x -= 2;
        requestAnimationFrame(show);
    } else if (canvasPos.y < (innerHeight -60) && keys.ArrowDown ) {
        canvasPos.y += 2;
        requestAnimationFrame(show);
    } else if (canvasPos.y > 0 && keys.ArrowUp) {
        canvasPos.y -= 2;
        requestAnimationFrame(show);
    } 
    // else {
    //     canvasPos.x = 0;
    //     canvasPos.y = 0;
    // }
}



// document.addEventListener("keydown", e => {
//     let spriteWidth = 480 / 8;
//     let spriteHeight = 240 / 4;
//     let spritePos = { x: 0, y: 0 };
//     let canvasPos = { x: 200, y: 200 };
//     let key = [];
//     // console.log(e.key);
//     switch (e.key) {
//         case "ArrowLeft":
            
//             console.log(spritePos.y);
//             // canvasPos.x -= 2
//             key.push("ArrowLeft");
//             console.log(key);

//             show();
//         case "ArrowRight":
//             spritePos.y = (spritePos.y + (spriteHeight * 2));
//             // canvasPos.x += 2
//             show();

//         // case "ArrowUp":

//         // case "ArrowDown":

//     }
// });

// RIGHT

// let count = 0;

// function rightDraw() {
//     ctx.drawImage(
//         img,
//         spritePos.x,
//         (spritePos.y + (spriteHeight * 2)),
//         // (spritePos.y + (spriteHeight)),
//         // spritePos.y,
//         spriteWidth,
//         spriteHeight,
//         canvasPos.x,
//         canvasPos.y,
//         (spriteWidth * 1.4),
//         (spriteHeight * 1.4)
//     );
// }


// function rightShow() {
//     ctx.clearRect(0, 0, innerWidth, innerHeight);
//     ctx.fillRect(0, 0, innerWidth, innerHeight);

//     rightDraw();

//     if (count % 8 === 0) {
//         if (spritePos.x < 420) {
//             spritePos.x += spriteWidth;
//         } else {
//             spritePos.x = 0;
//         };
//     }

//     count++;
//     if (canvasPos.x < (innerWidth - 60)) {
//         canvasPos.x += 2;
//     } else {
//         canvasPos.x = -2;
//     }
//     requestAnimationFrame(rightShow);
// }

// LEFT

// let count1 = 0;

// function leftDraw() {
//     ctx.drawImage(
//         img,
//         spritePos.x,
//         // (spritePos.y + (spriteHeight * 2)),
//         (spritePos.y + (spriteHeight)),
//         // spritePos.y,
//         spriteWidth,
//         spriteHeight,
//         canvasPos.x,
//         canvasPos.y,
//         (spriteWidth * 1.4),
//         (spriteHeight * 1.4)
//     );
// }


// function leftShow() {
//     ctx.clearRect(0, 0, innerWidth, innerHeight);
//     ctx.fillRect(0, 0, innerWidth, innerHeight);
//     leftDraw();

//     if (count1 % 8 === 0) {
//         if (spritePos.x < 420) {
//             spritePos.x += spriteWidth;
//         } else {
//             spritePos.x = 0;
//         };
//     }

//     count1++;
//     if (canvasPos.x > 0) {
//         canvasPos.x -= 2;
//     } else {
//         canvasPos.x = innerWidth + 1;
//     }
//     requestAnimationFrame(leftShow);
// }





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

    


   