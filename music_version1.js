// vocal, drum, bass, and other are volumes ranging from 0 to 100
let drum_rad;
let drum_shadow_rad = 150
let drum_x = 200
let drum_y = 550

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  //BACKGROUND>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  background(237, 252, 71)//KKB yellow
  stroke(255)
  strokeWeight(1)
  fill(255, 196, 0, 70) //orange
  ellipse(150, 100, 350, 350)
  fill(10, 236, 252, 100) //KKB blue
  ellipse(400, 300, 500, 500)
  fill(255, 128, 200, 180) //pink
  ellipse(900, 250, 400, 400,)
  fill(252, 186, 3, 150) //orange2
  ellipse(1200, 310, 350, 350)
  fill(109, 126, 237, 180) //blue
  ellipse(100, 650, 500, 500)
  fill(118, 196, 79, 100) //olive green
  ellipse(500, 50, 200, 200)
  fill(232, 72, 72, 150) //red
  ellipse(1000, 700, 300, 300)
  fill(85, 215, 217, 180)//skyblue
  ellipse(1150, 70, 100, 100)
  stroke(255, 255, 255,) //white
  strokeWeight(18)
  fill(0,0,0,0) //hollow
  ellipse(700, 650, 400, 400)
  strokeWeight(5)
  ellipse(500, 150, 100, 100)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  //DRUMS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  drum_rad = map(drum, 0, 100, 75, 200)
  if(drum_rad => 150){
    drum_shadow_rad = map(drum, 0, 100, 150, 200)
  } else {
    drum_shadow_rad = 150
  }
  
  //main bottom drums
   stroke(255, 128, 200, 100) //pink
   strokeWeight(12)
   fill(252, 186, 3)//orange
   ellipse(drum_x - 50, drum_y + 10, drum_shadow_rad, drum_shadow_rad)

    stroke(255, 128, 200, 100) //pink
   strokeWeight(12)
   fill(255, 99, 110)//red
   ellipse(1280 - drum_x + 50, drum_y + 10, drum_shadow_rad, drum_shadow_rad)

   stroke(132, 172, 245) //light blue
   strokeWeight(12)
   fill(255) //white
   ellipse(drum_x - 40, drum_y, drum_rad, drum_rad)
   
   stroke(99, 199, 153) //green
   strokeWeight(12)
   fill(255) //white
   ellipse(1280 - drum_x + 40, drum_y, drum_rad, drum_rad)

   
   //additional top drums
      stroke(255, 128, 200, 100) //pink
   strokeWeight(12)
   fill(252, 109, 161)//magenta
   ellipse(drum_x + 20, drum_y - 230, drum_shadow_rad - 55, drum_shadow_rad - 55)

    stroke(255, 128, 200, 100) //pink
   strokeWeight(12)
   fill(185, 132, 245)//purple
   ellipse(1280 - drum_x - 20, drum_y - 230, drum_shadow_rad - 55, drum_shadow_rad - 55)

   stroke(191, 186, 75) //yellow
   strokeWeight(12)
   fill(255) //white
   ellipse(drum_x + 30, drum_y - 230, drum_rad -70, drum_rad - 70)
   
   stroke(237, 109, 208) //pink
   strokeWeight(12)
   fill(255) //white
   ellipse(1280 - drum_x - 30, drum_y - 230, drum_rad - 70, drum_rad - 70)
 
   // display "words"
   stroke(0)
   strokeWeight(1)
   fill(0)
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
}