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
  let speed = keyIsPressed ? 3 : 1 //  どこかのキーが押されていると鼓動が速くなる
  count = (count + speed) //% cycle;
  if(count > cycle){count=cycle-30}
  // BLANK[1]
count = constrain(count, cycle-30, cycle)
let size = count
fill(255,100,150)
  ellipse(width / 2, height / 2, size);
}
