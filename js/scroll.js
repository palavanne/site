var navbar = document.querySelector('header')

window.addEventListener('scroll', function (){
    var hasSrollClass = navbar.classList.contains('background-color')

    if (window.scrollY > 100 && !hasSrollClass) {
        navbar.classList.add('background-color');
    } else if (window.scrollY < 100 && hasSrollClass) {
        navbar.classList.remove('background-color');
    }
})
