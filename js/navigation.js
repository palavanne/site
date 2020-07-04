const pagePkp = document.querySelector('.pkp')
const pageCev = document.querySelector('.cev')
const pageMouffle = document.querySelector('.mouffle')
const pageMalle = document.querySelector('.malle')
const pageCratt = document.querySelector('.cratt')
const pageFr = document.querySelector('.fr')
const pagePresentation = document.querySelector('.presentation')
const pageContact = document.querySelector('.contact')
const wrapper = document.querySelector('.wrapper')
const translate = document.querySelector('.translate')
const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const btn4 = document.querySelector('.btn-4')
const btn5 = document.querySelector('.btn-5')
const btn6 = document.querySelector('.btn-6')
const btn7 = document.querySelector('.btn-7')
const btn8 = document.querySelector('.btn-8')
const btn9 = document.querySelector('.btn-9')
const textTops = document.querySelectorAll('.js-text-top')
const textBottoms = document.querySelectorAll('.js-text-bottom')

const nameRights = document.querySelectorAll('.name-right')
const nameLefts = document.querySelectorAll('.name-left')

const namePresentationContacts = document.querySelectorAll('.little-circle-wrapper')
for (const namePresentationContact of namePresentationContacts) {
    namePresentationContact.classList.add('hidden')
}

let tailleEcranX = window.innerWidth;
for (const nameRight of nameRights) {
    if (tailleEcranX < 760) {
        nameRight.classList.add('hidden')
    }
}
for (const nameLeft of nameLefts) {
    if (tailleEcranX < 760) {
        nameLeft.classList.add('hidden')
    }
}

btn1.addEventListener('click', () => {
    for (const nameRight of nameRights) {
        if (tailleEcranX < 760) {
            setTimeout(() => {
                nameRight.classList.remove('hidden')
                namePresentationContact.classList.remove('hidden')
            }, 300);
        }
    }
    for (const nameLeft of nameLefts) {
        if (tailleEcranX < 760) {
            setTimeout(() => {
                nameLeft.classList.remove('hidden')
                namePresentationContact.classList.remove('hidden')
            }, 300);
        }
    }
    for (const namePresentationContact of namePresentationContacts) {
        setTimeout(() => {
            namePresentationContact.classList.remove('hidden')
        }, 300);
    }
    for (const textTop of textTops) {
        if (textTop.classList.contains('text-top-disapear')) {
            textTop.classList.remove('text-top-disapear')
        } else {
            textTop.classList.add('text-top-disapear')
        }
    }
    for (const textBottom of textBottoms) {
        if (textBottom.classList.contains('text-bottom-disapear')) {
            textBottom.classList.remove('text-bottom-disapear')
        } else {
            textBottom.classList.add('text-bottom-disapear')
        }
    }
    btn1.classList.toggle('btn-1-translate')
    btn2.classList.toggle('btn-2-translate')
    btn3.classList.toggle('btn-3-translate')
    btn4.classList.toggle('btn-4-translate')
    btn5.classList.toggle('btn-5-translate')
    btn6.classList.toggle('btn-6-translate')
    btn7.classList.toggle('btn-7-translate')
    btn8.classList.toggle('btn-8-translate')
    btn9.classList.toggle('btn-9-translate')

    if (translate.classList.contains('translate-left')) {
        translate.classList.remove('translate-left')
        pagePkp.classList.remove('translate-page-left')
        pageCev.classList.remove('translate-page-left')
        pageMouffle.classList.remove('translate-page-left')
        pageMalle.classList.remove('translate-page-left')
        pageCratt.classList.remove('translate-page-left')
        pageFr.classList.remove('translate-page-left')
        pagePresentation.classList.remove('translate-page-left')
        pageContact.classList.remove('translate-page-left')
    }

})
btn2.addEventListener('click', () => {
    aminate()
    pagePresentation.classList.add('translate-page-left')
})
btn3.addEventListener('click', () => {
    aminate()
    pagePkp.classList.add('translate-page-left')
})
btn4.addEventListener('click', () => {
    aminate()
    pageCev.classList.add('translate-page-left')
})
btn5.addEventListener('click', () => {
    aminate()
    pageMouffle.classList.add('translate-page-left')
})
btn6.addEventListener('click', () => {
    aminate()
    pageContact.classList.add('translate-page-left')
})
btn7.addEventListener('click', () => {
    aminate()
    pageCratt.classList.add('translate-page-left')
})
btn8.addEventListener('click', () => {
    aminate()
    pageFr.classList.add('translate-page-left')
})
btn9.addEventListener('click', () => {
    aminate()
    pageMalle.classList.add('translate-page-left')
})

function aminate() {
    for (const textTop of textTops) {
        if (textTop.classList.contains('text-top-disapear')) {
            textTop.classList.remove('text-top-disapear')
        } else {
            textTop.classList.add('text-top-disapear')
        }
    }
    for (const textBottom of textBottoms) {
        if (textBottom.classList.contains('text-bottom-disapear')) {
            textBottom.classList.remove('text-bottom-disapear')
        } else {
            textBottom.classList.add('text-bottom-disapear')
        }
    }
    translate.classList.add('translate-left')
    btn2.classList.remove('btn-2-translate')
    btn3.classList.remove('btn-3-translate')
    btn4.classList.remove('btn-4-translate')
    btn5.classList.remove('btn-5-translate')
    btn6.classList.remove('btn-6-translate')
    btn7.classList.remove('btn-7-translate')
    btn8.classList.remove('btn-8-translate')
    btn9.classList.remove('btn-9-translate')
}

const linkFabriks = document.querySelectorAll('.js-link-fabrik')
for (const linkFabrik of linkFabriks) {
    linkFabrik.addEventListener('click', () => {
        pagePkp.classList.remove('translate-page-left')
        pageMalle.classList.remove('translate-page-left')
        pageFr.classList.add('translate-page-left')
    })
}
const linkPkp = document.querySelector('.js-link-pkp')
linkPkp.addEventListener('click', () => {
    pageFr.classList.remove('translate-page-left')
    pagePkp.classList.add('translate-page-left')
})
const linkMalle = document.querySelector('.js-link-malle')
linkMalle.addEventListener('click', () => {
    pageFr.classList.remove('translate-page-left')
    pageMalle.classList.add('translate-page-left')
})
