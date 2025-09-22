// vocal, drum, bass, and other are volumes ranging from 0 to 100
let drum_rad;
let drum_shadow_rad = 150
let drum_x = 200
let drum_y = 550

let Xmove1 = 150
let changeDirection1 = false
let Xmove2 = 400
let changeDirection2 = false
let Xmove3 = 900
let changeDirection3 = true
let Xmove4 = 1200
let changeDirection4 = false
let Xmove5 = 100
let changeDirection5 = true
let Xmove6 = 500
let changeDirection6 = false
let Xmove7 = 1000
let changeDirection7 = false
let Xmove8 = 1150
let changeDirection8 = false
let Xmove9 = 700
let changeDirection9 = false
let Xmove10 = 500
let changeDirection10 = false

var bass_rad;
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  //BACKGROUND>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  bass_rad = map(bass, 0, 100, 350, 450)


  if(Xmove1 >= 200){
    changeDirection1 = true
  } else if(Xmove1 <= 100){
    changeDirection1 = false
  }
  if (Xmove1 >= 100 && changeDirection1 == false){
    Xmove1 = Xmove1 + 0.5
  } else if(changeDirection1 == true){
    Xmove1 = Xmove1 - 0.5
  }

    if(Xmove2 >= 470){
    changeDirection2 = true
  } else if(Xmove2 <= 330){
    changeDirection2 = false
  }
  if (Xmove2 >= 330 && changeDirection2 == false){
    Xmove2 = Xmove2 + 0.5
  } else if(changeDirection2 == true){
    Xmove2 = Xmove2 - 0.5
  }

  if(Xmove3 >= 960){
    changeDirection3 = true
  } else if(Xmove3 <= 840){
    changeDirection3 = false
  }
  if (Xmove3 >= 840 && changeDirection3 == false){
    Xmove3 = Xmove3 + 0.5
  } else if(changeDirection3 == true){
    Xmove3 = Xmove3 - 0.5
  }

  if(Xmove4 >= 1250){
    changeDirection4 = true
  } else if(Xmove4 <= 1150){
    changeDirection4 = false
  }
  if (Xmove4 >= 1150 && changeDirection4 == false){
    Xmove4 = Xmove4 + 0.5
  } else if(changeDirection4 == true){
    Xmove4 = Xmove4 - 0.5
  }

  if(Xmove5 >= 180){
    changeDirection5 = true
  } else if(Xmove5 <= 20){
    changeDirection5 = false
  }
  if (Xmove5 >= 20 && changeDirection5 == false){
    Xmove5 = Xmove5 + 0.5
  } else if(changeDirection5 == true){
    Xmove5 = Xmove5 - 0.5
  }

  if(Xmove6 >= 550){
    changeDirection6 = true
  } else if(Xmove6 <= 450){
    changeDirection6 = false
  }
  if (Xmove6 >= 450 && changeDirection6 == false){
    Xmove6 = Xmove6 + 0.5
  } else if(changeDirection6 == true){
    Xmove6 = Xmove6 - 0.5
  }

  if(Xmove7 >= 1040){
    changeDirection7 = true
  } else if(Xmove7 <= 960){
    changeDirection7 = false
  }
  if (Xmove7 >= 960 && changeDirection7 == false){
    Xmove7 = Xmove7 + 0.5
  } else if(changeDirection7 == true){
    Xmove7 = Xmove7 - 0.5
  }

  if(Xmove8 >= 1250){
    changeDirection8 = true
  } else if(Xmove8 <= 1050){
    changeDirection8 = false
  }
  if (Xmove8 >= 1050 && changeDirection8 == false){
    Xmove8 = Xmove8 + 0.5
  } else if(changeDirection8 == true){
    Xmove8 = Xmove8 - 0.5
  }

  if(Xmove9 >= 780){
    changeDirection9 = true
  } else if(Xmove9 <= 620){
    changeDirection9 = false
  }
  if (Xmove9 >= 620 && changeDirection9 == false){
    Xmove9 = Xmove9 + 0.5
  } else if(changeDirection9 == true){
    Xmove9 = Xmove9 - 0.5
  }
  
  if(Xmove10 >= 560){
    changeDirection10 = true
  } else if(Xmove10 <= 440){
    changeDirection10 = false
  }
  if (Xmove10 >= 440 && changeDirection10 == false){
    Xmove10 = Xmove10 + 0.5
  } else if(changeDirection10 == true){
    Xmove10 = Xmove10 - 0.5
  }
  background(237, 252, 71)//KKB yellow
  stroke(255)
  strokeWeight(1)
  fill(255, 196, 0, 70) //orange
  ellipse(Xmove1, 100, bass_rad, bass_rad)
  fill(10, 236, 252, 100) //KKB blue
  ellipse(Xmove2, 300, bass_rad + 150, bass_rad + 150)
  fill(255, 128, 200, 180) //pink
  ellipse(Xmove3, 250, bass_rad + 50, bass_rad + 50)
  fill(252, 186, 3, 150) //orange2
  ellipse(Xmove4, 310, bass_rad, bass_rad)
  fill(109, 126, 237, 180) //blue
  ellipse(Xmove5, 650, bass_rad + 150, bass_rad + 150)
  fill(118, 196, 79, 100) //olive green
  ellipse(Xmove6, 50, bass_rad - 150,  bass_rad - 150)
  fill(232, 72, 72, 150) //red
  ellipse(Xmove7, 700, bass_rad - 50, bass_rad - 50)
  fill(85, 215, 217, 180)//skyblue
  ellipse(Xmove8, 70, bass_rad - 250, bass_rad - 250)
  stroke(255, 255, 255,) //white
  strokeWeight(18)
  fill(0,0,0,0) //hollow
  ellipse(Xmove9, 650, bass_rad + 50, bass_rad + 50)
  strokeWeight(5)
  ellipse(Xmove10, 150, bass_rad - 250, bass_rad - 250)
  textFont('Comic Sans MS'); // please use CSS safe fonts
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
   stroke(245, 154, 203, 100)
   strokeWeight(10)
   fill(255)
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
}