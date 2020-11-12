// テキスト「アニメーション」
let x, y, vx, vy, d=0 , a

function setup(){
  createCanvas(windowWidth, windowHeight);
  //x=width/2
  //y=height/2
  vx = 8;
  vy = 8;
}

function mouseClicked(){　　//クリックした場所から流れ星
  x=mouseX
  y=mouseY
}

function draw(){
  background(160, 192, 255);
  // BLANK[2] (hint: 作った star 関数を使います)
fill(50,100,255);
star(x, y, 20, a);
d = d + 1;
if(d>3){d=0};
a = d;
x=x+vx
y=y+vy

  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r, angle){
  beginShape();
  noStroke();
  for(var i = 0; i < 20; i++){
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
var theta = TWO_PI * i * 2 / 5 - HALF_PI * angle;


    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
