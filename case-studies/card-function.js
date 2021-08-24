const slider = document.querySelector('work-container');
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
});

// not perfect yet
document.querySelectorAll(".use-case").forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(mouseMoved);
        if (mouseMoved){
            e.preventDefault();
            e.stopPropagation();
        }
    })
})

slider.addEventListener('mousemove', (e) => {
    mouseMoved = true;
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 0.75;
    slider.scrollLeft = scrollLeft - walk;
});

