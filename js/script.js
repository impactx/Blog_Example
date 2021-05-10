let boolean = false;
function menuOpen() {
    
    const menu =  document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    const menuList = document.getElementsByClassName('menu');

    if (!boolean) {
        menu.classList.add('open');
        boolean = true;
        nav.style.opacity = '1';
        nav.style.display = "block"

    } else {
        menu.classList.remove('open')
        boolean = false;
        nav.style.opacity = '0';
        nav.style.display = "none"
        
        

    }
}