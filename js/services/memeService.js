'use strict'

var gImgs = [
    { id: 1, url: 'meme-imgs/meme-imgs (square)/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'meme-imgs/meme-imgs (square)/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'meme-imgs/meme-imgs (square)/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'meme-imgs/meme-imgs (square)/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'meme-imgs/meme-imgs (square)/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'meme-imgs/meme-imgs (square)/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'meme-imgs/meme-imgs (square)/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'meme-imgs/meme-imgs (square)/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'meme-imgs/meme-imgs (square)/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'meme-imgs/meme-imgs (square)/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'meme-imgs/meme-imgs (square)/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'meme-imgs/meme-imgs (square)/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'meme-imgs/meme-imgs (square)/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'meme-imgs/meme-imgs (square)/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'meme-imgs/meme-imgs (square)/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'meme-imgs/meme-imgs (square)/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17, url: 'meme-imgs/meme-imgs (square)/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'meme-imgs/meme-imgs (square)/18.jpg', keywords: ['funny', 'cat'] },
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'When you think you\'ve be',
            size: 40,
            color: 'red',
            x: 10,
            y: 20,
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

/////////////////////////////

// var canvas = document.getElementById('c')
// var context = canvas.getContext('2d')
// context.font = '11px arial';

// var txt = 'this is a very long text. Some more to print!'

// printAtWordWrap(context, txt, 10, 20, 15, 90)

// function printAtWordWrap(context, text, x, y, lineHeight, fitWidth) {
//     fitWidth = fitWidth || 0;

//     if (fitWidth <= 0) {
//         context.fillText(text, x, y)
//         return;
//     }

//     let words = text.split(' ')
//     let currentLine = 0
//     let idx = 1

//     while (words.length > 0 && idx <= words.length) {
//         const str = words.slice(0, idx).join(' ')
//         const w = context.measureText(str).width

//         if (w > fitWidth) {
//             if (idx == 1) {
//                 idx = 2
//             }
//             context.fillText(words.slice(0, idx - 1).join(' '), x, y + (lineHeight * currentLine))
//             currentLine++
//             words = words.slice(idx - 1)
//             idx = 1
//         } else {
//             idx++
//         }
//     }

//     if (idx > 0) {
//         context.fillText(words.join(' '), x, y + (lineHeight * currentLine))
//     }
// }

