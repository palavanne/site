(function () {

const lightboxContainer = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-img');
const galleryItemsPkp = document.querySelector('.gallery-items-pkp').children;
const previousBtn = document.querySelector('.previous-btn')
const nextBtn = document.querySelector('.next-btn')
let index;
let imgSrc;

for (let i = 0; i < galleryItemsPkp.length; i++) {
    galleryItemsPkp[i].querySelector('.gallery-img-pkp').addEventListener('click', () => {
        index = i;
        lightbox();
        changeImg();
    })
}

previousBtn.addEventListener('click', () => {
    if (index === 0) {
        index = galleryItemsPkp.length-1;
    } else {
        index--;
    }
    changeImg();
})
nextBtn.addEventListener('click', () => {
    if (index === galleryItemsPkp.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeImg();
})

const btnCloseGallery = document.querySelector('.btn-close-gallery')
btnCloseGallery.addEventListener('click', function () {
    lightboxContainer.classList.remove('open');
})

function lightbox () {
    lightboxContainer.classList.add('open');
}

function changeImg () {
    imgSrc = galleryItemsPkp[index].querySelector('.gallery-img-pkp').getAttribute('src');
    lightboxImage.src = imgSrc;
}

}())
