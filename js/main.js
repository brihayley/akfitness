function toggleNav() {
    "use strict";
    var i = document.getElementById("myTopNav");
    if (i.className === "topnav") {
        i.className += " responsive";
    } else {
        i.className = "topnav";
    }
}
