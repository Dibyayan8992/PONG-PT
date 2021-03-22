{
  var bx = 300;
  var by = 0;

  var bxmove = 7;
  var bymove = 8;

  var lpadx = 40;
  var lpady = 250;

  var rpadx = 560;
  var rpady = 250;

  var padmove = 10;

  var lscore = 0;
  var rscore = 0;
} //Basic Pong Variables

var lo = 0;
var ro = 0;

var fpbx = 300;
var fpby = 250;

var fpbxmove = 6;
var fpbymove = 8;

{
  var fplgoalx = 20;
  var fplgoaly = 250;

  var fpldtx = 100;
  var fpldty = 160;

  var fpldbx = 100;
  var fpldby = 340;

  var fplmtx = 250;
  var fplmty = 70;

  var fplmux = 250;
  var fplmuy = 190;

  var fplmlx = 250;
  var fplmly = 310;

  var fplmbx = 250;
  var fplmby = 420;

  var fplotx = 430;
  var fploty = 100;

  var fplomx = 430;
  var fplomy = 250;

  var fplobx = 430;
  var fploby = 400;

} //Full Foospong Left

{
  var fprgoalx = 580;
  var fprgoaly = 250;

  var fprdtx = 500;
  var fprdty = 160;

  var fprdbx = 500;
  var fprdby = 340;

  var fprmtx = 350;
  var fprmty = 70;

  var fprmux = 350;
  var fprmuy = 190;

  var fprmlx = 350;
  var fprmly = 310;

  var fprmbx = 350;
  var fprmby = 420;

  var fprotx = 170;
  var fproty = 100;

  var fpromx = 170;
  var fpromy = 250;

  var fprobx = 170;
  var fproby = 400;

} //Full Foospong Right

{
var fphlmtx = 230;
var fphlmty = 90;

var fphlmmx = 230;
var fphlmmy = 250;

var fphlmbx = 230;
var fphlmby = 400;

var fphlotx = 480;
var fphloty = 150;

var fphlobx = 480;
var fphloby = 350;
} //Half Foospong Left

{
var fphrmtx = 370;
var fphrmty = 90;

var fphrmmx = 370;
var fphrmmy = 250;

var fphrmbx = 370;
var fphrmby = 400;

var fphrotx = 120;
var fphroty = 150;

var fphrobx = 120;
var fphroby = 350;
} //Half Foospong Right

var fpgmove = 6;
var fpdmove = 8;
var fpmmove = 5;
var fpomove = 7;

var stage = 1;

function setup() {
  createCanvas(600, 500);

}

function draw() {
  background(0);

  // basicBackground();
  // colorPong();
  // basicBall();
  // basicPaddles();
  // basicScore();


  foosPongBackground();
  foosPongBall();
  // fullFoosPongPaddles();
  // fullFoosPongEasy();
  // fullFoosPongHard();
  // foosPongScore();
  // originalBounceCode();
  
  halfFoosPongPaddles();
  halfFoosPongHard();
  halfFoosPongBounce();
  foosPongScore();
  
}

function basicBackground() {
  fill(255, 60);
  rect(width / 2, (height / 2) - 210, 10, 50);
  rect(width / 2, (height / 2) - 140, 10, 50);
  rect(width / 2, (height / 2) - 70, 10, 50);
  rect(width / 2, height / 2, 10, 50);
  rect(width / 2, (height / 2) + 70, 10, 50);
  rect(width / 2, (height / 2) + 140, 10, 50);
  rect(width / 2, (height / 2) + 210, 10, 50);
}

function basicBall() {
  fill(255);
  ellipse(bx, by, 30, 30);
  bx = bx + bxmove;
  by = by + bymove;

  if (by >= 500 || by <= 0) {
    bymove = -bymove;
  }

  if (bx >= 600 || bx <= 0) {
    bx = 250;
    bxmove = -bxmove;
  }

}

function basicPaddles() {
  { //Left Paddle
    if (bx < lpadx + 13 && bx > lpadx - 13 && by > lpady - 70 && by < lpady + 70) {
      bxmove = -bxmove;
    } //Bounce

    if (keyIsDown('87')) {
      lpady = lpady - padmove;
    } //Move Up

    if (keyIsDown('83')) {
      lpady = lpady + padmove;
    } //Move Down

    if (lpady >= 540) {
      lpady = 0;
    } //Loop Bottom

    if (lpady <= -40) {
      lpady = 500;
    } //Loop Top

    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(lpadx, lpady, 15, 90);
  } //Left Paddle

  { //Right Paddle
    if (bx > rpadx - 13 && bx < rpadx + 13 && by > rpady - 70 && by < rpady + 70) {
      bxmove = -bxmove;
    } //Bounce

    if (keyIsDown('75')) {
      rpady = rpady - padmove;
    } //Move Up

    if (keyIsDown('77')) {
      rpady = rpady + padmove;
    } //Move Down

    if (rpady >= 540) {
      rpady = 0;
    } //Loop Bottom

    if (rpady <= -40) {
      rpady = 500;
    } //Loop Top

    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(rpadx, rpady, 15, 90);
  } //Right Paddle
}

