"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const MenuButton = document.getElementById('menuBtn');
    const MenuPage = document.getElementById('sidebar');
    const MenuClose = document.getElementById('closeMenu');
    const MainBody = document.getElementsByTagName('html')[0];
    MenuButton.addEventListener('click', function(){
        MenuPage.classList.remove('-translate-x-full');
        MainBody.style.overflow = "hidden";
    })
    MenuClose.addEventListener('click', function(){
        MenuPage.classList.add('-translate-x-full')
        MainBody.style.overflow = "auto";
    })
});