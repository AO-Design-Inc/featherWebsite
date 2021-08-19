const canvas = document.getElementById("particles");
var ctx = canvas.getContext("2d");
canvas.width = 5000;
canvas.height = 5000;
particles = [];
amount = 20; // number of particles
const height =
  Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  ) - window.innerHeight;
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

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

    if (this.x > window.innerWidth || this.y > window.innerHeight) {
      this.relocate();
    }

    if (this.y < 0) {
      this.relocate();
    }
  }
  o() {
    if (window.scrollY.map(0, height, 0, 1) >= 0.13122852233676977) {
      canvas.style.transition = '0.6s cubic-bezier(0.65, 0, 0.35, 1)'
      canvas.style.opacity = 0;
    } else {
      canvas.style.transition = '0.6s cubic-bezier(0.65, 0, 0.35, 1)';
      canvas.style.opacity = 0.5;
    }
  }
}

function init() {
  for (i = 0; i < amount; i++) {
    particles.push(new Particle());
  }
}

var gradient;

function move() {
  if (canvas.getContext) {
    ctx.fillStyle = "#fffafb";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    for (i in particles) {
      p = particles[i];
      p.o();
      p.move();
      gradient = ctx.createRadialGradient(
        p.x,
        p.y,
        p.gradSize,
        p.x,
        p.y,
        p.rad
      );
      gradient.addColorStop(0, "#FB7680");
      gradient.addColorStop(1, "rgba(255,255,255,0.0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(p.x - p.rad, p.y - p.rad, p.rad * 2, p.rad * 2);
    }
    raf = window.requestAnimationFrame(move);
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

init();
move();
