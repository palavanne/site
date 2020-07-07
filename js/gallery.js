(function () {

const lightboxContainer = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-img');
const galleryItemsPkp = document.querySelector('.gallery-items-pkp').children;
const galleryItemsCev = document.querySelector('.gallery-items-cev').children;
const galleryItemsMouffle = document.querySelector('.gallery-items-mouffle').children;
const galleryItemsCratt = document.querySelector('.gallery-items-cratt').children;
const galleryItemsFr = document.querySelector('.gallery-items-fr').children;
const galleryItemsMalle = document.querySelector('.gallery-items-malle').children;
const previousBtn = document.querySelector('.previous-btn')
const nextBtn = document.querySelector('.next-btn')
let index;
let imgSrc;

for (let i = 0; i < galleryItemsPkp.length; i++) {
    galleryItemsPkp[i].querySelector('.gallery-img-pkp').addEventListener('click', () => {
        index = i;
        lightbox();
        changeImg();
        lightboxContainer.classList.add('js-gallery-pkp');
    })
}
for (let j = 0; j < galleryItemsCev.length; j++) {
    galleryItemsCev[j].querySelector('.gallery-img-cev').addEventListener('click', () => {
        index = j;
        lightbox();
        changeImgCev();
        lightboxContainer.classList.add('js-gallery-cev');
    })
}
for (let k = 0; k < galleryItemsMouffle.length; k++) {
    galleryItemsMouffle[k].querySelector('.gallery-img-mouffle').addEventListener('click', () => {
        index = k;
        lightbox();
        changeImgMouffle();
        lightboxContainer.classList.add('js-gallery-mouffle');
    })
}
for (let l = 0; l < galleryItemsCratt.length; l++) {
    galleryItemsCratt[l].querySelector('.gallery-img-cratt').addEventListener('click', () => {
        index = l;
        lightbox();
        changeImgCratt();
        lightboxContainer.classList.add('js-gallery-cratt');
    })
}
for (let m = 0; m < galleryItemsFr.length; m++) {
    galleryItemsFr[m].querySelector('.gallery-img-fr').addEventListener('click', () => {
        index = m;
        lightbox();
        changeImgFr();
        lightboxContainer.classList.add('js-gallery-fr');
    })
}
for (let n = 0; n < galleryItemsMalle.length; n++) {
    galleryItemsMalle[n].querySelector('.gallery-img-malle').addEventListener('click', () => {
        index = n;
        lightbox();
        changeImgMalle();
        lightboxContainer.classList.add('js-gallery-malle');
    })
}

previousBtn.addEventListener('click', () => {
    if (lightboxContainer.classList.contains('js-gallery-pkp')) {
        if (index === 0) {
            index = galleryItemsPkp.length - 1
        } else {
            index--;
        }
        changeImg();
    }
    if (lightboxContainer.classList.contains('js-gallery-cev')) {
        if (index === 0) {
            index = galleryItemsCev.length - 1
        } else {
            index--;
        }
        changeImgCev();
    }
    if (lightboxContainer.classList.contains('js-gallery-mouffle')) {
        if (index === 0) {
            index = galleryItemsMouffle.length - 1
        } else {
            index--;
        }
        changeImgMouffle();
    }
    if (lightboxContainer.classList.contains('js-gallery-cratt')) {
        if (index === 0) {
            index = galleryItemsCratt.length - 1
        } else {
            index--;
        }
        changeImgCratt();
    }
    if (lightboxContainer.classList.contains('js-gallery-fr')) {
        if (index === 0) {
            index = galleryItemsFr.length - 1
        } else {
            index--;
        }
        changeImgFr();
    }
    if (lightboxContainer.classList.contains('js-gallery-malle')) {
        if (index === 0) {
            index = galleryItemsMalle.length - 1
        } else {
            index--;
        }
        changeImgMalle();
    }
})
nextBtn.addEventListener('click', () => {
    if (lightboxContainer.classList.contains('js-gallery-pkp')) {
        if (index === galleryItemsPkp.length - 1) {
            index = 0;
        } else {
            index++;
        }
        changeImg();
    }
    if (lightboxContainer.classList.contains('js-gallery-cev')) {
        if (index === galleryItemsCev.length - 1) {
            index = 0;
        } else {
            index++;
        }
        changeImgCev();
    }
    if (lightboxContainer.classList.contains('js-gallery-mouffle')) {
        if (index === galleryItemsMouffle.length - 1) {
            index = 0;
        } else {
            index++;
        }
        changeImgMouffle();
    }
    if (lightboxContainer.classList.contains('js-gallery-cratt')) {
        if (index === galleryItemsCratt.length - 1) {
            index = 0;
        } else {
            index++;
        }
        changeImgCratt();
    }
    if (lightboxContainer.classList.contains('js-gallery-fr')) {
        if (index === galleryItemsFr.length - 1) {
            index = 0;
        } else {
            index++;
        }
        changeImgFr();
    }
    if (lightboxContainer.classList.contains('js-gallery-malle')) {
        if (index === galleryItemsMalle.length - 1) {
            index = 0;
        } else {
            index++;
        }
        changeImgMalle();
    }
})

const btnCloseGallery = document.querySelector('.btn-close-gallery')
btnCloseGallery.addEventListener('click', function () {
    lightboxContainer.classList.remove('open', 'js-gallery-pkp', 'js-gallery-cev', 'js-gallery-mouffle', 'js-gallery-cratt', 'js-gallery-fr', 'js-gallery-malle');
})

function lightbox () {
    lightboxContainer.classList.add('open');
}

function changeImg () {
    imgSrc = galleryItemsPkp[index].querySelector('.gallery-img-pkp').getAttribute('src');
    lightboxImage.src = imgSrc;
}
function changeImgCev () {
    imgSrc = galleryItemsCev[index].querySelector('.gallery-img-cev').getAttribute('src');
    lightboxImage.src = imgSrc;
}
function changeImgMouffle () {
    imgSrc = galleryItemsMouffle[index].querySelector('.gallery-img-mouffle').getAttribute('src');
    lightboxImage.src = imgSrc;
}
function changeImgCratt () {
    imgSrc = galleryItemsCratt[index].querySelector('.gallery-img-cratt').getAttribute('src');
    lightboxImage.src = imgSrc;
}
function changeImgFr () {
    imgSrc = galleryItemsFr[index].querySelector('.gallery-img-fr').getAttribute('src');
    lightboxImage.src = imgSrc;
}
function changeImgMalle () {
    imgSrc = galleryItemsMalle[index].querySelector('.gallery-img-malle').getAttribute('src');
    lightboxImage.src = imgSrc;
}

}())
