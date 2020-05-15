const header = document.querySelector('header')

window.addEventListener('scroll', function (){
    const hasSrollClass = header.classList.contains('background-color')

    if (window.scrollY > 100 && !hasSrollClass) {
        header.classList.add('background-color');
    } else if (window.scrollY < 100 && hasSrollClass) {
        header.classList.remove('background-color');
    }
})
