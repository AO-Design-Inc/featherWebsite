/*
To style button colors 

// button color
feather-button::part(button):after {
    background-color: orange;
}

// animation over color
feather-button::part(button):before {
    background-color: rgba(255,255,255,0.2);
}
*/
class featherButton extends HTMLElement{
    constructor() {
        super();   
        const shadowRoot = this.attachShadow({mode: 'open'});   
        
        const styleElement = document.createElement("style");
        styleElement.innerHTML = `
        button {
            display: block;
            border: none;
            border-radius: 9999px;
            color: white;
            padding: 15px 25px;
            font-size: 1.125rem;

            position: relative;
            overflow: hidden;
            transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            z-index: 1;
        }

        button:hover {
            transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            box-shadow: 0px 2px 4px rgba(255, 92, 92, 0.2), 0px 4px 5px 5px rgba(255, 92, 92, 0.05),
                0px 4px 4px rgba(255, 92, 92, 0.05);
            cursor: pointer;
        }

        button:hover:before {
            width: 100%;
        }

        button::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 9999px;
            z-index: -2;
        }

        button::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 100%;
            transition: all .3s;
            border-radius: 9999px;
            z-index: -1;
        }
        `;

        const button = document.createElement("button");
        button.id="feather-button";
        button.setAttribute("part", "button");

        shadowRoot.appendChild(styleElement);
        shadowRoot.appendChild(button);
    }

    connectedCallback(){
        this.shadowRoot.getElementById("feather-button").textContent = this.getAttribute('text');
    }

}

customElements.define('feather-button', featherButton);