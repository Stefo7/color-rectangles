var canvas = document.getElementById('myCanvas');

var rectangle = canvas.getContext('2d');
//rectangle position and size
var x = 0;
var y = 0;
var z = 300;
var w = 150;

//rectangle color
var h = 360;
var s = 50;
var l = 40;
 
var rectangleColor = 'hsla(360,50%,40%,1)'; 

function draw() {
rectangle.fillStyle= rectangleColor;
rectangle.fillRect(x,y,z,w);
}

for (var i =0; i<17; i++){
  draw();
  x += 7;
  y += 4.5;
  z -= 14;
  w -= 8.5;
  h -= 21;
  var rectangleColor = 'hsla('+ h +',' + s +'%,' + l+ '%, 1)';
}