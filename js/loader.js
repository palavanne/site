const loaderLetters = document.querySelectorAll('.loader-letter')
const loader = document.querySelector('.loader')
let t = 500

for (const loaderLetter of loaderLetters) {
    setTimeout(() => {
        loaderLetter.classList.add('opacity')
    }, t);
    t = t + 100
}
setTimeout(() => {
    loader.classList.add('loader-opacity')
}, 2500);
setTimeout(() => {
    loader.classList.add('hidden')
}, 4000);
