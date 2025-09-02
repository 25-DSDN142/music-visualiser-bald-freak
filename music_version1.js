// vocal, drum, bass, and other are volumes ranging from 0 to 100
let drum_rad;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(248, 252, 10)//KKB yellow
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  //drums
  drum_rad = map(drum, 0, 100, 75, 200)
   stroke(10, 236, 252) //KKB blue
   strokeWeight(12)
   fill(255)
   ellipse(200, 550, drum_rad, drum_rad)
   
   stroke(10, 236, 252) //KKB blue
   strokeWeight(12)
   fill(255)
   ellipse(1080, 550, drum_rad, drum_rad)
 
   // display "words"
   stroke(0)
   strokeWeight(1)
   fill(0)
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
}