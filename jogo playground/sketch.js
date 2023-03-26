
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var girl1img;
var girl2img;
var girl3img;
var boy1img;
var boy2img;
var parkimg;
var obj1img;
var obj2img;
var obj3img;
var obj4img;
var obj5img;
var euimg;


var girl1;
var girl2;
var girl3;
var boy1;
var boy2;
var park;
var obj1;
var obj2;
var obj3;
var obj4;
var obj5;
var eu;

var x;
var score;

function preload() {
  boy1img = loadImage("boy1.png");
  boy2img = loadImage("boy2.png");
  girl1img = loadImage("girl1.png");
  girl2img = loadImage("girl2.png");
  girl3img = loadImage("girl3.png");
  parkimg = loadImage("park.png");
  euimg = loadAnimation("eu1.png", "eu2.png");
  obj1img = loadImage("maca.png");
  obj2img = loadImage("giz.png");
  obj3img = loadImage("peca.png");
  obj4img = loadImage("bola.png");
  obj5img = loadImage("livro.png");
}

function setup() {
	createCanvas(1000, 900);
    

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
  //park = createSprite(400, 350);
  boy1 = createSprite(340, 180);
  boy1.addImage(boy1img);
  boy1.scale = 0.05;

  boy2 = createSprite(750, 680);
  boy2.addImage(boy2img);
  boy2.scale = 0.05;

  girl1 = createSprite(420, 400);
  girl1.addImage(girl1img);
  girl1.scale = 0.05;

  girl2 = createSprite(150, 750);
  girl2.addImage(girl2img);
  girl2.scale = 0.05;

  girl3 = createSprite(750, 55);
  girl3.addImage(girl3img);
  girl3.scale = 0.05;

  eu = createSprite(500, 450);
  eu.addAnimation("andar", euimg);
  eu.scale = 0.05;

  obj1 = createSprite(900, 800);
  obj1.addImage(obj1img);
  obj1.scale = 0.07;
  obj1.visible = false;

  obj2 = createSprite(265, 200);
  obj2.addImage(obj2img);
  obj2.scale = 0.07;
  obj2.visible = false;
  
  obj3 = createSprite(650, 300);
  obj3.addImage(obj3img);
  obj3.scale = 0.07;
  obj3.visible = false;

  obj4 = createSprite(800, 380);
  obj4.addImage(obj4img);
  obj4.scale = 0.07;
  obj4.visible = false;

  obj5 = createSprite(525, 830);
  obj5.addImage(obj5img);
  obj5.scale = 0.07;
  obj5.visible = false;

  score = 0;

  x = false; //marcadores para se já pegou o objeto em questão
  y = false;  
  w = false;
  z = false;
  a = false;

  b = false; //marcadores para evitar que ganhe mais que 1 ponto
  c = false; 
  d = false;
  e = false;
  f = false;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(parkimg, 0, 0, 1000, 900);

  fill("black");
  strokeWeight(400);
  textSize(50);
  text("Score:" + score, 90, 80);

  

  if(keyDown("W") && eu.y>25) {
    eu.y -= 2;
  }

  if(keyDown("A") && eu.x>25) {
    eu.x -= 2;
  }

  if(keyDown("S") && eu.y<875) {
    eu.y += 2;
  }

  if(keyDown("D") && eu.x<975) {
    eu.x += 2;
  }
  
  if(eu.isTouching(boy1)&& x == false) {
    textSize(15);
    fill("black");
    strokeWeight(400);
    text("Você pode achar uma maçã da árvore para o piquenique?", 320, 220);
    
  }

  if(eu.isTouching(boy2)&& y == false) {
    textSize(15);
    fill("black");
    strokeWeight(4);
    text("Perdi meu giz de cera em algum dos brinquedos, você pode pegá-lo?", 550, 720);

  }

  if(eu.isTouching(girl1)&& w == false) {
    textSize(15);
    fill("black");
    strokeWeight(4);
    text("Está faltando uma peça do quebra-cabeça, acho que alguém a escondeu, você pode pegá-la?", 200, 440);
  }

  if(eu.isTouching(girl2)&& z == false) {
    textSize(15);
    fill("black");
    strokeWeight(4);
    text("Alguém jogou minha bola no canto do parque, você pode me ajudar?", 150, 790);

  }

  if(eu.isTouching(girl3) && a == false) {
    textSize(15);
    fill("black");
    strokeWeight(4);
    text("Meu livro está em algum lugar desse parque, você pode trazê-lo?", 550, 95);
  }
  
  if(eu.collide(obj1)){
    x = true;
    obj1.visible = true;
  }

  if(eu.collide(obj2)){
    y = true;
    obj2.visible = true;
  }

  if(eu.collide(obj3)){
    w = true;
    obj3.visible = true;
  }

  if(eu.collide(obj4)){
    z = true;
    obj4.visible = true;
  }

  if(eu.collide(obj5)){
    a = true;
    obj5.visible = true;
  }

  if(eu.collide(boy1)&& x == true) {
    if(c == false) {
      c = true;
      score += 1;
    }
    textSize(15);
    fill("black");
    strokeWeight(400);
    text("Você achou! Obrigada.", 320, 220);
    
  }

  if(eu.collide(boy2)&& y == true) {
     if(d == false) {
      d = true;
      score += 1;
    }

    textSize(15);
    fill("black");
    strokeWeight(4);
    text("Meu giz, obrigada por achá-lo.", 550, 720);

  }

  if(eu.collide(girl1)&& w == true) {
    if(b == false) {
      b = true;
      score += 1;
    }
    textSize(15);
    fill("black");
    strokeWeight(4);
    text("Finalmente posso terminar isso, obrigada.", 200, 440);
    
    
  }

  if(eu.collide(girl2)&& z == true) {
     if(e == false) {
      e = true;
      score += 1;
    }
    textSize(15);
    fill("black");
    strokeWeight(4);
    text("Obrigada, venha jogar comigo depois!", 150, 790);


  }

  if(eu.collide(girl3) && a == true) {
     if(f == false) {
      f = true;
      score += 1;
    }
    textSize(15);
    fill("black");
    strokeWeight(4);
    text("Muito obrigada.", 550, 95);
  }

  
  if(score == 5){
    textSize(50);
    fill("black");
    strokeWeight(4);
    text("Parabéns!", 400, 500);
  }

  drawSprites();
 
}



