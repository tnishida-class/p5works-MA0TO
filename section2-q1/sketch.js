// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    // BLANK[1]

  　　　　　　　　　　//for2回使うパターン
// noFill();
//   stroke(255,0,0);
//   let x = (i+1)*10;
//   ellipse(50,50,x, x);}
// for(let i = 0; i < 5; i++){noFill();
// stroke(0,0,255);
// let x = (i+1)*10;
// ellipse(50,50,x, x);}
// }

　　　　　　　　　　　// ifで書くパターン（書き直し）
 noFill();
let x = (i+1)*10;
if(i<5){stroke(0,0,255);
 ellipse(50,50,x, x);}
else{stroke(255,0,0);
   ellipse(50,50,x, x);}
}
}
