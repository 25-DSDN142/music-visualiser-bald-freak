// vocal, drum, bass, and other are volumes ranging from 0 to 100
let drum_rad;
let drum_shadow_rad = 150
let drum_x = 200
let drum_y = 550

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(248, 252, 10)//KKB yellow
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  //drums
  drum_rad = map(drum, 0, 100, 75, 200)
  if(drum_rad => 150){
    drum_shadow_rad = map(drum, 0, 100, 150, 200)
  } else {
    drum_shadow_rad = 150
  }
   stroke(255, 128, 200, 100) //pink
   strokeWeight(12)
   fill(255, 128, 200)
   ellipse(drum_x - 10, drum_y + 10, drum_shadow_rad, drum_shadow_rad)

    stroke(255, 128, 200, 100) //pink
   strokeWeight(12)
   fill(255, 128, 200)
   ellipse(1280 - drum_x + 10, drum_y + 10, drum_shadow_rad, drum_shadow_rad)

   stroke(10, 236, 252) //KKB blue
   strokeWeight(12)
   fill(255)
   ellipse(drum_x, drum_y, drum_rad, drum_rad)
   
   stroke(10, 236, 252) //KKB blue
   strokeWeight(12)
   fill(255)
   ellipse(1280 - drum_x, drum_y, drum_rad, drum_rad)
 
   // display "words"
   stroke(0)
   strokeWeight(1)
   fill(0)
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
}