const pages = document.getElementsByClassName("page");

// if there is no hash, default to main hash
if(window.location.hash == ""){
    window.location.hash = "main";
} else {
    onRouteChanged()
}

// relies on the page ids matching up to the hash
function onRouteChanged() {
    var hash = window.location.hash.split('#')[1];

    // temporary fix
    if (hash == "cta_container") {
        for (page of pages) {
            page.style.display = (page.id == 'main' ? "block" : "none");
        }
        return;
    }

    for (page of pages) {
        page.style.display = (page.id == hash ? "block" : "none");
    }
    if (hash != "main"){
        window.scrollTo(0,0);
    }
    
}

window.addEventListener("hashchange", onRouteChanged);