function basicScore() {
  fill(255);
  textSize(40);
  textAlign(CENTER);

  if (bx >= 590) {
    lscore = lscore + 1;
  }
  if (bx <= 10) {
    rscore = rscore + 1;
  }
  text(lscore, (width / 2) - 40, 53);
  text(rscore, (width / 2) + 40, 53);

  if (lscore == 10) {
    textSize(60);
    text('Player 1 Wins!', width / 2, height / 2);
    bx = 300;
    by = 100;
    bxmove = 0;
    bymove = 0;
  }

  if (rscore == 10) {
    textSize(60);
    text('Player 2 Wins!', width / 2, height / 2);
    bx = 300;
    by = 100;
    bxmove = 0;
    bymove = 0;
  }

}

function colorPong() {
  
  fill(255,0,0,lo);
  rect(width/2,height/2, 600,500);
  
  fill(0,0,255,ro);
  rect(width/2,height/2, 600,500);
   
  {//Color Change
    
  if (lscore == 1) {
  lo = 10;
  }
  if (lscore == 2) {
  lo = 15;
  }
  if (lscore == 3) {
  lo = 20;
  }
  if (lscore == 4) {
  lo = 25;
  }
  if (lscore == 5) {
  lo = 30;
  }
  if (lscore == 6) {
  lo = 35;
  }
  if (lscore == 7) {
  lo = 40;
  }
  if (lscore == 8) {
  lo = 45;
  }
  if (lscore == 9) {
  lo = 50;
  }
  if (lscore == 10) {
  lo = 100;
  ro = 10;
  }
  
  if (rscore == 1) {
  ro = 15;
  }
  if (rscore == 2) {
  ro = 25;
  }
  if (rscore == 3) {
  ro = 35;
  }
  if (rscore == 4) {
  ro = 45;
  }
  if (rscore == 5) {
  ro = 55;
  }
  if (rscore == 6) {
  ro = 65;
  }
  if (rscore == 7) {
  ro = 75;
  }
  if (rscore == 8) {
  ro = 85;
  }
  if (rscore == 9) {
  ro = 95;
  }
  if (rscore == 10) {
  ro = 100;
  lo = 10;
  }
  } //Color Change
}

