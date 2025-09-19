// vocal, drum, bass, and other are volumes ranging from 0 to 100
let drum_rad;
let drum_shadow_rad = 150
let drum_x = 200
let drum_y = 550

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  //BACKGROUND>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  background(248, 252, 10)//KKB yellow
  strokeWeight(0)
  fill(255, 196, 0, 70) //orange
  ellipse(150, 100, 350, 350)
  fill(10, 236, 252, 100) //KKB blue
  ellipse(400, 300, 500, 500)
  fill(255, 128, 200, 100) //pink
  ellipse(900, 250, 400, 400,)
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
   fill(255, 128, 200)
   ellipse(drum_x - 50, drum_y + 10, drum_shadow_rad, drum_shadow_rad)

    stroke(255, 128, 200, 100) //pink
   strokeWeight(12)
   fill(255, 128, 200)
   ellipse(1280 - drum_x + 50, drum_y + 10, drum_shadow_rad, drum_shadow_rad)

   stroke(10, 236, 252) //KKB blue
   strokeWeight(12)
   fill(255) //white
   ellipse(drum_x - 40, drum_y, drum_rad, drum_rad)
   
   stroke(10, 236, 252) //KKB blue
   strokeWeight(12)
   fill(255) //white
   ellipse(1280 - drum_x + 40, drum_y, drum_rad, drum_rad)

   //additional top drums

      stroke(255, 128, 200, 100) //pink
   strokeWeight(12)
   fill(255, 128, 200)
   ellipse(drum_x + 20, drum_y - 230, drum_shadow_rad - 55, drum_shadow_rad - 55)

    stroke(255, 128, 200, 100) //pink
   strokeWeight(12)
   fill(255, 128, 200)
   ellipse(1280 - drum_x - 20, drum_y - 230, drum_shadow_rad - 55, drum_shadow_rad - 55)

   stroke(10, 236, 252) //KKB blue
   strokeWeight(12)
   fill(255) //white
   ellipse(drum_x + 30, drum_y - 230, drum_rad -70, drum_rad - 70)
   
   stroke(10, 236, 252) //KKB blue
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