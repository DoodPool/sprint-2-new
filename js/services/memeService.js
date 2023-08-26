'use strict'

var gImgs = getGImgs()

function getGImgs() {
    gImgs = []
    
    for (let i = 1; i < 19; i++) {
        let gImg = { id: i, url: `meme-imgs/meme-imgs (square)/${i}.jpg`, keywords: ['funny', 'cat'] }
        gImgs.push(gImg)
    }
    return gImgs
}

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'When you think you\'ve be',
            size: 30,
            color: 'white',
            x: 10,
            y: 20,
        }
    ]
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function setImg(elImg) {
    gImg = elImg
}

function setLineTxt(memeLine) {
    gMeme.lines[gMeme.selectedLineIdx].txt = memeLine
}

function setColor(lineColor) {
    gMeme.lines[gMeme.selectedLineIdx].color = lineColor
}

function changeSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff
}

function switchLine() {
    (gMeme.selectedLineIdx === 0) ? gMeme.selectedLineIdx = 1 : gMeme.selectedLineIdx = 0
}
