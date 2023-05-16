// for flicker effect
function flickerNeon() {
    const flickerSpan = document.getElementById("flicker");
    flickerSpan.classList.toggle("flicker-letter");
}

function loaded() {
    // starts off
    setTimeout(flickerNeon, 1000);
    setTimeout(flickerNeon, 100);
    setTimeout(flickerNeon, 2500);
    setTimeout(flickerNeon, 500);
    setTimeout(flickerNeon, 2000);
}
