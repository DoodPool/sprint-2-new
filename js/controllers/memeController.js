'use strict'

let gCanvas
let gCtx
let gImg

function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')

    renderMeme()
}

function renderMeme() {
    if(!gImg) return
    const meme = getMeme()

    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
    drawText(meme.lines[0].txt, 270, 50, meme)
}

// function onSelectImg(elImg) {
//     gImg = elImg
//     console.log(elImg)
//     renderMeme()
// }

function drawText(text, x, y, meme) {
    gCtx.lineWidth = 2
    // gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = meme.lines[0].color
    gCtx.font = `${meme.lines[0].size}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onSetLineTxt(memeLine) {
    setLineTxt(memeLine)
    renderMeme()
}

function onImgSelect(elImg) {
    setImg(elImg)
    renderMeme()
    handleClassEl('hidden', '.editor-container', false)
    handleClassEl('hidden', '.gallery-container', true)
}
