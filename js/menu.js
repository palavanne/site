var linkMenuOpen = document.querySelector('.image-hamburger')
linkMenuOpen.addEventListener('click', function () {
    var menu = document.querySelector('.header-nav')
    menu.classList.remove('close')
})

var linkMennuClose = document.querySelectorAll('.nav-link')

for (const linkMenu of linkMennuClose) {
    
    linkMenu.addEventListener('click', function () {
        var menuOpen = document.querySelector('.header-nav')
        menuOpen.classList.add('close')
    })
}
