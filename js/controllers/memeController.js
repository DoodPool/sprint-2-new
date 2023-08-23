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
    if (!gImg) return

    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)

    const meme = getMeme()
    drawText(meme.lines[0].txt, 250, 50, meme, 0)
    
    if (!meme.lines[1]) return
    drawText(meme.lines[1].txt, 250, 450, meme, 1)
}

function drawText(text, x, y, meme, memeId) {

    gCtx.lineWidth = 2
    // gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = meme.lines[memeId].color
    gCtx.font = `${meme.lines[memeId].size}px Arial`
    
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    console.log('gMeme', gMeme)
}

function onSetLineTxt(memeLine) {
    setLineTxt(memeLine)
    renderMeme()
}

function onSetColor(lineColor) {
    setColor(lineColor)
    renderMeme()
}

function onImgSelect(elImg) {
    setImg(elImg)
    renderMeme()
    handleClassEl('hidden', '.editor-container', false)
    handleClassEl('hidden', '.gallery-container', true)
}

function onChangeSize(diff) {
    changeSize(diff)
    renderMeme()
}

function onAddLine() {
    gMeme.lines.push({
        txt: 'And it\'s been 4 hours',
        size: 40,
        color: 'blue'
    })
    switchLine()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    renderMeme()
}