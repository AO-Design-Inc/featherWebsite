const slider = document.querySelector('work-container');
console.log(slider);
var isDown = false;
var startX;
var scrollLeft;
var mouseMoved;

slider.addEventListener('mousedown', (e) => {
    mouseMoved = false;
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', (e) => {
    isDown = false;
    if (mouseMoved){
        e.preventDefault();
        e.stopPropagation();
    }
});

slider.addEventListener('mousemove', (e) => {
    mouseMoved = true;
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 0.75;
    slider.scrollLeft = scrollLeft - walk;
});

