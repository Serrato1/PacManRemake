let canvas = document.getElementById('game');
let ctx = canvas.getContext("2d");

class Food{
    constructor(color,x,y){
        this.color = color;
        this.x = x;
        this.y = y;
        this.diameter = 10
    }
}

let crumb = new Food('black',20,20)

class Character{
    constructor(){
        this.alive = true; 
        this.x = 0;
        this.y = 0;
        this.diameter = 15;
        this.color = "yellow"
    }
}
let pacman = new Character();

function createFood(){
    let foodArray = [];
    let randomX = Math.random() * canvas.width ; 
    let randomY = Math.random() * canvas.height ;
    for(i = 0 ; i<= 100 ; i++){
        foodArray.push(new Food('black', randomX, randomY ) ) 
    }
    console.log(foodArray)
}
createFood();
function drawFood(){
    ctx.beginPath();
    ctx.arc(crumb.x,crumb.y, crumb.diameter,0, Math.PI*2);
    ctx.fillStyle = crumb.color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawPacman(){
    ctx.beginPath();
    ctx.arc(pacman.x,pacman.y, pacman.diameter,0, Math.PI*2);
    ctx.fillStyle = pacman.color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}


function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPacman();
    drawFood();
}

document.addEventListener('keydown',(event)=>{
    // console.log(event.key);
    switch(event.key){
        case 'ArrowUp' :
            pacman.y -= 15
            console.log("up");
            break ; 
        case 'ArrowDown':
            pacman.y += 15
            console.log("down"); 
            break;
        case 'ArrowRight':
            pacman.x += 15
            console.log('right'); 
            break;
        case 'ArrowLeft':
        pacman.x   -= 15

            console.log("left")
            break;
        default : 
            console.log("not a valid key")
            break;
    }
})

setInterval(draw, 1)
