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
    if (hash != "main"){
        window.scrollTo(0,0);
    }

    currPage = hash;
}

// smooth scrolls to elements on main page
function mainSmoothScroll(element_id){

    if (currPage != "main"){
        for (page of pages) {
            page.style.display = (page.id == 'main' ? "block" : "none");
        }
        currPage = "main";
    }

    document.getElementById(element_id).scrollIntoView({behavior: "smooth"});
}

window.addEventListener("hashchange", onRouteChanged);
