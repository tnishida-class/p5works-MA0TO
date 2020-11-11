// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(255, 200, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
count = constrain(count, cycle-30, cycle)
let size = count

fill(255,100,150)
  ellipse(width / 2, height / 2, size);
}
