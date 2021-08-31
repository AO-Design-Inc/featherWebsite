class dashboard extends HTMLElement{
    constructor() {
        super();        
    }

    connectedCallback(){
        // fetch html from string
        var parser = new DOMParser();
        var dashboardHtml = parser.parseFromString(dashboardString, 'text/html');

        // get the dashboard node and button container
        var dashboard = dashboardHtml.getElementById('dashboard').content;
        var buttons = dashboard.getElementById('butt_container');

        // check if display blog button
        if(this.hasAttribute('blog') && this.getAttribute('blog') === 'true') {
            var blogButton = dashboardHtml.getElementById("butt_blog");
            buttons.appendChild(blogButton);
        }
            
        // check for 'close' attribute
        if(this.hasAttribute('action')) {
            if (this.getAttribute('action') === 'close')
                var selectedButton = dashboardHtml.querySelector('[aria-label="Close"]');
            if (this.getAttribute('action') === 'email') // default to email button
                var selectedButton = dashboardHtml.querySelector('[aria-label="Email Us"]');
            buttons.appendChild(selectedButton);
        }

        this.appendChild(dashboard);
    }

}

customElements.define('dash-board', dashboard);

var dashboardString = /*html*/`
<template id="dashboard">
    <div id="logo">
        <a aria-label="Feather" role="link" href="#main">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="color-path"
                    d="M60 30C60 13.4315 46.5685 0 29.9999 0C13.4314 0 0 13.4315 0 30C0 46.5685 13.4314 60 29.9999 60C46.5685 60 60 46.5685 60 30Z"
                    fill="black" />
                <path
                    d="M22.8381 15.326C14.3984 15.326 14.4512 23.7128 14.4512 23.7128V28.5043C14.4512 28.5043 16.3726 23.7128 21.6927 23.7128H22.2091H39.6119C48.1889 23.7128 48.0003 15.4174 47.9984 15.3395H47.9779L47.9988 15.3264H43.5293H32.6812L22.8381 15.326ZM22.8381 25.81C14.3984 25.81 14.4512 34.1969 14.4512 34.1969V38.9883C14.4512 38.9883 16.3726 34.1969 21.6927 34.1969H22.2091H39.6119C48.1889 34.1969 48.0003 25.9015 47.9984 25.8235H47.9779L47.9988 25.8105H43.5293C43.5293 25.8105 36.1298 25.8106 32.6812 25.8105C29.2326 25.8104 22.8381 25.81 22.8381 25.81Z"
                    fill="white" />
                <path
                    d="M22.8381 36.2871C14.3985 36.2871 14.4512 44.674 14.4512 44.674H24.3058H24.5154C33.0926 44.674 32.9039 36.3786 32.902 36.3007H32.8814L32.9023 36.2875H28.4329H22.8266L22.8381 36.2871Z"
                    fill="white" />
            </svg>
        </a>
    </div>
    <div id="butt_container"></div>
</template>
<button onclick="location.href='https://blog.feather.systems/';" id="butt_blog">Blog</button>
<button aria-label="Email Us" id="butt_contact_form" onclick="location.href='#main#work_head'; location.href='#main#cta-screencell';">
    <div>
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 2C0 0.89543 0.89543 0 2 0H18C19.1046 0 20 0.89543 20 2V14C20 15.1046 19.1046 16 18 16H2C0.89543 16 0 15.1046 0 14V2ZM3.51859 2L10 7.6712L16.4814 2H3.51859ZM18 3.32877L10.6585 9.7526C10.2815 10.0825 9.7185 10.0825 9.3415 9.7526L2 3.32877V14H18V3.32877Z"
                fill="#0D0D0D" />
        </svg>
    </div>
</button>;`;