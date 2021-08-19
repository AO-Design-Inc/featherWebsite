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
    for (page of pages) {
        console.log(pages);
        if (page.id == hash)
            page.style.display = "block"; 
        else 
            page.style.display = "none";
    }
    if (hash != "main"){
        window.scrollTo(0,0);
    }
}

window.addEventListener("hashchange", onRouteChanged);
