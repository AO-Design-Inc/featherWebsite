// images
var image = new Image();
image.src = 'icons/feather-blurred-harder.webp';
image.onload = drawFeather;

var fullImage = new Image();
fullImage.src = 'icons/feather.webp';
fullImage.onload = () => {
  drawCircles();
  image.src = "icons/feather.webp";
}

// canvases
const particlesCanvas = document.getElementById("particles");
var particlesCtx = particlesCanvas.getContext("2d");
particlesCanvas.width = window.innerWidth;
particlesCanvas.height = window.innerHeight;
particlesCanvas.style.transition = '0.6s cubic-bezier(0.65, 0, 0.35, 1)';

const featherCanvas = document.getElementById("feather-canvas");
var featherCtx = featherCanvas.getContext("2d");
featherCanvas.style.transition = '0.2s cubic-bezier(0.65, 0, 0.35, 1)'

// particles array
particles = [];
amount = 10; // number of particles

// various breakpoints
var firstScreencell = document.querySelector(".title");
var duoContainer = document.getElementById("whatwedo");
var secondScreencell = document.querySelector(".intro");

var particlesBreakpoint = firstScreencell.offsetTop + firstScreencell.offsetHeight;
var featherBreakpoint = secondScreencell.offsetTop + secondScreencell.offsetHeight;
var duoBottom = duoContainer.offsetTop + duoContainer.offsetHeight;

// linear gradient for circles
var canvasGradient = featherCtx.createLinearGradient(0,500,0, 0);
canvasGradient.addColorStop(1, '#fffafb');
canvasGradient.addColorStop(0, 'rgba(251, 118, 128, 0.35)');

// Particle class
class Particle {
  constructor() {
    this.x = getRandomInt(0, window.innerWidth / 2);
    this.y = getRandomInt(0, window.innerHeight);
    this.vx = Math.random() / 2;
    this.vy = Math.random() / 3;
    this.rad = getRandomInt(2, 15);
    this.gradSize = getRandomInt(2, this.rad / 1.5);
  }

  relocate() {
    this.x = 0;
    this.y = getRandomInt(0, window.innerHeight / 1.5);
    this.vx = Math.random() / 2;
    this.vy = Math.random() / 3;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    // switches direction midway
    if (this.x > window.innerWidth / 2 && this.vy > 0) {
      this.vy = this.vy * -1;
    }

    if (this.x > window.innerWidth || this.y > window.innerHeight || this.y < 0) {
      this.relocate();
    }
  }
}

// set canvas dimensions 
const resizeCanvases = () => {

  particlesCanvas.width = window.innerWidth;
  particlesCanvas.height = window.innerHeight;

  // bound max-width to 2500
  featherCanvas.width = Math.min(window.innerWidth, 2500);

  // bound height between 800 and 1440
  var currHeight = featherCanvas.height;
  var tempHeight = Math.max(800, Math.min(window.innerHeight, 1440));

  if (Math.abs(currHeight - tempHeight) > 100)
      featherCanvas.height = tempHeight;
}

var circlePosition;

// draws the circles 
function drawCircles(){
    // clears screen and refills with background color
    featherCtx.clearRect(0, 0, featherCanvas.width, featherCanvas.height);

    featherCtx.fillStyle = "#fffafb";
    featherCtx.fillRect(0, 0, featherCanvas.width, featherCanvas.height);

    featherCtx.globalCompositeOperation = "multiply";
    featherCtx.strokeStyle = canvasGradient;

    if (window.scrollY + window.innerHeight < featherBreakpoint) {
        circlePosition = [featherCanvas.width * .75, featherCanvas.height * .40];
    } else {
        circlePosition = [featherCanvas.width * .15, featherCanvas.height * .40];
    }

    featherCtx.beginPath();
    featherCtx.arc(...circlePosition, featherCanvas.height*.75, 0, 2*Math.PI);
    featherCtx.stroke();

    featherCtx.beginPath();
    featherCtx.arc(...circlePosition, featherCanvas.height*1.05, 0, 2*Math.PI);
    featherCtx.stroke();

}

var featherPosition;
var featherAngle;

// draws feather image
function drawFeather(){

    featherCtx.save();

    canvasHeight = featherCanvas.height;
    canvasWidth = featherCanvas.width;

    if (window.scrollY + window.innerHeight < featherBreakpoint) {
        featherPosition = [0.8 * canvasWidth - 1000, 0.9 * canvasHeight];
        featherAngle = -40;

        featherCtx.translate(...featherPosition);
        featherCtx.rotate(featherAngle * Math.PI /180);
        var featherDimensions = [Math.min(1600, canvasHeight*2), Math.min(1600/3, (canvasHeight*2)/3)]
        featherCtx.drawImage(image, 0, 0, ...featherDimensions);
    } 

    featherCtx.restore();
}

var gradient;
let frameCounter = 0;

// animation frame function
function drawCanvases() {
  particlesCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (i in particles) {
    p = particles[i];
    p.move();
    gradient = particlesCtx.createRadialGradient(
      p.x,
      p.y,
      p.gradSize,
      p.x,
      p.y,
      p.rad
    );
    gradient.addColorStop(0, "#FB7680");
    gradient.addColorStop(1, "rgba(255,255,255,0.0)");
    particlesCtx.fillStyle = gradient;
    particlesCtx.fillRect(p.x - p.rad, p.y - p.rad, p.rad * 2, p.rad * 2);
  }

  window.requestAnimationFrame(drawCanvases);

}

window.onresize = () => {
  particlesCanvas.style.display = (window.innerWidth < 800 ? "none" : "block");
  particlesBreakpoint = secondScreencell.offsetTop + secondScreencell.offsetHeight;
  featherBreakpoint = secondScreencell.offsetTop + secondScreencell.offsetHeight;
  duoBottom = duoContainer.offsetTop + duoContainer.offsetHeight;
  resizeCanvases();
  drawCircles();
  drawFeather();
}

window.addEventListener("scroll", ()=>{
  if (window.scrollY + window.innerHeight < featherBreakpoint || window.scrollY + window.innerHeight > duoBottom) {
    drawCircles();
    drawFeather();


    featherCanvas.style.opacity = (window.innerWidth < 800 ? 0.65 : 1);
  } else { 
    featherCanvas.style.opacity = 0;
  }

  if (window.scrollY + window.innerHeight > particlesBreakpoint) {
    particlesCanvas.style.opacity = 0;
  } else {
    particlesCanvas.style.opacity = 0.5;
  }

});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

if (particlesCanvas.getContext) {
  for (i = 0; i < amount; i++) {
    particles.push(new Particle());
  }
  drawCanvases();
  resizeCanvases();
  drawCircles();
}


