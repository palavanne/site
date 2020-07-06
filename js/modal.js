const teaser = document.querySelector('.teaser-img')
teaser.addEventListener('click', function () {
    const modalOpen = document.querySelector('.modal')
    modalOpen.classList.remove('hidden')

    const teaserDiv = document.querySelector('#teaser')
    const videoSrc = document.createElement('iframe')
    videoSrc.classList.add('player', 'youtube-video')
    videoSrc.src = 'https://www.youtube.com/embed/29pGVEAHnzs?enablejsapi=1&version=3&playerapiid=ytplayer'
    videoSrc.setAttribute('frameborder', 0)
    videoSrc.setAttribute('allowfullscreen', true)
    teaserDiv.appendChild(videoSrc)
    setTimeout(() => {
        document.querySelector('.youtube-video').contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    }, 1000);
})

const btnClose = document.querySelector('.btn-close')
btnClose.addEventListener('click', function () {
    const iframe = document.querySelector('.player')
    const modal = document.querySelector('.modal')
    modal.classList.add('hidden')
    iframe.remove()
})
