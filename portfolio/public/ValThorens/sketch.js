let skirunner;
let skihus;
let skispor = new Array;
let trees = new Array;
let speed = 0;
let alive = false;
let score = 0;
let start = true;
let highscore = 0;
let liftfart = 0;
let liftplayer = 0;
let mode = [
  true,
  false,
  false,
  false,
  false,
]
let farve = [
  true,
  false,
  false
]

function setup() {
  createCanvas(600,800);
  if(localStorage.getItem("highscore") !== null){
    highscore = localStorage.getItem("highscore");
  }
}

function draw() {
  background(245)
  if(mode[0]){
    if(start){
      MenuStart();
    }
    Menu();
  }else if(mode[1]){
    if(start){
      StartGame();
    }
    Alive();
    if(farve[0]){
      fill(0,0,255);
    }else if(farve[1]){
      fill(255,0,0);
    }else if(farve[2]){
      fill(0);
    }
    for(let i = 0; i < 5; i++){
      rect(5, 40+160*i, 10,10);
      rect(585, 40+160*i, 10,10);
    }
  }else if(mode[2]){
    if(start){
      MenuStart();
    }
    GameOver();
  }else if(mode[3]){
    Lift();
  }else if(mode[4]){
    if(start){
      StartGame();
    }
    Alive();
    ChoosePist();
  }

}

function ChoosePist(){
  fill(0, 0, 255);
  rect(5, 700, 10, 10);
  rect(185, 700, 10, 10);
  rect(5, 780, 10, 10);
  rect(185, 780, 10, 10);
  rect(20, 750, 160, 50);
  fill(255, 0, 0);
  rect(215, 700, 10, 10);
  rect(385, 700, 10, 10);
  rect(215, 780, 10, 10);
  rect(385, 780, 10, 10);
  rect(230, 750, 150, 50);
  fill(0);
  rect(415, 700, 10, 10);
  rect(585, 700, 10, 10);
  rect(415, 780, 10, 10);
  rect(585, 780, 10, 10);
  rect(430, 750, 150, 50);
  if(skirunner.y+skirunner.speed > 780){
    if(skirunner.x > 0 && skirunner.x < 200){
      farve = [
        true,
        false,
        false
      ];
    }else if(skirunner.x >= 200 && skirunner.x < 400){
      farve = [
        false,
        true,
        false
      ];
    }else if(skirunner.x >= 400 && skirunner.x < 600){
      farve = [
        false,
        false,
        true
      ];
    }
    mode = [
      false,
      true,
      false,
      false,
      false,
    ];
    start = true;
    for(let i = skispor.length; i > 0; i--){
      skispor.splice(i, 1);
    }
  }
}

function Lift(){
  liftfart += 5;
  liftplayer += 5;
  stroke(0);
  if(liftfart == 180){
    liftfart = 0;
  }
  if(liftplayer == 800){
    mode = [false, false, false, false, true];
    liftplayer = 0;
    liftfart = 0;
  }
  fill(0);
  rect(width/2+55, 785-liftplayer-30, 5, 70)
  rect(width/2+70, 785-liftplayer-30, 5, 70)
  for(let i = 0; i < 6; i++){
    fill(200);
    rect(width/2-155, -40 + i*180 + liftfart, 110, 20);
    rect(width/2-155, -50 + i*180 + liftfart, 110, 10);
    rect(width/2+45, 75 + i*180 - liftfart, 110, 20);
    rect(width/2+45, 95 + i*180 - liftfart, 110, 10);
  }
  fill(255, 150, 0);
  rect(width/2+50, 785-liftplayer, width/20, width/20);
  fill(0, 255, 0);
  rect(width/2+50+width/20/5, 785+width/20/20-liftplayer, width/20/5*3, width/20/5*3);
  fill(0);
  rect(width/2-105, 0, 5, 800);
  rect(width/2+100, 0, 5, 800);
  fill(51);
  rect(width/2-25, height/2-25, 50, 50);
  rect(width/2-125, height/2-20, 250, 40);



}

