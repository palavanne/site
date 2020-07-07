(function () {

const lightboxContainer = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-img');
const galleryItemsCev = document.querySelector('.gallery-items-cev').children;
const previousBtn = document.querySelector('.previous-btn')
const nextBtn = document.querySelector('.next-btn')
let index;
let imgSrc;

for (let i = 0; i < galleryItemsCev.length; i++) {
    galleryItemsCev[i].querySelector('.gallery-img-cev').addEventListener('click', () => {
        index = i;
        lightbox();
        changeImg();
    })
}

previousBtn.addEventListener('click', () => {
    if (index === 0) {
        index = galleryItemsCev.length-1;
    } else {
        index--;
    }
    changeImg();
})
nextBtn.addEventListener('click', () => {
    if (index === galleryItemsCev.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeImg();
})
const btnCloseGallery = document.querySelector('.btn-close-gallery')
btnCloseGallery.addEventListener('click', () => {
    lightboxContainer.classList.remove('open');
})

function lightbox () {
    lightboxContainer.classList.add('open');
}

function changeImg () {
    imgSrc = galleryItemsCev[index].querySelector('.gallery-img-cev').getAttribute('src');
    lightboxImage.src = imgSrc;
}

}())