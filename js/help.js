var isHelp = false;

addEventListener("keydown", function(event) {
    if (event.keyCode == 115)
        helper();
});

function helper() {
    isHelp = !isHelp;
    let bg = document.getElementById('background');
    let help = document.getElementById('help');
    let time = document.getElementById('time');
    let bigSearch = document.getElementById('big-search');

    if (isHelp) {
        bg.style.zIndex = "900";
        bg.style.boxShadow = "0 0 0 1000px rgba(0, 0, 0, 0.5) inset";
        bg.style.filter = 'blur(5px)';
        help.style.visibility = "visible";
        help.style.zIndex = "999";
        time.style.visibility = "hidden";
    } else {
        if (bigSearch.style.visibility !== "visible") {
            bg.style.zIndex = "-1";
            bg.style.boxShadow = "0 0 0 0px rgba(0, 0, 0, 0.5) inset";
            bg.style.filter = 'blur(0px)';
            time.style.visibility = "visible";
        }
        help.style.visibility = "hidden";
        help.style.zIndex = "-2";
        
    }
}