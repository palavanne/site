const pagePkp = document.querySelector('.pkp')
const pageCev = document.querySelector('.cev')
const pageMouffle = document.querySelector('.mouffle')
const pageMalle = document.querySelector('.malle')
const pageCratt = document.querySelector('.cratt')
const pageFr = document.querySelector('.fr')
const pagePresentation = document.querySelector('.presentation')
const pageContact = document.querySelector('.contact')
const translate = document.querySelector('.menu')
const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const btn4 = document.querySelector('.btn-4')
const btn5 = document.querySelector('.btn-5')
const btn6 = document.querySelector('.btn-6')
const btn7 = document.querySelector('.btn-7')
const btn8 = document.querySelector('.btn-8')
const btn9 = document.querySelector('.btn-9')
const textTop = document.querySelector('.text-top')
const textBottom = document.querySelector('.text-bottom')
const letterTops = document.querySelectorAll('.js-letter-top')
const letterBottoms = document.querySelectorAll('.js-letter-bottom')

const btnMenuResponsivePkp = document.querySelector('.icon-chevron-pkp')
const btnMenuResponsiveCev = document.querySelector('.icon-chevron-cev')
const btnMenuResponsiveMouffle = document.querySelector('.icon-chevron-mouffle')
const btnMenuResponsiveMalle = document.querySelector('.icon-chevron-malle')
const btnMenuResponsiveFr = document.querySelector('.icon-chevron-fr')
const btnMenuResponsiveCratt = document.querySelector('.icon-chevron-cratt')
const btnMenuResponsivePresentation = document.querySelector('.icon-chevron-presentation')
const btnMenuResponsiveContact = document.querySelector('.icon-chevron-contact')
const iconClick = document.querySelector('.icon-click')

const nameRights = document.querySelectorAll('.name-right')
const nameLefts = document.querySelectorAll('.name-left')

const namePresentationContacts = document.querySelectorAll('.little-circle-wrapper')

let screenWidth = window.innerWidth;

if (screenWidth < 760) {
    for (const nameRight of nameRights) {
        nameRight.classList.add('hidden')
    }
    for (const nameLeft of nameLefts) {
        nameLeft.classList.add('hidden')
    }
    for (const namePresentationContact of namePresentationContacts) {
        namePresentationContact.classList.add('hidden')
    }
}