function StartGame(){
  skirunner = new SkiRunner();
  skihus = new Skihus();
  for(let i = 0; i < 10; i++){
    trees[i] = new Tree(random(width-50), random(height/3*2, height*5));
  }
  alive = true;
  speed = 10;
  start = false;
}

function MenuStart(){
  for(let i = 0; i < 10; i++){
    trees[i] = new Tree(random(width-50), random(50, height));
  }
  start = false;
}

function Alive(){
  if(alive){
    score += speed;
    if(farve[0]){
      speed += 0.05;
    }else if(farve[1]){
      speed += 0.075;
    }else if(farve[2]){
      speed += 0.1;
    }

  }
  collision();
  if(skispor.length > 50){
    skispor.splice(0, 1);
  }
  for(let i = 0; i < skispor.length; i++){
    skispor[i].update();
    skispor[i].draw();
  }
  if(!mode[4]){
    for(let i = 0; i < trees.length; i++){
      trees[i].update();
      trees[i].draw();
    }
    skihus.draw();
  }
  skirunner.update();
  skirunner.draw();
  fill(0);
  textSize(45);
  text("Points: " + floor(score/100), 10, 40);

}

function Menu(){
  for(let i = 0; i < trees.length; i++){
    trees[i].update();
    trees[i].draw();
  }
  fill(245, 245, 245, 150);
  rect(0, 0, width, height);
  fill(200, 200, 200, 100);
  rect(width/2-100, height/3-25, 200, 50);
  fill(0);
  textSize(40);
  text("start", width/2-40, height/3+13);
  if(mouseX > width/2-100 && mouseX < width/2+100 && mouseY > height/3-25 && mouseY < height/3+25){
    fill(200, 200, 200);
    rect(width/2-100, height/3-25, 200, 50);
    fill(0);
    textSize(40);
    text("start", width/2-40, height/3+13);
  }
}

function Skihus(){
  this.x = 400;
  this.y = random(1000, 4000);
  this.w = 200;
  this.h = 50;
  this.vogen = 0;
  this.draw = function(){
    this.vogen++;
    this.y -= speed;
    if(this.vogen == 100){
      this.vogen = 0;
    }
    if(this.y < -100){
      this.y = random(4000, 8000);
    }
    fill(200);
    rect(0+this.vogen, this.y+this.h/2-24, 8, 24);
    rect(50-this.vogen, this.y+this.h/2+2, 8, 24);
    rect(100+this.vogen, this.y+this.h/2-24, 8, 24);
    rect(150-this.vogen, this.y+this.h/2+2, 8, 24);
    rect(200+this.vogen, this.y+this.h/2-24, 8, 24);
    rect(250-this.vogen, this.y+this.h/2+2, 8, 24);
    rect(300+this.vogen, this.y+this.h/2-24, 8, 24);
    rect(350-this.vogen, this.y+this.h/2+2, 8, 24);
    rect(450-this.vogen, this.y+this.h/2+2, 8, 24);
    fill(0);
    rect(0, this.y+this.h/2-14, 400, 4);
    rect(0, this.y+this.h/2+10, 400, 4);
    fill(51, 50, 200);
    rect(this.x, this.y, this.w, this.h);
    fill(75, 75, 240);
    rect(this.x+10, this.y+10, this.w-20, this.h-20);
    fill(95, 95, 255);
    rect(this.x+20, this.y+20, this.w-40, this.h-40);
  }
}

function GameOver(){
  for(let i = 0; i < trees.length; i++){
    trees[i].update();
    trees[i].draw();
  }
  fill(245, 245, 245, 150);
  rect(0, 0, width, height);
  fill(200, 200, 200, 100);
  rect(width/2-100, height/3-25, 200, 50);
  fill(0);
  textSize(40);
  text("Play again", width/2-90, height/3+13);
  if(mouseX > width/2-100 && mouseX < width/2+100 && mouseY > height/3-25 && mouseY < height/3+25){
    fill(200, 200, 200);
    rect(width/2-100, height/3-25, 200, 50);
    fill(0);
    textSize(40);
    text("Play again", width/2-90, height/3+13);
  }
  fill(0);
  textSize(100);
  text("GameOver", width/2-245, 100);
  textSize(50);
  text("Your score was: " + floor(score/100), width/2-200, 159);
  text("Your Highscore is: " + floor(highscore/100), width/2-220, 215);

}

