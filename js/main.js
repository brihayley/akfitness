function toggleNav() {
    "use strict";
    var i = document.getElementById("myTopNav");
    if (i.className === "topnav") {
        i.className += " responsive";
    } else {
        i.className = "topnav";
    }
}

function toggleNavHome() {
    "use strict";
    var i = document.getElementById("myTopNavHome");
    if (i.className === "home-topnav") {
        i.className += " responsive";
    } else {
        i.className = "home-topnav";
    }
}