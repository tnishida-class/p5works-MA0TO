// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon(100,100,255,"I like eating and sleeping.",100,200);
}

function balloon(r,g,b,t,x,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 10;
  fill(r,g,b);
  noStroke();
  rect(x, y, w + p*2 , h );
  fill(255);
  text(t, p+x, y+p*1.3);
  fill(r,g,b)
  triangle(x+w+p*2-1,y+p,x+w+p*2+20,y+p/2,x+w+p*2,y+p/2)
}
