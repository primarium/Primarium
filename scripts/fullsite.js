// $(function () {
//     $('.defclick').click(function () {
//         var data = $(this).data('target');
//         $(".modal").dialog({
//             title: 'Definition',
//             open: function (event, ui) {
//                 $('#art').load(data, function () {
//                 });
//             }
//         });
//     })
//     $('.postclick').click(function(event){
//         event.preventDefault();
//         var target = $(this).data('target');
//         $('.catbloc').hide();
//         $(target).show();
//     })
// });
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
    var loadModal = function () {
        var request = new XMLHttpRequest();
        request.open("GET", this.getAttribute("data-target"), true);
        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 400) {
                    // Success!
                    var resp = this.responseText;
                    var art = document.getElementById("art");
                    art.innerHTML = resp;
                    var el = document.getElementById("modal1");
                    addClass(el, "modalshow");
                } else {
                    console.log("something went wrong");
                }
            }
        };

        request.send();
        request = null;
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
    for (var i = 0; i < loadMod.length; i++) {
        loadMod[i].addEventListener("click", loadModal, false);
    }
    for (var i = 0; i < postclick.length; i++) {
        postclick[i].addEventListener("click", filterPost, false);
    }
    closeMod.addEventListener("click", closeModal, false);
    
};
//
//$('.postclick').click(function(event){
    //         event.preventDefault();
    //         var target = $(this).data('target');
    //         $('.catbloc').hide();
    //         $(target).show();
    //     })