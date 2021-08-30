const featherCanvas = document.getElementById("feather-canvas");
var featherCtx = featherCanvas.getContext("2d");

// fading in and out transition
featherCanvas.style.transition = '0.2s cubic-bezier(0.65, 0, 0.35, 1)'

// linear gradient for circles
var canvasGradient = featherCtx.createLinearGradient(0,500,0, 0);
canvasGradient.addColorStop(1, '#fffafb');
canvasGradient.addColorStop(0, 'rgba(251, 118, 128, 0.35)');

var duoContainer = document.getElementById("duo_container");

// set canvas dimensions 
const resizeCanvas = () => {

    // bound max-width to 2500
    featherCanvas.width = Math.min(window.innerWidth, 2500);

    // bound height between 800 and 1440
    var currHeight = featherCanvas.height;
    var tempHeight = Math.max(800, Math.min(window.innerHeight, 1440));

    if (Math.abs(currHeight - tempHeight) > 100)
        featherCanvas.height = tempHeight;
}

var circlePosition;

function drawCircles(){
    // clears screen and refills with background color
    featherCtx.clearRect(0, 0, featherCanvas.width, featherCanvas.height);

    featherCtx.fillStyle = "#fffafb";
    featherCtx.fillRect(0, 0, featherCanvas.width, featherCanvas.height);

    featherCtx.globalCompositeOperation = "multiply";
    featherCtx.strokeStyle = canvasGradient;

    if (window.scrollY.map(0, height, 0, 1) < 0.20) {
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

var image = new Image();
image.src = 'icons/feather.webp';
image.onload = drawImage;

var featherPosition;
var featherAngle;

function drawImage(){
    featherCtx.save();

    canvasHeight = featherCanvas.height;
    canvasWidth = featherCanvas.width;

    if (window.scrollY.map(0, height, 0, 1) < 0.20) {
        featherPosition = [0.8 * canvasWidth - 1000, 0.9 * canvasHeight];
        featherAngle = -45;
    } else {
        featherPosition = [0 , -1 * canvasHeight];
        featherAngle = 65;
    }

    featherCtx.translate(...featherPosition);
    featherCtx.rotate(featherAngle * Math.PI /180);
    var featherDimensions = [Math.min(1600, canvasHeight*2), Math.min(1600/3, (canvasHeight*2)/3)]
    featherCtx.drawImage(image, 0, 0, ...featherDimensions);

    featherCtx.restore();
}

var duoBottom = duoContainer.offsetTop + duoContainer.offsetHeight;

function drawBackground(){
    
    if (window.scrollY.map(0, height, 0, 1) < 0.20 || window.scrollY + window.innerHeight > duoBottom) {
        drawCircles();
        drawImage();

        featherCanvas.style.opacity = (window.innerWidth < 800 ? 0.5 : 1);
    } else { 
        featherCanvas.style.opacity = 0;
    }

    window.onresize = () => {
        // recalculate height
        duoBottom = duoContainer.offsetTop + duoContainer.offsetHeight;
        resizeCanvas();
        drawCircles();
        drawImage();
    }

    frame = window.requestAnimationFrame(drawBackground);
}

resizeCanvas();
drawCircles();
drawBackground();