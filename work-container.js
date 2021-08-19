// This file (and the template string below) is generated 
// from the card-component.mustache template, and thus changes to 
// this file should be made through the template

var caseStudiesTemplate = `
<template id="temp-work-container">
    <div class="spacer"></div>
    <div class="use-case" onclick="location.href='#boac';">
        <img class="use-img" src="./case-studies/assets/thumbnails/medium_thumbnail-boac.png.webp"/>
        <div class="use-text">
            <p class="use-title">Business Owners Advisory Council</p>
            <p class="use-blurb">The Business Owners Advisory Council (BOAC) is a forum of industry leaders and successful entrepreneurs that share information and critical strategies to achieve professional and personal objectives. </p>
        </div>
    </div>
    <div class="use-case" onclick="location.href='#varuna';">
        <img class="use-img" src="./case-studies/assets/thumbnails/medium_varuna-thumbnail.png.webp"/>
        <div class="use-text">
            <p class="use-title">Varuna</p>
            <p class="use-blurb">When COVID19 first hit, doctors in India lacked a succinct way of reaching patients without physical contact. </p>
        </div>
    </div>
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
        console.log(card.content);
        this.appendChild(card.content);
    }
}

customElements.define('work-container', caseStudy);