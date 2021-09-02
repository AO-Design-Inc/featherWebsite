let varunaString = `
<template id="varuna">
    <dash-board action="email"></dash-board>
    <div id="splash" class="image-cover" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%), 
        url('./case-studies/assets/thumbnails/varuna-splash.png.webp');">
        <div id="splash-text">
            <p class="splash-year">2020</p>
            <p class="splash-org">Medical Service</p>
            <h1 style="font-weight: 300;" class="splash-title">Varuna</h1>
            <down-button onclick="smoothScrollOneFrameDown()"></down-button>
        </div>
    </div>
    <div id="section-container">
        <div class="section">

            <p class="section-title">1 Introduction</p>

        
            <div class="section-content">
                <h2 style="font-weight: 300;" class="section-heading">
                    Relevant Solutions
                </h2>

                <p class="section-text">When COVID19 first hit, doctors in India found that they lacked a succinct way of reaching patients without physical contact. Methods of communication between providers and patients were limited. Unlike the heavily centralized US system, few doctors in India had an existing web presence. 

Varuna, a low-cost Electronic Medical Records (EMR) and Scheduling System, aimed to change this. The system was developed to give doctors the power of a departmental EMR in a small, cheap, and beautifully designed website independent from large providers.</p>
            </div>

                <img 
                class="section-image" 
                src="./case-studies/assets/images/2021-07-19-09-27-varunadao.com.png.webp"
                alt=""
                />

            <image-carousel slideno=0 style="display:none;">
            </image-carousel>


        </div>
        <div class="section">

            <p class="section-title">2 Challenges</p>

        
            <div class="section-content">
                <h2 style="font-weight: 300;" class="section-heading">
                    Initial Interviews
                </h2>

                <p class="section-text">In March 2020, we met with a doctor about the troubles they were having with their existing medical software. Their current internal digital systems were clunky and an eyesore, but alternative third-party applications were often expensive and irresponsible when it came to data collection and storage. Simply put, there was a gap in the market for a simple and affordable solution for doctors who needed to quickly set up a web presence.

The goal of the service was to help doctors who didn&#39;t have a sufficient infrastructure with their transition to a digital solution during the pandemic.</p>
            </div>

                <img 
                class="section-image" 
                src="./case-studies/assets/images/varuna-graph.png.webp"
                alt="Varuna Graph"
                />

            <image-carousel slideno=0 style="display:none;">
            </image-carousel>


        </div>
        <div class="section">

            <p class="section-title">3 Process</p>

        
            <div class="section-content">
                <h2 style="font-weight: 300;" class="section-heading">
                    Scoping Out
                </h2>

                <p class="section-text">As we offered to build a custom solution for the doctor, we realized that we could scale this service out to other medical providers as well. We built a landing page for the doctor&#39;s firm that would link to our service. We quickly deployed a MVP, keeping the development process functional and the software lightweight. 

Throughout the development process, we worked closely with the client. We first tested our MVP with providers and patients to get feedback. The suggestions and opinions we received would tell us which parts of the system needed improvement.</p>
            </div>

                <img 
                class="section-image" 
                src="./case-studies/assets/images/varuna-process1.png.webp"
                alt="Varuna Process"
                />

            <image-carousel slideno=0 style="display:none;">
            </image-carousel>


        </div>
        <div class="section">

            <p class="section-title">4 Problems</p>

        
            <div class="section-content">
                <h2 style="font-weight: 300;" class="section-heading">
                    Problems
                </h2>

                <p class="section-text">After building and deploying the MVP we recognized two major problems. 

Prior to the pandemic, many doctors lacked any form of web presence. Online booking simply hadn&#39;t been a necessity. With the sudden demand for an easy way to book appointments online, Varuna would have to help them build up their website and presence from the ground up. 

Because Varuna was a new service, gaining the trust of providers was difficult. Many were initially hesitant to go through with the onboarding process.</p>
            </div>


            <image-carousel slideno=0 style="display:none;">
            </image-carousel>

            <hr>

        </div>
        <div class="section">

            <p class="section-title">5 Solutions</p>

        
            <div class="section-content">
                <h2 style="font-weight: 300;" class="section-heading">
                    Adaptation One
                </h2>

                <p class="section-text">To encourage providers to try Varuna, we developed custom landing pages for doctors with SEO support. As they used the service, they noted that our SEO and site design increased their patient sign-ups.</p>
            </div>


            <image-carousel slideno=0 >
                <img src="./case-studies/assets/images/varuna-solution.png.webp" class="slide-image" style="display:none;">
                <img src="./case-studies/assets/images/varuna-solution-1.png.webp" class="slide-image" style="display:none;">
            </image-carousel>


        </div>
        <div class="section">


        
            <div class="section-content">
                <h2 style="font-weight: 300;" class="section-heading">
                    Adaptation Two
                </h2>

                <p class="section-text">After gaining a decent client base, we began to refine the UI of the Varuna system for the patients using the site to book appointments.  

Early user feedback told us that having one form for all the patient information felt too cluttered and led to information overload. In response to this, we developed a &quot;card&quot; system as the central core design. All points of interaction and related information was broken up into modules called cards. This allowed us to easily divide and categorize information for the users and guide them along simple, well-defined stages of interaction.

Through rapid user-testing, we found that the key to improving user experience for patients was to simplify the interface. In doing so, the site became less confusing to use, allowing them to schedule appointments with ease.</p>
            </div>


            <image-carousel slideno=0 style="display:none;">
            </image-carousel>

            <hr>

        </div>
        <div class="section">


        
            <div class="section-content">
                <h2 style="font-weight: 300;" class="section-heading">
                    Adaptation Three
                </h2>

                <p class="section-text">Open source EMR projects such as OpenEMR already had powerful features that would take us far too long to develop on our own. Unfortunately, their interface was inaccessible to most individuals. Setting up an OpenEMR required technical knowledge and the ability to work with bad user interfaces. Building a functional frontend became a priority for us because it would allow us to capitalize on existing features while developing a better setup experience through NuxtJS. </p>
            </div>


            <image-carousel slideno=0 style="display:none;">
            </image-carousel>

            <hr>

        </div>
        <div class="section">

            <p class="section-title">5 Results</p>

        
            <div class="section-content">
                <h2 style="font-weight: 300;" class="section-heading">
                    Continued Use
                </h2>

                <p class="section-text">For providers, Varuna helped them sustain their business through the pandemic. We provided all doctors using Varuna with a web presence through personal websites and branding. For the patients of those providers, we developed an interface that was easy to use and able to serve a diverse customer base. After a year, Varuna continues to have active monthly users. </p>
            </div>


            <image-carousel slideno=0 style="display:none;">
            </image-carousel>

            <hr>

        </div>
    </div>

    <div id="footer">
        <div class="footer-banner">
            <div class="footer-text">
                <div class="logo">
                    <svg viewBox="0 0 339 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M71 53.2204H82.2198V31.2358H103.804V21.9586H82.2198V9.27719H106.136V0H71V53.2204Z" fill="#11131C"/>
                        <path d="M128.693 54C138.539 54 145.173 49.1925 146.727 41.7863L136.518 41.1107C135.404 44.1511 132.554 45.7363 128.874 45.7363C123.355 45.7363 119.857 42.0722 119.857 36.1213V36.0953H146.961V33.0549C146.961 19.4899 138.773 12.7854 128.252 12.7854C116.54 12.7854 108.948 21.127 108.948 33.4447C108.948 46.1001 116.436 54 128.693 54ZM119.857 29.2348C120.09 24.6872 123.536 21.0491 128.434 21.0491C133.227 21.0491 136.544 24.4793 136.57 29.2348H119.857Z" fill="#11131C"/>
                        <path d="M165.514 53.974C171.396 53.974 175.205 51.4013 177.148 47.6853H177.459V53.2204H187.927V26.2984C187.927 16.7873 179.895 12.7854 171.033 12.7854C161.497 12.7854 155.227 17.359 153.698 24.6352L163.907 25.4668C164.658 22.8162 167.016 20.8672 170.981 20.8672C174.738 20.8672 176.889 22.7642 176.889 26.0385V26.1944C176.889 28.7671 174.168 29.1049 167.25 29.7806C159.372 30.5082 152.298 33.1588 152.298 42.0722C152.298 49.9721 157.921 53.974 165.514 53.974ZM168.675 46.334C165.28 46.334 162.845 44.7488 162.845 41.7084C162.845 38.59 165.41 37.0568 169.297 36.5111C171.706 36.1732 175.645 35.6015 176.967 34.718V38.9538C176.967 43.1376 173.52 46.334 168.675 46.334Z" fill="#11131C"/>
                        <path d="M217.661 13.3051H210.173V3.74206H199.134V13.3051H193.693V21.6208H199.134V42.41C199.082 50.2319 204.394 54.1039 212.401 53.7661C215.251 53.6622 217.273 53.0905 218.387 52.7267L216.651 44.4889C216.106 44.5929 214.94 44.8527 213.904 44.8527C211.701 44.8527 210.173 44.0212 210.173 40.9548V21.6208H217.661V13.3051Z" fill="#11131C"/>
                        <path d="M236.745 30.1444C236.771 24.999 239.907 21.9846 244.415 21.9846C248.898 21.9846 251.541 24.8691 251.515 29.7806V53.2204H262.554V27.8056C262.579 18.4504 257.086 12.7854 248.794 12.7854C242.757 12.7854 238.715 15.6439 236.901 20.3474H236.434V0H225.707V53.2204H236.745V30.1444Z" fill="#11131C"/>
                        <path d="M289.379 54C299.225 54 305.859 49.1925 307.413 41.7863L297.204 41.1107C296.09 44.1511 293.24 45.7363 289.56 45.7363C284.041 45.7363 280.543 42.0722 280.543 36.1213V36.0953H307.647V33.0549C307.647 19.4899 299.458 12.7854 288.938 12.7854C277.226 12.7854 269.634 21.127 269.634 33.4447C269.634 46.1001 277.122 54 289.379 54ZM280.543 29.2348C280.776 24.6872 284.222 21.0491 289.12 21.0491C293.913 21.0491 297.23 24.4793 297.256 29.2348H280.543Z" fill="#11131C"/>
                        <path d="M314.85 53.2204H325.889V30.6381C325.889 25.7267 329.464 22.3484 334.336 22.3484C335.865 22.3484 337.964 22.6083 339 22.9461V13.1232C338.015 12.8893 336.642 12.7334 335.528 12.7334C331.071 12.7334 327.417 15.332 325.966 20.2695H325.552V13.3051H314.85V53.2204Z" fill="#11131C"/>
                        <path d="M15.1541 0C-0.0952275 0 1.44967e-05 14.7825 1.44967e-05 14.7825V23.2276C1.44967e-05 23.2276 3.47177 14.7825 13.0845 14.7825H14.0175H45.4621C60.9598 14.7825 60.6189 0.161148 60.6153 0.0238174H60.5785L60.6161 0.0007726H52.5404H32.9393L15.1541 0ZM15.1541 18.4789C-0.0952275 18.4789 1.44967e-05 33.2614 1.44967e-05 33.2614V41.7065C1.44967e-05 41.7065 3.47175 33.2614 13.0845 33.2614H14.0175H45.4621C60.9598 33.2614 60.6189 18.64 60.6153 18.5027H60.5785L60.6161 18.4797H52.5404C52.5404 18.4797 39.1703 18.4798 32.9393 18.4797C26.7082 18.4795 15.1541 18.4789 15.1541 18.4789V18.4789Z" fill="#11131C"/>
                        <path d="M15.1541 36.9463C-0.0952139 36.9463 1.44905e-05 51.729 1.44905e-05 51.729H17.806H18.1849C33.6826 51.729 33.3417 37.1074 33.3381 36.9701H33.3012L33.3388 36.9471H25.2631H15.1333L15.1541 36.9463Z" fill="#11131C"/>
                    </svg>
                </div>
                <p class="logo-subtext">Beautiful, lightweight websites</p>

                <feather-button text="Contact Us" onclick="location.href='#main#cta-screencell';"></feather-button>
            </div>
        </div>

    </div>
</template>
`;


class varunaPage extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        var parser = new DOMParser();

        // fetch html from file
        var templateHtml = parser.parseFromString(varunaString, 'text/html');

        // get the template contents
        var template = templateHtml.getElementById('varuna');
        var content = template.content;
        
        this.appendChild(content);
    }
}

customElements.define('varuna-page', varunaPage);
