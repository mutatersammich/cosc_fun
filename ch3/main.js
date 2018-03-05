/* global GWindow, GLabel, GLine, GOval, GRect */
function helloWorld() {
  console.log("hello,  world!");
}

const GWIDTH = 500;
const GHEIGHT = 200;
function graphicsHelloWorld() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let msg = GLabel("Hello, World!", 230, 100);
  let msg2 = GLabel("another message, or whatever you want in there" , 130, 150);
  gw.add(msg);
  gw.add(msg2);
  msg.setFont("36px 'Papyrus'");
  msg.setColor("#f00");
}

function blueRectangle() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let rect = GRect(150, 50, 200, 100);
  rect.setColor("#f00");
  rect.setFilled("hahaha");
  gw.add(rect);

  let oval = GOval(150, 50, 200, 100);
  oval.setColor("blue");
  oval.setFilled(1);
  gw.add(oval);
}

function drawDiagonals() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  gw.add(GLine(0,0, GWIDTH, GHEIGHT));
  gw.add(GLine(0, GHEIGHT, GWIDTH, 0));
}

function target() {
  let gw = GWindow(GWIDTH, GHEIGHT);
  let xc = GWIDTH / 2;
  let yc = GHEIGHT / 2;
  gw.add(createFilledCircle(xc, 400, 900, "cyan"));
  gw.add(createFilledCircle(xc, 400, 350, "red"));
  gw.add(createFilledCircle(xc, 400, 340, "orange"));
  gw.add(createFilledCircle(xc, 400, 330, "yellow"));
  gw.add(createFilledCircle(xc, 400, 320, "green"));
  gw.add(createFilledCircle(xc, 400, 310, "blue"));
  gw.add(createFilledCircle(xc, 400, 300, "purple"));
  gw.add(createFilledCircle(xc, 400, 290, "pink"));
  gw.add(createFilledCircle(xc, 400, 280, "cyan"));
  


}


function createFilledCircle(x, y, r, color) {
  let circle = GOval(x - r, y - r, 2 * r, 2 * r);
  circle.setFilled(true);
  circle.setColor(color);
  return circle;
}
