var isBigSearch = false;

addEventListener("keydown", function(event) {
    if (event.keyCode == 113)
        bigSearch(113);
});

function bigSearch() {
    isBigSearch = !isBigSearch;
    let bg = document.getElementById('background');
    let bigSearch = document.getElementById('big-search');
    let time = document.getElementById('time');
    let help = document.getElementById('help');

    if (isBigSearch) {
        bg.style.zIndex = "900";
        bg.style.boxShadow = "0 0 0 1000px rgba(0, 0, 0, 0.5) inset";
        bg.style.filter = 'blur(5px)';
        bigSearch.style.visibility = "visible";
        bigSearch.style.zIndex = "1000";
        bigSearch.focus();
        time.style.visibility = "hidden";
    } else {
        if (help.style.visibility !== "visible") {
            bg.style.zIndex = "-1";
            bg.style.boxShadow = "0 0 0 0px rgba(0, 0, 0, 0.5) inset";
            bg.style.filter = 'blur(0px)';
            time.style.visibility = "visible";
        }
        bigSearch.style.visibility = "hidden";
        bigSearch.style.zIndex = "-2";
        bigSearch.value = '';
        
    }
}