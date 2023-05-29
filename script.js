// for flicker effect
function flickerNeon() {
    const flickerSpan = document.getElementById("flicker");
    flickerSpan.classList.toggle("flicker-letter");
}

function loaded() {
    // this makes sure page isnt shown unitl loaded
    document.getElementById("main-body").style.display = "block";
    // starts off
    setTimeout(flickerNeon, 1000);
    setTimeout(flickerNeon, 100);
    setTimeout(flickerNeon, 2500);
    setTimeout(flickerNeon, 500);
    setTimeout(flickerNeon, 2000);

    // for creating reg form for testing
    // triggerReg();
}


// for registration form
var form_visible=false;
var logged_in=false;

function triggerReg() {
    if (logged_in) {
        location.reload();
    } else {
        document.getElementById("form-ct").style.display = "block";
        document.getElementById("center-picture").style.display = "none";
        form_visible = true;
        addEv();
    }
}


function addEv(){
    console.log("add event listner");
    window.addEventListener('click', function(e){ 
        if (
            !document.getElementById('form-ct').contains(e.target) 
            && form_visible 
            && !document.getElementById('trigger-modal').contains(e.target)){

            console.log("clicked outside reg box");
            unTrigerReg();
        }
    });
    
}


function unTrigerReg() {
    document.getElementById("form-ct").style.display = "none";
    document.getElementById("center-picture").style.display = "block";

    form_visible=false;
}


function submitRego() {

    console.log("submit rego");

    document.getElementById("login-button").style.display = "none";
    document.getElementById("reg-text").textContent = "Logout";
    logged_in = true;
    //! THIS DOESNT WORK AS PAGE SEEMS TO REFRESH HOWEVER IT IS NOT REQUIRED
}