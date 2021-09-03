// This file (and the template string below) is generated 
// from the card-component.mustache template, and thus changes to 
// this file should be made through the template

var caseStudiesTemplate = `
<template id="temp-work-container">
    <div class="spacer"></div>
    <a draggable="false" class="use-case" href="#featherlabs" 
        style="background-image: url('./case-studies/assets/thumbnails/medium_labs_splash.png.webp')">
        <span class="color-overlay">
            <span class="card-title">Feather Labs</span>
        </span>
    </a>
    <a draggable="false" class="use-case" href="#boac" 
        style="background-image: url('./case-studies/assets/thumbnails/medium_cover.png.webp')">
        <span class="color-overlay">
            <span class="card-title">Business Owners Advisory Council</span>
        </span>
    </a>
    <a draggable="false" class="use-case" href="#varuna" 
        style="background-image: url('./case-studies/assets/thumbnails/medium_varuna-splash.png.webp')">
        <span class="color-overlay">
            <span class="card-title">Varuna</span>
        </span>
    </a>
</template>;`

class caseStudy extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback(){
        var parser = new DOMParser();

        // fetch html from string
        var cardHtml = parser.parseFromString(caseStudiesTemplate, 'text/html');
        var card = cardHtml.getElementById("temp-work-container");
        this.appendChild(card.content);
    }
}

customElements.define('work-container', caseStudy);