btn1.addEventListener('click', () => {

    if (screenWidth < 760) {
        for (const nameRight of nameRights) {
            if (nameRight.classList.contains('hidden')) {
                setTimeout(() => {
                    nameRight.classList.remove('hidden')
                }, 300);
            } else {
                nameRight.classList.add('hidden')
            }
        }
        for (const nameLeft of nameLefts) {
            if (nameLeft.classList.contains('hidden')) {
                setTimeout(() => {
                    nameLeft.classList.remove('hidden')
                }, 300);
            } else {
                nameLeft.classList.add('hidden')
            }
        }
        for (const namePresentationContact of namePresentationContacts) {
            if (namePresentationContact.classList.contains('hidden')) {
                setTimeout(() => {
                    namePresentationContact.classList.remove('hidden')
                }, 300);
            } else {
                namePresentationContact.classList.add('hidden')
            }
        }
        if (textTop.classList.contains('hidden')) {
            setTimeout(() => {
                textTop.classList.remove('hidden')
            }, 300);
        } else {
            textTop.classList.add('hidden')
        }
        if (textBottom.classList.contains('hidden')) {
            setTimeout(() => {
                textBottom.classList.remove('hidden')
            }, 300);
        } else {
            textBottom.classList.add('hidden')
        }
        setTimeout(() => {
        iconClick.classList.add('hidden')
        }, 5000);
    }
    for (const letterTop of letterTops) {
        if (letterTop.classList.contains('letter-top-disapear')) {
            letterTop.classList.remove('letter-top-disapear')
        } else {
            letterTop.classList.add('letter-top-disapear')
        }
    }
    for (const letterBottom of letterBottoms) {
        if (letterBottom.classList.contains('letter-bottom-disapear')) {
            letterBottom.classList.remove('letter-bottom-disapear')
        } else {
            letterBottom.classList.add('letter-bottom-disapear')
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
    pagePresentation.classList.add('translate-page-left')
        btnMenuResponsivePresentation.classList.remove('hidden')
    if (screenWidth > 760) {
        aminate()
    }
})
btn3.addEventListener('click', () => {
    pagePkp.classList.add('translate-page-left')
        btnMenuResponsivePkp.classList.remove('hidden')
    if (screenWidth > 760) {
        aminate()
    }
})
btn4.addEventListener('click', () => {
    pageCev.classList.add('translate-page-left')
        btnMenuResponsiveCev.classList.remove('hidden')
    if (screenWidth > 760) {
        aminate()
    }
})
btn5.addEventListener('click', () => {
    pageMouffle.classList.add('translate-page-left')
        btnMenuResponsiveMouffle.classList.remove('hidden')
    if (screenWidth > 760) {
        aminate()
    }
})
btn6.addEventListener('click', () => {
    pageContact.classList.add('translate-page-left')
        btnMenuResponsiveContact.classList.remove('hidden')
    if (screenWidth > 760) {
        aminate()
    }
})
btn7.addEventListener('click', () => {
    pageCratt.classList.add('translate-page-left')
        btnMenuResponsiveCratt.classList.remove('hidden')
    if (screenWidth > 760) {
        aminate()
    }
})
btn8.addEventListener('click', () => {
    pageFr.classList.add('translate-page-left')
        btnMenuResponsiveFr.classList.remove('hidden')
    if (screenWidth > 760) {
        aminate()
    }
})
btn9.addEventListener('click', () => {
    pageMalle.classList.add('translate-page-left')
        btnMenuResponsiveMalle.classList.remove('hidden')
    if (screenWidth > 760) {
        aminate()
    }
})

btnMenuResponsivePkp.addEventListener('click', () => {
    btnMenuResponsivePkp.classList.add('hidden')
    pagePkp.classList.remove('translate-page-left')
})
btnMenuResponsiveCev.addEventListener('click', () => {
    btnMenuResponsiveCev.classList.add('hidden')
    pageCev.classList.remove('translate-page-left')
})
btnMenuResponsiveMouffle.addEventListener('click', () => {
    btnMenuResponsiveMouffle.classList.add('hidden')
    pageMouffle.classList.remove('translate-page-left')
})
btnMenuResponsiveMalle.addEventListener('click', () => {
    btnMenuResponsiveMalle.classList.add('hidden')
    pageMalle.classList.remove('translate-page-left')
})
btnMenuResponsiveCratt.addEventListener('click', () => {
    btnMenuResponsiveCratt.classList.add('hidden')
    pageCratt.classList.remove('translate-page-left')
})
btnMenuResponsiveFr.addEventListener('click', () => {
    btnMenuResponsiveFr.classList.add('hidden')
    pageFr.classList.remove('translate-page-left')
})
btnMenuResponsivePresentation.addEventListener('click', () => {
    btnMenuResponsivePresentation.classList.add('hidden')
    pagePresentation.classList.remove('translate-page-left')
})
btnMenuResponsiveContact.addEventListener('click', () => {
    btnMenuResponsiveContact.classList.add('hidden')
    pageContact.classList.remove('translate-page-left')
})
// pageCev.classList.remove('translate-page-left')
// pageMouffle.classList.remove('translate-page-left')
// pageMalle.classList.remove('translate-page-left')
// pageCratt.classList.remove('translate-page-left')
// pageFr.classList.remove('translate-page-left')
// pagePresentation.classList.remove('translate-page-left')
// pageContact.classList.remove('translate-page-left')


function aminate() {
    for (const letterTop of letterTops) {
        if (letterTop.classList.contains('letter-top-disapear')) {
            letterTop.classList.remove('letter-top-disapear')
        } else {
            letterTop.classList.add('letter-top-disapear')
        }
    }
    for (const letterBottom of letterBottoms) {
        if (letterBottom.classList.contains('letter-bottom-disapear')) {
            letterBottom.classList.remove('letter-bottom-disapear')
        } else {
            letterBottom.classList.add('letter-bottom-disapear')
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
