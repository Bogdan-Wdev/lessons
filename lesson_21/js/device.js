"use strict"

const isMobile = {
    Android: function() {
        return window.matchMedia("only screen and (max-width: 600px)").matches;
    },
    iOS: function() {
        return window.matchMedia("only screen and (max-width: 768px)").matches;
    },
    any: function() {
        return isMobile.Android() || isMobile.iOS();
    },
};

if (isMobile.any()){
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if(menuArrows.length>0) {
        for (let index = 0; index < menuArrows.length; index++){
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function(e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
    
} else {
    document.body.classList.add('_pc');
}



