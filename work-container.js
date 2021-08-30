// This file (and the template string below) is generated 
// from the card-component.mustache template, and thus changes to 
// this file should be made through the template

var caseStudiesTemplate = `
<template id="temp-work-container">
    <div class="spacer"></div>
    <div class="use-case" id="boac-card">
        <img class="use-img" src="./case-studies/assets/thumbnails/medium_cover.png.webp" draggable="false"/>
        <div class="use-text">
            <p class="use-title">Business Owners Advisory Council</p>
            <p class="use-blurb">The Business Owners Advisory Council (BOAC) is a forum of industry leaders and successful entrepreneurs that share information and critical strategies to achieve professional and personal objectives. </p>
        </div>
    </div>
    <div class="use-case" id="varuna-card">
        <img class="use-img" src="./case-studies/assets/thumbnails/medium_varuna-splash.png.webp" draggable="false"/>
        <div class="use-text">
            <p class="use-title">Varuna</p>
            <p class="use-blurb">When COVID19 first hit, doctors in India found that they lacked a succinct way of reaching patients without physical contact. Methods of communication between providers and patients were limited. Unlike the heavily centralized US system, few doctors in India had an existing web presence. </p>
        </div>
    </div>
    <div class="use-case" id="featherlabs-card">
        <img class="use-img" src="./case-studies/assets/thumbnails/medium_labs_splash.png.webp" draggable="false"/>
        <div class="use-text">
            <p class="use-title">Feather Labs</p>
            <p class="use-blurb">A project that exemplifies our approach to web development, design &amp; 3D rendering.</p>
        </div>
    </div>
    <div class="spacer"></div>
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