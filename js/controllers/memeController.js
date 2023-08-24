'use strict'

let gCanvas
let gCtx
let gImg

const FRAME_WIDTH = 480
const FRAME_HEIGHT = 60

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

    if (gMeme.selectedLineIdx === 1) {
        drawRect(10, 420, 480, 60)
    } else {
        drawRect(10, 20, 480, 60)
    }

    if (!meme.lines[1]) return
    drawText(meme.lines[1].txt, 250, 450, meme, 1)
}

function drawText(text, x, y, meme, memeId) {

    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = meme.lines[memeId].color
    gCtx.font = `${meme.lines[memeId].size}px Arial`

    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
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

function onBack() {
    handleClassEl('hidden', '.editor-container', true)
    handleClassEl('hidden', '.gallery-container', false)
}

function onChangeSize(diff) {
    changeSize(diff)
    renderMeme()
}

function onAddLine() {
    gMeme.lines.push({
        txt: 'And it\'s been 4 hours',
        size: 40,
        color: 'blue',
        x: 10,
        y: 420,

    })
    switchLine()
    renderMeme()
}

function onSwitchLine() {
    if (gMeme.lines.length < 2) return
    switchLine()
    renderMeme()
}

function drawRect(x, y, width, height) {
    gCtx.strokeStyle = 'white'
    gCtx.strokeRect(x, y, width, height)
}

function onMouseMove(ev) {
    const { offsetX, offsetY} = ev

    const clickedStar = gMeme.lines.find(line => {

        return offsetX >= line.x && offsetX <= line.x + FRAME_WIDTH
            && offsetY >= line.y && offsetY <= line.y + FRAME_HEIGHT
    })

    if (!clickedStar) return
    if (offsetY >= 20 && offsetY <= 80 && gMeme.selectedLineIdx === 1) onSwitchLine()
    if (offsetY >= 420 && offsetY <= 480 && gMeme.selectedLineIdx === 0) onSwitchLine()
}

