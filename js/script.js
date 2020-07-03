const modalPkp = document.querySelector('.pkp')
const modalCev = document.querySelector('.cev')
const modalMouffle = document.querySelector('.mouffle')
const modalMalle = document.querySelector('.malle')
const modalCratt = document.querySelector('.cratt')
const modalFr = document.querySelector('.fr')
const modalPresentation = document.querySelector('.presentation')
const modalContact = document.querySelector('.contact')
// const circleColors = document.querySelector('.circle-colors')
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

btn1.addEventListener('click', () => {
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
    // circleColors.classList.add('open')
    btn2.classList.toggle('btn-2-translate')
    btn3.classList.toggle('btn-3-translate')
    btn4.classList.toggle('btn-4-translate')
    btn5.classList.toggle('btn-5-translate')
    btn6.classList.toggle('btn-6-translate')
    btn7.classList.toggle('btn-7-translate')
    btn8.classList.toggle('btn-8-translate')
    btn9.classList.toggle('btn-9-translate')
    // setTimeout(() => {
    //     circleColors.classList.add('hidden')
    // }, 500);
    if (translate.classList.contains('translate-left')) {
        translate.classList.remove('translate-left')
        modalPkp.classList.remove('translate-page-left')
        modalCev.classList.remove('translate-page-left')
        modalMouffle.classList.remove('translate-page-left')
        modalMalle.classList.remove('translate-page-left')
        modalCratt.classList.remove('translate-page-left')
        modalFr.classList.remove('translate-page-left')
        modalPresentation.classList.remove('translate-page-left')
        modalContact.classList.remove('translate-page-left')
    }

})
btn2.addEventListener('click', () => {
    aminate()
    modalPresentation.classList.add('translate-page-left')
})
btn3.addEventListener('click', () => {
    aminate()
    modalPkp.classList.add('translate-page-left')
})
btn4.addEventListener('click', () => {
    aminate()
    modalCev.classList.add('translate-page-left')
})
btn5.addEventListener('click', () => {
    aminate()
    modalMouffle.classList.add('translate-page-left')
})
btn6.addEventListener('click', () => {
    aminate()
    modalContact.classList.add('translate-page-left')
})
btn7.addEventListener('click', () => {
    aminate()
    modalCratt.classList.add('translate-page-left')
})
btn8.addEventListener('click', () => {
    aminate()
    modalFr.classList.add('translate-page-left')
})
btn9.addEventListener('click', () => {
    aminate()
    modalMalle.classList.add('translate-page-left')
})

function aminate () {
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