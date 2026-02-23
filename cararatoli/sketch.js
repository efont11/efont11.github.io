function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let mic;//Crea una variable pel micròfon
function setup() {
  createCanvas(600, 400);  //Tamany de l'àrea de dibuix
  //El primer número es l'amplada en pixels i el segon número es l'alçada en pixels.
mic=new p5.AudioIn();//El micrófon es una entrada de audio amb p5
mic.start();//Activa el micròfon
}
function draw()
  {
  background(209,59,144);
  let vol=mic.getLevel();
  let h=map(vol,0,1,0,400);
  //El primer número es el nivell de vermell "r", el segon número es el nivell de verd "g" i el tercer número es l'intensitat de blau "b" per tant RGB en html. Dintre de background o fons.
  fill(127+mouseX/4,246-mouseY/2,229-mouseX/2);  //En  el cas fill serà el mateix pero el que fa es omplir de color la figura seguent que son dos ellipses.
  ellipse(mouseX,mouseY,200,250);//cara exterior  //El primer número es la posicióx desde la cantunada superior esquerra que es al "0,0",el segon número de la posició esquerra o alçada i el tercer número l'amplada del ellipse. El quart número es l'alçada del ellipse.
  //mouseX=300 mouseY=200
    fill(255-mouseX/2,mouseY/2,mouseX/3);//color blanc dels ulls
  ellipse(mouseX+50,mouseY-50,35+mouseX/20,25+mouseY/20);   //Forma ull dret perquè x=250
  ellipse(mouseX-50,mouseY-50,35+mouseX/20,25+mouseY/20);   //Forma ull esquerra perquè x=350
    line(mouseX+28,mouseY-80,mouseX+70,mouseY-100);
    line(mouseX-80,mouseY-60,mouseX-30,mouseY-70)
  fill(245,110,100);   //Color de la boca
 
  arc(mouseX,mouseY+50,70,50+h,0,PI);  //Forma de la boca 
//line(328,120,370,100);//ceja derecha
//line(220, 140, 270, 130);//ceja izquierda
  }
