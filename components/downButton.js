class downButton extends HTMLElement{
    constructor() {
        super();        
    }

    connectedCallback() {
        // fetch html from string
        var parser = new DOMParser();
        var downButtonHtml = parser.parseFromString(downButtonString, 'text/html');

        var buttonHtmlFrag = downButtonHtml.getElementById("down-button").content;
        this.appendChild(buttonHtmlFrag);
    }

}

customElements.define('down-button', downButton);

var downButtonString = `
<template id="down-button">
<svg width="90" height="30" viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="90" height="30" rx="15" fill="black" class="color-path"/>
    <path d="M45.4688 18.75L38.4375 11.25H52.5L45.4688 18.75Z" fill="white" stroke="white" stroke-linejoin="round"/>
</svg>
</template>
`;

// ONCLICK OPTIONS 

// smooth scrolls to the next page, provided to page id
async function smoothScrollTo(page_id){
    document.getElementById(page_id).style.display='block'; 

    var originalPosition = window.pageYOffset;
    var targetPosition = originalPosition + window.innerHeight;
    window.scroll({top: targetPosition, behavior:'smooth'});

    // pause while scrolling
    if (window.pageYOffset < targetPosition){
        // doesnt prevent the bug
        window.addEventListener("wheel", preventScroll, { passive:false });
        
        await sleep(700);
    }
    window.removeEventListener("wheel", preventScroll);
    window.location.hash = 'varuna';
    
}

// smooth scrolls down 1 vh from top of page
const smoothScrollOneFrameDown = () => {
    window.scroll({
        top: window.innerHeight, 
        behavior:'smooth'});
}

// HELPER FUNCTIONS
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function preventScroll(e) {
    e.preventDefault();
}