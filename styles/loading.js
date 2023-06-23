var t = 5;
function load() {
    if (t == 0) {
        var obj = document.getElementById("loading-box");
        obj.setAttribute("style", "display:none;");
    }
    else {
        t -= 1;
        //var obj = document.getElementById("loader-text");
        //obj.innerHTML = t;
        setTimeout(load, 1000);
    }
}