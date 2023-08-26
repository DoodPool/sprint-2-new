'use strict'

let gCanvas
let gCtx
let gImg

let gFrameWidth
const FRAME_HEIGHT = 60

function onInit() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')

    gFrameWidth = gCanvas.width - 20

    renderMeme()
}

function renderMeme() {
    if (!gImg) return

    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)

    const meme = getMeme()

    drawText(meme.lines[0].txt, gFrameWidth / 2, 50, meme, 0)

    if (meme.selectedLineIdx === 1) {
        drawRect(10, gCanvas.height - 80, gFrameWidth, FRAME_HEIGHT)
    } else {
        drawRect(10, 20, gFrameWidth, FRAME_HEIGHT)
    }

    if (!meme.lines[1]) return
    const text = meme.lines[1].txt
    const x = gFrameWidth / 2
    const y = gCanvas.height - 50

    console.log(text)
    console.log(x)
    console.log(y)

    drawText(text, x, y, meme, 1)
}

function drawText(text, x, y, meme, memeId) {

    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = meme.lines[memeId].color
    gCtx.font = `${meme.lines[memeId].size}px Impact`

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
    handleClassEl('hidden', '.editor-container', false)
    handleClassEl('flex', '.editor-container', true)
    handleClassEl('hidden', '.gallery-container', true)
    handleClassEl('inPage', '.gallery-btn', false)
    renderMeme()
}

function onGallery() {
    handleClassEl('hidden', '.editor-container', true)
    handleClassEl('flex', '.editor-container', false)
    handleClassEl('hidden', '.gallery-container', false)
    handleClassEl('inPage', '.gallery-btn', true)
}

function onOpenMenu() {
    handleClassEl('menu-open', '.main-nav', true)
    handleClassEl('hidden', '.menu-btn', true)
    handleClassEl('show', '.menu-btn', false)
    handleClassEl('show', '.close-btn', true)
}

function onCloseMenu() {
    handleClassEl('menu-open', '.main-nav', false)
    handleClassEl('show', '.menu-btn', true)
}

function onChangeSize(diff) {
    changeSize(diff)
    renderMeme()
}

function onAddLine() {
    gMeme.lines.push({
        txt: 'And it\'s been 4 hours',
        size: 30,
        color: 'white',
        x: 10,
        y: gCanvas.height - 80,

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
    const { offsetX, offsetY } = ev

    const clickedStar = gMeme.lines.find(line => {
        return offsetX >= line.x && offsetX <= line.x + gFrameWidth
            && offsetY >= line.y && offsetY <= line.y + FRAME_HEIGHT
    })

    if (!clickedStar) return
    if (offsetY >= 20 && offsetY <= 80 && gMeme.selectedLineIdx === 1) onSwitchLine()
    if (offsetY >= gCanvas.height - 80 && offsetY <= gCanvas.height - 20 && gMeme.selectedLineIdx === 0) onSwitchLine()
}