{

function foosPongBackground() {
  rectMode(CENTER);
  strokeWeight(10);
  stroke(255);
  fill(0);

  ellipse(65, height / 2, 140);
  ellipse(535, height / 2, 140);

  rect(40, height / 2, 100, 280);
  rect(560, height / 2, 100, 280);

  rect(20, height / 2, 50, 170);
  rect(580, height / 2, 50, 170);

  ellipse(width / 2, height / 2, 145);

  ellipse(width / 2, height / 2, 20);
  line(width / 2, 0, width / 2, 500);

  fill(0, 220);
  rect(width / 2, height / 2, 700, 600);

}

function foosPongBall() {
  fill(255);
  noStroke();
  ellipse(fpbx, fpby, 30, 30);
  fpbx = fpbx + fpbxmove;
  fpby = fpby + fpbymove;


  if (fpby >= 500 || fpby <= 0) {
    fpbymove = -fpbymove;
  }

  if (fpbx >= 640 || fpbx <= -40) {
    fpbx = 300;
    fpby = 250;
    fpbxmove = -fpbxmove;
  }

  if (fpbx <= 0 && fpby <= 170 || fpbx <= 0 && fpby >= 330) {
    fpbxmove = -fpbxmove;
  }
  if (fpbx >= 600 && fpby <= 170 || fpbx >= 600 && fpby >= 330) {
    fpbxmove = -fpbxmove;
  }

}

function fullFoosPongPaddles() {
  fill(240, 44, 56);
  noStroke();
  rect(fplgoalx, fplgoaly, 15, 60);

  rect(fpldtx, fpldty, 15, 60);
  rect(fpldbx, fpldby, 15, 60);

  rect(fplmtx, fplmty, 15, 60);
  rect(fplmux, fplmuy, 15, 60);
  rect(fplmlx, fplmly, 15, 60);
  rect(fplmbx, fplmby, 15, 60);

  rect(fplotx, fploty, 15, 60);
  rect(fplomx, fplomy, 15, 60);
  rect(fplobx, fploby, 15, 60);

  fill(40, 105, 230);
  rect(fprgoalx, fprgoaly, 15, 60);

  rect(fprdtx, fprdty, 15, 60);
  rect(fprdbx, fprdby, 15, 60);

  rect(fprmtx, fprmty, 15, 60);
  rect(fprmux, fprmuy, 15, 60);
  rect(fprmlx, fprmly, 15, 60);
  rect(fprmbx, fprmby, 15, 60);

  rect(fprotx, fproty, 15, 60);
  rect(fpromx, fpromy, 15, 60);
  rect(fprobx, fproby, 15, 60);

  //Place Original Code Here

  { //Red Boundaries
    { //Goalie Boundaries
      if (fplgoaly <= 190) {
        fplgoaly = fplgoaly + fpgmove;
      }
      if (fplgoaly >= 310) {
        fplgoaly = fplgoaly - fpgmove;
      }
    } //Goalie Boundaries

    { //Defense Boundaries
      if (fpldty <= 30) {
        fpldty = fpldty + fpdmove;
        fpldby = fpldby + fpdmove;
      }
      if (fpldby >= 470) {
        fpldty = fpldty - fpdmove;
        fpldby = fpldby - fpdmove;
      }
    } //Defense Boundaries

    { //Mid Boundaries
      if (fplmty <= 30) {
        fplmty = fplmty + fpmmove;
        fplmby = fplmby + fpmmove;
        fplmuy = fplmuy + fpmmove;
        fplmly = fplmly + fpmmove;
      }
      if (fplmby >= 470) {
        fplmty = fplmty - fpmmove;
        fplmby = fplmby - fpmmove;
        fplmuy = fplmuy - fpmmove;
        fplmly = fplmly - fpmmove;
      }
    } //Mid Boundaries

    { //Offense Boundaries
      if (fploty <= 30) {
        fploty = fploty + fpomove;
        fploby = fploby + fpomove;
        fplomy = fplomy + fpomove;
      }
      if (fploby >= 470) {
        fploty = fploty - fpomove;
        fploby = fploby - fpomove;
        fplomy = fplomy - fpomove;
      }
    } //Offense Boundaries
  } //Red Boundaries

  { //Blue Boundaries
    { //Goalie Boundaries
      if (fprgoaly <= 190) {
        fprgoaly = fprgoaly + fpgmove;
      }
      if (fprgoaly >= 310) {
        fprgoaly = fprgoaly - fpgmove;
      }
    } //Goalie Boundaries

    { //Defense Boundaries
      if (fprdty <= 30) {
        fprdty = fprdty + fpdmove;
        fprdby = fprdby + fpdmove;
      }
      if (fprdby >= 470) {
        fprdty = fprdty - fpdmove;
        fprdby = fprdby - fpdmove;
      }
    } //Defense Boundaries

    { //Mid Boundaries
      if (fprmty <= 30) {
        fprmty = fprmty + fpmmove;
        fprmby = fprmby + fpmmove;
        fprmuy = fprmuy + fpmmove;
        fprmly = fprmly + fpmmove;
      }
      if (fprmby >= 470) {
        fprmty = fprmty - fpmmove;
        fprmby = fprmby - fpmmove;
        fprmuy = fprmuy - fpmmove;
        fprmly = fprmly - fpmmove;
      }
    } //Mid Boundaries

    { //Offense Boundaries
      if (fproty <= 30) {
        fproty = fproty + fpomove;
        fproby = fproby + fpomove;
        fpromy = fpromy + fpomove;
      }
      if (fproby >= 470) {
        fproty = fproty - fpomove;
        fproby = fproby - fpomove;
        fpromy = fpromy - fpomove;
      }
    } //Offense Boundaries
  } //Blue Boundaries

  ellipse(fplgoalx + 10, fplgoaly - 35,5)
}

function fullFoosPongEasy() {
  { //Red Layout
    if (keyIsDown('87')) {
      fplgoaly = fplgoaly - fpgmove;
      fpldty = fpldty - fpdmove;
      fpldby = fpldby - fpdmove;
      fplmty = fplmty - fpmmove;
      fplmuy = fplmuy - fpmmove;
      fplmly = fplmly - fpmmove;
      fplmby = fplmby - fpmmove;
      fploty = fploty - fpomove;
      fplomy = fplomy - fpomove;
      fploby = fploby - fpomove;
    } //Move Up

    if (keyIsDown('83')) {
      fplgoaly = fplgoaly + fpgmove;
      fpldty = fpldty + fpdmove;
      fpldby = fpldby + fpdmove;
      fplmty = fplmty + fpmmove;
      fplmuy = fplmuy + fpmmove;
      fplmly = fplmly + fpmmove;
      fplmby = fplmby + fpmmove;
      fploty = fploty + fpomove;
      fplomy = fplomy + fpomove;
      fploby = fploby + fpomove;
    } //Move Down

  } //Red Layout

  { //Blue Layout
    if (keyIsDown('75')) {
      fprgoaly = fprgoaly - fpgmove;
      fprdty = fprdty - fpdmove;
      fprdby = fprdby - fpdmove;
      fprmty = fprmty - fpmmove;
      fprmuy = fprmuy - fpmmove;
      fprmly = fprmly - fpmmove;
      fprmby = fprmby - fpmmove;
      fproty = fproty - fpomove;
      fpromy = fpromy - fpomove;
      fproby = fproby - fpomove;
    } //Move Up

    if (keyIsDown('77')) {
      fprgoaly = fprgoaly + fpgmove;
      fprdty = fprdty + fpdmove;
      fprdby = fprdby + fpdmove;
      fprmty = fprmty + fpmmove;
      fprmuy = fprmuy + fpmmove;
      fprmly = fprmly + fpmmove;
      fprmby = fprmby + fpmmove;
      fproty = fproty + fpomove;
      fpromy = fpromy + fpomove;
      fproby = fproby + fpomove;
    } //Move Down

  } //Blue Layout

}

function fullFoosPongHard() {
  { //Red Control
    if (keyIsDown('81')) {
      fplgoaly = fplgoaly - fpgmove;
    } //Goalie Up
    if (keyIsDown('87')) {
      fpldty = fpldty - fpdmove;
      fpldby = fpldby - fpdmove;
    } //Defense Up
    if (keyIsDown('69')) {
      fplmty = fplmty - fpmmove;
      fplmuy = fplmuy - fpmmove;
      fplmly = fplmly - fpmmove;
      fplmby = fplmby - fpmmove;
    } //Mid Up
    if (keyIsDown('82')) {
      fploty = fploty - fpomove;
      fplomy = fplomy - fpomove;
      fploby = fploby - fpomove;
    } //Offense Up

    if (keyIsDown('65')) {
      fplgoaly = fplgoaly + fpgmove;
    } //Goalie Down
    if (keyIsDown('83')) {
      fpldty = fpldty + fpdmove;
      fpldby = fpldby + fpdmove;
    } //Defense Down
    if (keyIsDown('68')) {
      fplmty = fplmty + fpmmove;
      fplmuy = fplmuy + fpmmove;
      fplmly = fplmly + fpmmove;
      fplmby = fplmby + fpmmove;
    } //Mid Down
    if (keyIsDown('70')) {
      fploty = fploty + fpomove;
      fplomy = fplomy + fpomove;
      fploby = fploby + fpomove;
    } //Offense Down

  } //Red Control

  { //Blue Control
    if (keyIsDown('222')) {
      fprgoaly = fprgoaly - fpgmove;
    } //Goalie Up
    if (keyIsDown('186')) {
      fprdty = fprdty - fpdmove;
      fprdby = fprdby - fpdmove;
    } //Defense Up
    if (keyIsDown('76')) {
      fprmty = fprmty - fpmmove;
      fprmuy = fprmuy - fpmmove;
      fprmly = fprmly - fpmmove;
      fprmby = fprmby - fpmmove;
    } //Mid Up
    if (keyIsDown('75')) {
      fproty = fproty - fpomove;
      fpromy = fpromy - fpomove;
      fproby = fproby - fpomove;
    } //Offense Up

    if (keyIsDown('191')) {
      fprgoaly = fprgoaly + fpgmove;
    } //Goalie Down
    if (keyIsDown('190')) {
      fprdty = fprdty + fpdmove;
      fprdby = fprdby + fpdmove;
    } //Defense Down
    if (keyIsDown('188')) {
      fprmty = fprmty + fpmmove;
      fprmuy = fprmuy + fpmmove;
      fprmly = fprmly + fpmmove;
      fprmby = fprmby + fpmmove;
    } //Mid Down
    if (keyIsDown('77')) {
      fproty = fproty + fpomove;
      fpromy = fpromy + fpomove;
      fproby = fproby + fpomove;
    } //Offense Down

  } //Blue Control
}

function foosPongScore() {

  fill(255);
  textSize(40);
  textAlign(CENTER);

  if (fpbx >= 635) {
    lscore = lscore + 1;
  }
  if (fpbx <= -35) {
    rscore = rscore + 1;
  }
  text(lscore, (width / 2) - 40, 53);
  text(rscore, (width / 2) + 40, 53);

  if (lscore == 10) {
    textSize(60);
    text('Red Wins!', width / 2, height / 2);
    fpbx = 300;
    fpby = 100;
    fpbxmove = 0;
    fpbymove = 0;
  }

  if (rscore == 10) {
    textSize(60);
    text('Blue Wins!', width / 2, height / 2);
    fpbx = 300;
    fpby = 100;
    fpbxmove = 0;
    fpbymove = 0;
  }

}

function originalBounceCode() {

  { //Red Bounces
    if (fpbx < fplgoalx + 13 && fpbx > fplgoalx - 13 && fpby > fplgoaly - 30 && fpby < fplgoaly + 30) {
      fpbxmove = -fpbxmove;
    } //Goalie Bounce

    if (fpbx < fpldtx + 13 && fpbx > fpldtx - 13 && fpby > fpldty - 30 && fpby < fpldty + 30) {
      fpbxmove = -fpbxmove;
    } //Defense Top Bounce
    if (fpbx < fpldbx + 13 && fpbx > fpldbx - 13 && fpby > fpldby - 30 && fpby < fpldby + 30) {
      fpbxmove = -fpbxmove;
    } //Defense Bottom Bounce

    if (fpbx < fplmtx + 13 && fpbx > fplmtx - 13 && fpby > fplmty - 30 && fpby < fplmty + 30) {
      fpbxmove = -fpbxmove;
    } //Mid Top Bounce
    if (fpbx < fplmux + 13 && fpbx > fplmux - 13 && fpby > fplmuy - 30 && fpby < fplmuy + 30) {
      fpbxmove = -fpbxmove;
    } //Mid Upper Bounce
    if (fpbx < fplmlx + 13 && fpbx > fplmlx - 13 && fpby > fplmly - 30 && fpby < fplmly + 30) {
      fpbxmove = -fpbxmove;
    } //Mid Lower Bounce
    if (fpbx < fplmbx + 13 && fpbx > fplmbx - 13 && fpby > fplmby - 30 && fpby < fplmby + 30) {
      fpbxmove = -fpbxmove;
    } //Mid Bottom Bounce

    if (fpbx < fplotx + 13 && fpbx > fplotx - 13 && fpby > fploty - 30 && fpby < fploty + 30) {
      fpbxmove = -fpbxmove;
    } //Offense Top Bounce
    if (fpbx < fplomx + 13 && fpbx > fplomx - 13 && fpby > fplomy - 30 && fpby < fplomy + 30) {
      fpbxmove = -fpbxmove;
    } //Offense Mid Bounce
    if (fpbx < fplobx + 13 && fpbx > fplobx - 13 && fpby > fploby - 30 && fpby < fploby + 30) {
      fpbxmove = -fpbxmove;
    } //Offense Bottom Bounce

  } //Red Bounces

  { //Blue Bounces
    if (fpbx < fprgoalx + 13 && fpbx > fprgoalx - 13 && fpby > fprgoaly - 30 && fpby < fprgoaly + 30) {
      fpbxmove = -fpbxmove;
    } //Goalie Bounce

    if (fpbx < fprdtx + 13 && fpbx > fprdtx - 13 && fpby > fprdty - 30 && fpby < fprdty + 30) {
      fpbxmove = -fpbxmove;
    } //Defense Top Bounce
    if (fpbx < fprdbx + 13 && fpbx > fprdbx - 13 && fpby > fprdby - 30 && fpby < fprdby + 30) {
      fpbxmove = -fpbxmove;
    } //Defense Bottom Bounce

    if (fpbx < fprmtx + 13 && fpbx > fprmtx - 13 && fpby > fprmty - 30 && fpby < fprmty + 30) {
      fpbxmove = -fpbxmove;
    } //Mid Top Bounce
    if (fpbx < fprmux + 13 && fpbx > fprmux - 13 && fpby > fprmuy - 30 && fpby < fprmuy + 30) {
      fpbxmove = -fpbxmove;
    } //Mid Upper Bounce
    if (fpbx < fprmlx + 13 && fpbx > fprmlx - 13 && fpby > fprmly - 30 && fpby < fprmly + 30) {
      fpbxmove = -fpbxmove;
    } //Mid Lower Bounce
    if (fpbx < fprmbx + 13 && fpbx > fprmbx - 13 && fpby > fprmby - 30 && fpby < fprmby + 30) {
      fpbxmove = -fpbxmove;
    } //Mid Bottom Bounce

    if (fpbx < fprotx + 13 && fpbx > fprotx - 13 && fpby > fproty - 30 && fpby < fproty + 30) {
      fpbxmove = -fpbxmove;
    } //Offense Top Bounce
    if (fpbx < fpromx + 13 && fpbx > fpromx - 13 && fpby > fpromy - 30 && fpby < fpromy + 30) {
      fpbxmove = -fpbxmove;
    } //Offense Mid Bounce
    if (fpbx < fprobx + 13 && fpbx > fprobx - 13 && fpby > fproby - 30 && fpby < fproby + 30) {
      fpbxmove = -fpbxmove;
    } //Offense Bottom Bounce

  } //Blue Bounces
}

function foosPaddleTest() {

  { //Red Bounces
    if (fpbx <= fplgoalx + 10 && fpbx >= fplgoalx - 10 && fpby >= fplgoaly - 35 && fpby <= fplgoaly + 35) {
      fpbxmove = -fpbxmove;
    } //Goalie Bounce
    if (fpby >= fplgoaly - 35 && fpbx <= fplgoalx + 10 && fpbx >= fplgoalx - 10) {
      fpbymove = -fpbymove;
    } //Goalie Corner Bounce 1
    if (fpby <= fplgoaly - 35 && fpbx <= fplgoalx + 10 && fpbx >= fplgoalx - 10) {
      fpbymove = -fpbymove;
    } //Goalie Corner Bounce 2

    if (fpbx <= fpldtx + 10 && fpbx >= fpldtx - 10 && fpby >= fpldty - 35 && fpby < fpldty + 35) {
      fpbxmove = -fpbxmove;
    } //Defense Top Bounce
    if (fpby >= fpldty - 35 && fpby >= fpldby && fpbx <= fpldtx + 10 && fpbx >= fpldtx - 10) {
      fpbymove = -fpbymove;
    } //DT Corner Bounce 1
    if (fpby <= fpldty - 35 && fpby <= fpldby && fpbx <= fpldtx + 10 && fpbx >= fpldtx - 10) {
      fpbymove = -fpbymove;
    } //DT Corner Bounce 2
    
    if (fpbx < fpldbx + 10 && fpbx > fpldbx - 10 && fpby > fpldby - 35 && fpby < fpldby + 30) {
      fpbxmove = -fpbxmove;
    } //Defense Bottom Bounce
    if (fpby >= fpldby - 35 && fpby <= fpldty && fpbx <= fpldbx + 10 && fpbx >= fpldbx - 10) {
      fpbymove = -fpbymove;
    } //DB Corner Bounce 1
    if (fpby <= fpldby - 35 && fpby >= fpldty && fpbx <= fpldbx + 10 && fpbx >= fpldbx - 10) {
      fpbymove = -fpbymove;
    } //DB Corner Bounce 2

    if (fpbx < fplmtx + 10 && fpbx > fplmtx - 10 && fpby > fplmty - 35 && fpby < fplmty + 30) {
      fpbxmove = -fpbxmove;
    } //Mid Top Bounce
    if (fpby >= fplmty - 35 && fpby <= fplmuy && fpbx <= fplmtx + 10 && fpbx >= fplmtx - 10) {
      fpbymove = -fpbymove;
    } //MT Corner Bounce 1
    if (fpby <= fplmty - 35 && fpby >= fplmuy && fpbx <= fplmtx + 10 && fpbx >= fplmux - 10) {
      fpbymove = -fpbymove;
    } //MT Corner Bounce 2
    
    if (fpbx < fplmux + 10 && fpbx > fplmux - 10 && fpby > fplmuy - 35 && fpby < fplmuy + 30) {
      fpbxmove = -fpbxmove;
    } //Mid Upper Bounce
    if (fpbx < fplmlx + 10 && fpbx > fplmlx - 10 && fpby > fplmly - 35 && fpby < fplmly + 30) {
      fpbxmove = -fpbxmove;
    } //Mid Lower Bounce
    if (fpbx < fplmbx + 10 && fpbx > fplmbx - 10 && fpby > fplmby - 35 && fpby < fplmby + 30) {
      fpbxmove = -fpbxmove;
    } //Mid Bottom Bounce

    if (fpbx < fplotx + 10 && fpbx > fplotx - 10 && fpby > fploty - 35 && fpby < fploty + 30) {
      fpbxmove = -fpbxmove;
    } //Offense Top Bounce
    if (fpbx < fplomx + 10 && fpbx > fplomx - 10 && fpby > fplomy - 35 && fpby < fplomy + 30) {
      fpbxmove = -fpbxmove;
    } //Offense Mid Bounce
    if (fpbx < fplobx + 10 && fpbx > fplobx - 10 && fpby > fploby - 35 && fpby < fploby + 30) {
      fpbxmove = -fpbxmove;
    } //Offense Bottom Bounce

  } //Red Bounces


} //Meant To Fix The Problem Where The Ball Fazes Through The Paddles Weirdly

function halfFoosPongPaddles() {
  fill(240, 44, 56);
  noStroke();
  rect(fplgoalx, fplgoaly, 15, 60);
  
  rect(fphlmtx, fphlmty, 15, 60);
  rect(fphlmmx, fphlmmy, 15, 60);
  rect(fphlmbx, fphlmby, 15, 60);

  rect(fphlotx, fphloty, 15, 60);
  rect(fphlobx, fphloby, 15, 60);

  fill(40, 105, 230);
   rect(fprgoalx, fprgoaly, 15, 60);
  
  rect(fphrmtx, fphrmty, 15, 60);
  rect(fphrmmx, fphrmmy, 15, 60);
  rect(fphrmbx, fphrmby, 15, 60);

  rect(fphrotx, fphroty, 15, 60);
  rect(fphrobx, fphroby, 15, 60);


  { //Red Boundaries
    { //Goalie Boundaries
      if (fplgoaly <= 190) {
        fplgoaly = fplgoaly + fpgmove;
      }
      if (fplgoaly >= 310) {
        fplgoaly = fplgoaly - fpgmove;
      }
    } //Goalie Boundaries

    { //Mid Boundaries
      if (fphlmty <= 30) {
        fphlmty = fphlmty + fpmmove;
        fphlmmy = fphlmmy + fpmmove;
        fphlmby = fphlmby + fpmmove;
      }
      if (fphlmby >= 470) {
        fphlmty = fphlmty - fpmmove;
        fphlmmy = fphlmmy - fpmmove;
        fphlmby = fphlmby - fpmmove;
      }
    } //Mid Boundaries

    { //Offense Boundaries
      if (fphloty <= 30) {
        fphloty = fphloty + fpdmove;
        fphloby = fphloby + fpdmove;
      }
      if (fphloby >= 470) {
        fphloty = fphloty - fpdmove;
        fphloby = fphloby - fpdmove;
      }
    } //Offense Boundaries
  } //Red Boundaries

  { //Blue Boundaries
    { //Goalie Boundaries
      if (fprgoaly <= 190) {
        fprgoaly = fprgoaly + fpgmove;
      }
      if (fprgoaly >= 310) {
        fprgoaly = fprgoaly - fpgmove;
      }
    } //Goalie Boundaries

    { //Mid Boundaries
      if (fphrmty <= 30) {
        fphrmty = fphrmty + fpmmove;
        fphrmmy = fphrmmy + fpmmove;
        fphrmby = fphrmby + fpmmove;
      }
      if (fphrmby >= 470) {
        fphrmty = fphrmty - fpmmove;
        fphrmmy = fphrmmy - fpmmove;
        fphrmby = fphrmby - fpmmove;
      }
    } //Mid Boundaries

    { //Offense Boundaries
      if (fphroty <= 30) {
        fphroty = fphroty + fpdmove;
        fphroby = fphroby + fpdmove;
      }
      if (fphroby >= 470) {
        fphroty = fphroty - fpdmove;
        fphroby = fphroby - fpdmove;
      }
    } //Offense Boundaries
  } //Red Boundaries

  ellipse(fplgoalx + 15, fplgoaly - 40,5)
}

function halfFoosPongHard() {
  { //Red Control
    if (keyIsDown('81')) {
      fplgoaly = fplgoaly - fpgmove;
    } //Goalie Up
    if (keyIsDown('87')) {
      fphlmty = fphlmty - fpmmove;
      fphlmmy = fphlmmy - fpmmove;
      fphlmby = fphlmby - fpmmove;
    } //Mid Up
    if (keyIsDown('69')) {
      fphloty = fphloty - fpdmove;
      fphloby = fphloby - fpdmove;
    } //Offense Up

    if (keyIsDown('65')) {
      fplgoaly = fplgoaly + fpgmove;
    } //Goalie Down
    if (keyIsDown('83')) {
      fphlmty = fphlmty + fpmmove;
      fphlmmy = fphlmmy + fpmmove;
      fphlmby = fphlmby + fpmmove;
    } //Mid Down
    if (keyIsDown('68')) {
      fphloty = fphloty + fpdmove;
      fphloby = fphloby + fpdmove;
    } //Offense Down

  } //Red Control
  
  { //Blue Control
    if (keyIsDown('222')) {
      fprgoaly = fprgoaly - fpgmove;
    } //Goalie Up
    if (keyIsDown('186')) {
      fphrmty = fphrmty - fpmmove;
      fphrmmy = fphrmmy - fpmmove;
      fphrmby = fphrmby - fpmmove;
    } //Mid Up
    if (keyIsDown('76')) {
      fphroty = fphroty - fpdmove;
      fphroby = fphroby - fpdmove;
    } //Offense Up

    if (keyIsDown('191')) {
      fprgoaly = fprgoaly + fpgmove;
    } //Goalie Down
    if (keyIsDown('190')) {
      fphrmty = fphrmty + fpmmove;
      fphrmmy = fphrmmy + fpmmove;
      fphrmby = fphrmby + fpmmove;
    } //Mid Down
    if (keyIsDown('188')) {
      fphroty = fphroty + fpdmove;
      fphroby = fphroby + fpdmove;
    } //Offense Down

  } //Blue Control
}

function halfFoosPongBounce() {
  { //Red V Bounces
    if (fpbx < fplgoalx + 15 && fpbx > fplgoalx - 15 && fpby > fplgoaly - 40 && fpby < fplgoaly + 40) {
      fpbxmove = -fpbxmove;
    } //Goalie Bounce

    if (fpbx < fphlmtx + 15 && fpbx > fphlmtx - 15 && fpby > fphlmty - 40 && fpby < fphlmty + 40) {
      fpbxmove = -fpbxmove;
    } //Mid Top Bounce
    if (fpbx < fphlmmx + 15 && fpbx > fphlmmx - 15 && fpby > fphlmmy - 40 && fpby < fphlmmy + 40) {
      fpbxmove = -fpbxmove;
    } //Mid Mid Bounce
    if (fpbx < fphlmbx + 15 && fpbx > fphlmbx - 15 && fpby > fphlmby - 40 && fpby < fphlmby + 40) {
      fpbxmove = -fpbxmove;
    } //Mid Bottom Bounce

    if (fpbx < fphlotx + 15 && fpbx > fphlotx - 15 && fpby > fphloty - 40 && fpby < fphloty + 40) {
      fpbxmove = -fpbxmove;
    } //Offense Top Bounce
    if (fpbx < fphlobx + 15 && fpbx > fphlobx - 15 && fpby > fphloby - 40 && fpby < fphloby + 40) {
      fpbxmove = -fpbxmove;
    } //Offense Bottom Bounce

  } //Red V Bounces

  { //Blue V Bounces
    if (fpbx < fprgoalx + 15 && fpbx > fprgoalx - 15 && fpby > fprgoaly - 40 && fpby < fprgoaly + 40) {
      fpbxmove = -fpbxmove;
    } //Goalie Bounce

    if (fpbx < fphrmtx + 15 && fpbx > fphrmtx - 15 && fpby > fphrmty - 40 && fpby < fphrmty + 40) {
      fpbxmove = -fpbxmove;
    } //Mid Top Bounce
    if (fpbx < fphrmbx + 15 && fpbx > fphrmbx - 15 && fpby > fphrmby - 40 && fpby < fphrmby - 45) {
      fpbxmove = -fpbxmove;
      fpbymove = -fpbymove;
    } //Offense Top Bounce2 
    
    if (fpbx < fphrmmx + 15 && fpbx > fphrmmx - 15 && fpby > fphrmmy - 40 && fpby < fphrmmy + 40) {
      fpbxmove = -fpbxmove;
    } //Mid Mid Bounce
    if (fpbx < fphrmbx + 15 && fpbx > fphrmbx - 15 && fpby > fphrmby - 40 && fpby < fphrmby + 40) {
      fpbxmove = -fpbxmove;
    } //Mid Bottom Bounce
    if (fpbx< fphrmbx + 15 && fpbx > fphrmbx - 15 && fpby > fphrmby - 40) {
      fpbymove = -fpbymove;
    } //Mid Bottom Bounce
     
    if (fpbx < fphrotx + 15 && fpbx > fphrotx - 15 && fpby > fphroty - 40 && fpby < fphroty + 40) {
      fpbxmove = -fpbxmove;
    } //Offense Top Bounce
    if (fpbx < fphrobx + 15 && fpbx > fphrobx - 15 && fpby > fphroby - 40 && fpby < fphroby + 40) {
      fpbxmove = -fpbxmove;
    } //Offense Bottom Bounce

  } //Blue V Bounces

}
}//Foospong

function keyPressed() {
  if (key == 'S') {
    stage = 1;
  } else if (key == 'C') {
  	stage = 2;
  }
  
}