const teaser = document.querySelector('.teaser-img')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.btn-close')

teaser.addEventListener('click', function () {
    modal.classList.remove('hidden')

    const teaser = document.querySelector('#teaser')
    const videoSrc = document.createElement('iframe')
    videoSrc.classList.add('player', 'youtube-video')
    videoSrc.src = 'https://www.youtube.com/embed/29pGVEAHnzs?enablejsapi=1&version=3&playerapiid=ytplayer'
    videoSrc.setAttribute('frameborder', 0)
    videoSrc.setAttribute('allowfullscreen', true)
    teaser.appendChild(videoSrc)
    setTimeout(() => {
        document.querySelector('.youtube-video').contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    }, 1000);
})

btnClose.addEventListener('click', function () {
    const iframe = document.querySelector('.player')
    modal.classList.add('hidden')
    iframe.remove()
})
