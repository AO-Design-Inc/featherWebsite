const pages = document.getElementsByClassName("page");
var currPage;
var newSession = true;


// if there is no hash, default to main hash
if(window.location.hash == ""){
    window.history.replaceState({}, "", '/#main');
    document.getElementById("main").style.visibility = "visible";
    currPage = "main";
} else {
    onRouteChanged()
}

// relies on the page ids matching up to the hash
function onRouteChanged() {

    // parse hash list
    var hashList = window.location.hash.split('#');
    
    var pageHash = hashList[1];
    var pageChanged = false;

    // handles page change
    if (currPage != pageHash){
        for (page of pages) {
            page.style.visibility = (page.id == pageHash ? "visible" : "hidden");
            page.style.display = (page.id == pageHash ? "block" : "none");
        }
        pageChanged = true;
        currPage = pageHash;
    }

    // checks  and handles content hash. If content is on the same page, scroll into view
    // otherwise just jump to it. On a new session, the content hash is ignored since 
    // Page position is cached between page reloads, so when the page is reloaded, trying to
    // force an element scroll can cause the page to jump between content and last cached page position
    if (!newSession && hashList.length == 3){
        var hashElement = document.getElementById(hashList[2]);
        hashElement.scrollIntoView( pageChanged ? {behavior: "auto"} : {behavior: "smooth"} );
    } else {
        window.scrollTo(0,0);
    }

    newSession = false;
}

window.addEventListener("hashchange", onRouteChanged);

