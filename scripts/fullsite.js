"use strict";
function hasClass(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    } else {
        return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
    }
}
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else if (!hasClass(el, className)) {
        el.className += " " + className;
    }
}
function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else if (hasClass(el, className)) {
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        el.className = el.className.replace(reg, " ");
    }
}
window.onload = function () {
    var loadMod = document.getElementsByClassName("defclick");
    var closeMod = document.getElementById("close");
    var postclick = document.getElementsByClassName("postclick");
    var closeModal = function () {
        var toclose = document.getElementById("modal1");

        removeClass(toclose, "modalshow");
    };

    var filterPost = function () {
        var catblock = document.getElementsByClassName("catbloc");
        for (var i = 0; i < catblock.length; i++) {
            catblock[i].style.display = "none";
        }
        var targetel = document.getElementsByClassName(this.getAttribute("data-target"));
        for (var i = 0; i < targetel.length; i++) {
            targetel[i].style.display = "block";
        }
        
    }
    for (var i = 0; i < postclick.length; i++) {
        postclick[i].addEventListener("click", filterPost, false);
    }
    
};
