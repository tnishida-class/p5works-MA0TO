// チェッカー
function setup() {
  createCanvas(400, 400);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
  if((i+j)%2==1){
    fill(128)
    rect(size*i,size*j,size,size)}

  if((i+j)%2==1 && j<3 ){
    fill(255,0,0)
    ellipse(size*i+size/2,size*j+size/2,size*0.85,size*0.85)}

  if((i+j)%2==1 && 4<j){
    fill(0)
    ellipse(size*i+size/2,size*j+size/2,size*0.85,size*0.85)}
}
}
}
