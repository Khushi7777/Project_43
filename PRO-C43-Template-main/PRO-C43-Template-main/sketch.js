var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 bg2 = loadImage("treasure.jpg");
  treasure = loadImage("aladdin_cave.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
}

function draw() {
  background(treasure);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("white")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
}
  drawSprites()
}