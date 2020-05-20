const buttonOpen = document.querySelector('.button')
buttonOpen.addEventListener('click', function () {
    const modalOpen = document.querySelector('.modal')
    modalOpen.classList.remove('hidden')
    document.querySelector('.youtube-video').contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
})

const btnClose = document.querySelector('.btn-close')
btnClose.addEventListener('click', function () {
    const modal = document.querySelector('.modal')
    modal.classList.add('hidden')
    document.querySelector('.youtube-video').contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
})
