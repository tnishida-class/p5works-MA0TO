// 小手調べ
function setup(){
  for(let i = 1; i < 11; i++){
    // BLANK[1]
noFill();
  stroke(255,0,0);
  let x = i*10;
  ellipse(50,50,x, x);
}
for(let i = 1; i < 6; i++){
noFill();
stroke(0,0,255);
let x = i*10;
ellipse(50,50,x, x);
}
}
