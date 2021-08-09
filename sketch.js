const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var computerArcher, playerArcher;
var computerArrow,playerArrow


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  computerBase = new ComputerBase(width - 300, random(450, height - 300),180,150);
  computer = new Computer(width - 280,computerBase.body.position.y - 153,50,180);
  computerArcher = new ComputerArcher(computer.body.position.x-50,computerBase.body.position.y - 180,120,120,60);
  playerArcher = new PlayerArcher(player.body.position.x+50,playerBase.body.position.y - 180,120,120)
  //Create an arrow Object
  playerArrow = new PlayerArrow(player.body.position.x,player.body.position.y,10,5)
  computerArrow = new ComputerArrow(computer.body.position.x,computerBase.body.position.y,10,5)
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


  playerBase.display();
  player.display();


  computerBase.display();
  computer.display();

  playerArcher.display();
  computerArcher.display()


  //Display arrow();
   playerArrow.display();
   computerArrow.display();
  //if Space (32) key is pressed call shoot function of playerArrow
}
  function keyPressed(){
  if (keyCode === 32) {
    PlayerArrow.shoot(playerArcher.body.angle)}
    //Call shoot() function and pass angle of playerArcher


  }
  



