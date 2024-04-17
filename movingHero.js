let tileSize = 32;
let row = 26;
let col = 56;

let board;
let boardW = tileSize * col;
let boardH = tileSize * row;
let context;

//hero
let heroW = tileSize*2;
let heroH = tileSize;
let heroX = (boardW/2) - (boardW/4);
let heroY = (boardH/2) - (boardH/4);

let hero = {
    x: heroX,
    y: heroY, 
    w: heroW,
    h: heroH
}

let heroVelocity = tileSize/2;
let heroAlienImg;

window.onload = function(){
    board = document.getElementById("board");
    board.width = boardW;
    board.height = boardH;
    context = board.getContext("2d");

    heroAlienImg = new Image();
    heroAlienImg.src = "./sprite/alien.png";
    heroAlienImg.onload = function(){
        context.drawImage(heroAlienImg, hero.x, hero.y, hero.w, hero.h);
    }

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveHero);
}

function update(){
    requestAnimationFrame(update);

    context.clearRect(0, 0, board.width, board.height);
    
    context.drawImage(heroAlienImg, hero.x, hero.y, hero.w, hero.h);
}


function moveHero(e){
    if(e.code == "ArrowLeft"){
        hero.x -= heroVelocity;
    }
    if(e.code == "ArrowRight"){
        hero.x += heroVelocity;
    }
    if(e.code == "ArrowUp"){
        hero.y -= heroVelocity;
    }
    if(e.code == "ArrowDown"){
        hero.y += heroVelocity;
    }
}