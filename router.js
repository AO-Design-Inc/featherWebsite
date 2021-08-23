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
    var hashList = window.location.hash.split('#');
    
    var pageHash = hashList[1];
    var contentHash = null;

    if (hashList.length == 3)
        contentHash = hashList[2];

    if (currPage != pageHash){
        for (page of pages) {
            page.style.display = (page.id == pageHash ? "block" : "none");
        }
        currPage = pageHash;
    }

    if (contentHash !== null) {
        console.log("scrolling to content");
        document.getElementById(contentHash).scrollIntoView();
    } else {
        console.log("start at top");
        window.scrollTo(0,0);
    }

    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// smooth scrolls to elements on main page
async function mainSmoothScroll(element_id){

    if (currPage != "main"){
        window.location.hash = "main";
        //await sleep(25);
        console.log(document.getElementById(element_id));
        document.getElementById(element_id).scrollIntoView();
    } else {
        document.getElementById(element_id).scrollIntoView({behavior: "smooth"});
    }
}

window.addEventListener("hashchange", onRouteChanged);