function mousePressed(){
  if(mouseX > width/2-100 && mouseX < width/2+100 && mouseY > height/3-25 && mouseY < height/3+25 && mode[0]){
    mode[0] = false;
    mode[1] = true;
    start = true;
  }else if(mouseX > width/2-100 && mouseX < width/2+100 && mouseY > height/3-25 && mouseY < height/3+25 && mode[2]){
    mode[2] = false;
    mode[1] = true;
    start = true;
    score = 0;
  }
}

function collision(){
  if(skirunner.y+skirunner.w > skihus.y && skirunner.y < skihus.y){
    if(skihus.x+skihus.w > skirunner.x && skihus.x < skirunner.x+skirunner.w){
      speed = 0;
      mode = [
        false,
        false,
        false,
        true,
        false,
      ]
      start = true;
    }
  }
  for(let i = 0; i < trees.length; i++){
    if(skirunner.y+skirunner.w > trees[i].y-trees[i].h && skirunner.y < trees[i].y){
      if(trees[i].x+trees[i].h > skirunner.x && trees[i].x < skirunner.x+skirunner.w){
        speed = 0;
        alive = false;
        mode[1] = false;
        mode[2] = true;
        farve = [
          true,
          false,
          false
        ];
        start = true;
        if(score > highscore){
          highscore = score;
          localStorage.setItem("highscore", highscore);
        }
      }
    }
    if(skihus.y+skihus.w > trees[i].y-trees[i].h && skihus.y < trees[i].y){
      if(trees[i].x+trees[i].h > skihus.x && trees[i].x < skihus.x+skihus.w){
        trees[i].y = random(1000, 2000);
      }
    }
  }
}

function SkiSpor(x, y){
  this.w = width/20;
  this.x = x;
  this.y = y;

  this.update = function(){
    this.y -= speed;
  }
  this.draw = function(){
    fill(230);
    noStroke();
    rect(this.x, this.y, this.w, this.w);
  }
}

function SkiRunner(x = width/2-15, y = height/5-15){
  this.w = width/20;
  this.x = x;
  this.y = y;
  this.speed = 0;

  this.update = function(){
    if(keyIsDown(LEFT_ARROW) && this.x > 0){
      this.x -= 10;
      if(speed > 0){
        speed -= 0.1;
      }
    }else if(keyIsDown(RIGHT_ARROW) && this.x < width-this.w){
      this.x += 10;
      if(speed > 0){
        speed -= 0.1;
      }
    }
    skispor[skispor.length] = new SkiSpor(this.x, this.y-speed+this.speed);
    if(mode[4]){
      this.speed += 5;
    }else{
      this.speed = 0;
    }
  }
  this.draw = function(){
    fill(0);
    rect(this.x+5, this.y-10+this.speed, 5, 70);
    rect(this.x+20, this.y-10+this.speed, 5, 70);
    fill(255, 150, 0);
    rect(this.x, this.y+this.speed, this.w, this.w);
    fill(0, 255, 0);
    rect(this.x+this.w/5, this.y+this.w/5*2+this.speed, this.w/5*3, this.w/5*3);
  }
}

function Tree(x, y){
  this.x = x;
  this.y = y;
  this.h = 50;
  this.update = function(){
    this.y -= speed;
    if(this.y < -50){
      this.y = random(height, height*5);
      this.x = random(width-50);
    }
  }
  this.draw = function(){
    stroke(0);
    fill(10, 200, 0);
    triangle(this.x, this.y, this.x+this.h/2, this.y-this.h,this.x+this.h, this.y);
    triangle(this.x+this.h/10, this.y-this.h/2, this.x+this.h/2, this.y-this.h-this.h/2+this.h/5,this.x+this.h-this.h/10, this.y-this.h/2);
  }
}
