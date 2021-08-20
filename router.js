const pages = document.getElementsByClassName("page");
var currPage;

// if there is no hash, default to main hash
if(window.location.hash == ""){
    window.location.hash = "main";
    currPage = 'main';
} else {
    onRouteChanged()
}

// relies on the page ids matching up to the hash
function onRouteChanged() {
    var hash = window.location.hash.split('#')[1];

    for (page of pages) {
        page.style.display = (page.id == hash ? "block" : "none");
    }

    window.scrollTo(0,0);
    currPage = hash;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// smooth scrolls to elements on main page
async function mainSmoothScroll(element_id){

    if (currPage != "main"){
        window.location.hash = "main";
        await sleep(50);
    }

    document.getElementById(element_id).scrollIntoView({behavior: "smooth"});
}

window.addEventListener("hashchange", onRouteChanged);
