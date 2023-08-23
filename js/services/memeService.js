'use strict'

var gImgs = [
    { id: 1, url: 'meme-imgs/meme-imgs (square)/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/2.jpg', keywords: ['funny', 'cat'] }
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'When you think you\'ve be',
            size: 40,
            color: 'red'
        }
    ]
}

// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }


function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function setImg(elImg) {
    gImg = elImg
}

// function getImgById(bookId) {
//     const book = gBooks.find(book => book.id === bookId)
//     return book
// }

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
    console.log('lineIdx', gMeme.selectedLineIdx)
}