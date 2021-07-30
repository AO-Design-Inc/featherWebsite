// let fs = window.requestFileSystem();

fetch('http://localhost:1337/posts', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
}).then(response => response.json()).then(posts => { generateCard(posts); generateHTML(p) });

// making cards that connect to use case
function generateCard(p) {
    for (i = 0; i < p.length; i++) {
        let workContainer = document.getElementById("work_container")
        //link
        let useLink = document.createElement('a')
        useLink.href = `./${p[i].Title}.html`
        workContainer.appendChild(useLink)
        // use case card
        let useCase = document.createElement('div')
        useCase.className = 'use_case'
        useLink.appendChild(useCase)
        // thumbnail
        let useImg = document.createElement('img')
        useImg.id = 'use_img'
        try {
            console.log(`${i} : ${p[i].Image.formats.thumbnail.url}`)
            useImg.src = "http://127.0.0.1:1337" + p[i].Image.formats.thumbnail.url
            useCase.appendChild(useImg)
        } catch (e) {
            console.error(e + ' ' + i)
        }
        // text div
        let useText = document.createElement('div')
        useText.id = 'use_text'
        useText.innerHTML = `<span id="use_title">
                                ${p[i].Title}
                            </span>
                            <br><br>
                            <span id="use_blurb">
                                ${p[i].Description}
                            </span>`
        useCase.appendChild(useText)
    }
}

// generating use case pages.
// function generateHTML(p) {
//     for (i = 0; i < p.length; i++) {
//         var htmlContent = marked(`${p[i].Content}`);
//         fs.writeFile(`/${p[i].Title}.html`, htmlContent, (error) => { /* handle error */ });
//     }
// }

