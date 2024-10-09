function toggleMenu(){
    var menuIcon = document.querySelector('.menu-icon');
    var menuitems = document.querySelector('.menu-items'); 
    menuIcon.classList.toggle('active');
    menuitems.classList.toggle('active');
}