function setup() {
  createCanvas(600, 400);  //Tamany de l'àrea de dibuix
  //El primer número es l'amplada en pixels i el segon número es l'alçada en pixels.
}

function draw() {
  let r=random(0,255);
  let g=random(0,127);
  let b=random(128,255);
  let x=random(0,50);
  let y=50* noise(0.005*frameCount);
  frameRate(5);
  background(r,g,b);
  //El primer número es el nivell de vermell "r", el segon número es el nivell de verd "g" i el tercer número es l'intensitat de blau "b" per tant RGB en html. Dintre de background o fons.
  fill(255,246,229);  //En  el cas fill serà el mateix pero el que fa es omplir de color la figura seguent que son dos ellipses.
  ellipse(300,200,200,250);//cara exterior  //El primer número es la posicióx desde la cantunada superior esquerra que es al "0,0",el segon número de la posició esquerra o alçada i el tercer número l'amplada del ellipse. El quart número es l'alçada del ellipse.
  fill(255,255,255);//color blanc dels ulls
  ellipse(250,150,35+y,25+y);   //Forma ull dret perquè x=250
  ellipse(350,150,35+x,25+x);   //Forma ull esquerra prquè x=350
  fill(255-y,110+g,100-b);   //Color de la boca
 
  arc(300,250,70,50+x,0,PI);  //Forma de la boca
}
