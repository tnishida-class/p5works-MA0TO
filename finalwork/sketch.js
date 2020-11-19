// 最終課題を制作しよう
let ballx, bally, vx, vy, barx, barwidth, barheight,a=0 ,b=255,c = 0
const g = 1
const vyMax = 30

function setup(){
  createCanvas(windowWidth, windowHeight);
  //ballx = width / 2;
  //bally = height / 3.5;
  vx = 8;
  vy = 8;
  barwidth=100
  barheight=20
  barx = width / 2 - barwidth / 2
  bary = height - barheight*6
  }



function draw(){
  background(80, 80, 255);


  fill(255)
  circle(ballx, bally, 20);
  ballx += vx;
  bally += vy;

vy = constrain(vy + g, -vyMax, vyMax);

//壁に跳ね返る
  if(ballx < 0 || ballx > width){ vx = -1 * vx }
  if(bally < 0 || bally > height){ background(0, 0, 100)}


  ballx = constrain(ballx, 0, width);
  bally = constrain(bally, 0, height);

//バーの色が変わる
  a = a + 6
  if(a > 255){a=0}
  b = b - 2
  if(b < 0){b=255}
  c = c + 4
  if(c > 255){c=0}
  rectgamebar(a, b, c)

//バーに跳ね返る
if(ballx + 10 > barx && ballx - 10 < barx + barwidth && bally + 10 > bary && bally + 10 < bary + barheight){vy = -1 * vy;
vx = random(-14,14)
}


  noStroke()
  fill(70)
  ellipse(width/2+13,height/7-3,100,50)
  fill(255,200,0)
  strokeWeight(5)
  text("start",width/2,height/7)

}


function mouseClicked(){
ballx=mouseX
bally=mouseY
push()
vx = 0
pop()

}

//自作関数（色が変わるアニメーション）
function rectgamebar(a, b, c){
  push()
 fill(a, b, c)
 rect(barx, bary, barwidth, barheight);
 barx = mouseX - barwidth / 2
 barx = constrain(barx, 0 , width-barwidth)
 pop()
 }




function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
