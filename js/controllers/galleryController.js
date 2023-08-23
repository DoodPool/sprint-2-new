'use strict'

renderGallery()

function renderGallery() {
    const memes = getImgs()
    const strHTMLs = memes.map(meme =>
        `<li>
        <img onclick="onImgSelect(this)" src="${meme.url}">
        </li>`)

    const elGallery = document.querySelector('.gallery-imgs')
    elGallery.innerHTML = strHTMLs.join('')
}
