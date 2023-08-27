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
            txt: 'Enter text here',
            size: 30,
            align: 'center',
            color: 'white',
            x: 10,
            y: 20,
            height: 0,
            width: 0,

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
    setLineDimensions(gMeme.lines[gMeme.selectedLineIdx].txt, gMeme.selectedLineIdx)
}

function changeSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff
}

function switchLine() {
    (gMeme.selectedLineIdx === 0) ? gMeme.selectedLineIdx = 1 : gMeme.selectedLineIdx = 0
}

function addLine(txt = 'Enter text here') {
    let line = {
        txt,
        size: 30,
        align: 'center',
        color: 'white',
        x: 10,
        y: gCanvas.height - 80,
        height: 0,
        width: 0,
    }
    gMeme.lines.push(line)
    // console.log(gMeme)
    // setLineDimensions(line.txt, 1)
}

// function setLineDimensions(text, lineIdx) {
//     let measure = gCtx.measureText(text)
//     gMeme.lines[lineIdx].height = measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent
//     gMeme.lines[lineIdx].width = measure.actualBoundingBoxLeft + measure.actualBoundingBoxRight


//     console.log(gMeme.lines[lineIdx].height)
//     console.log(gMeme.lines[lineIdx].width)
// }

//////////

// setLineDimensions('hi', gMeme.selectedLineIdx)


// function setLineDimensions(text, lineIdx) {
//     let measure = gCtx.measureText(text)
//     gMeme.lines[lineIdx].height = measure.actualBoundingBoxAscent
//     gMeme.lines[lineIdx].width = measure.width

//     console.log(gMeme.lines[lineIdx].height)
//     console.log(gMeme.lines[lineIdx].width)
// }


// function renderAllLines() {
//     gMeme.lines.forEach((line, lineIdx) => {
//         let txt = line.txt
//         drawText(txt, line.pos.x, line.pos.y, lineIdx)
//         setLineDimensions(txt, lineIdx)
//     })
// }

// function drawText(text, x, y, lineIdx) {
//     gCtx.lineWidth = 1
//     gCtx.strokeStyle = gMeme.lines[lineIdx].stroke
//     gCtx.fillStyle = gMeme.lines[lineIdx].color
//     gCtx.font = `${gMeme.lines[lineIdx].size}px ${gMeme.lines[lineIdx].font}`
//     gCtx.textAlign = gMeme.lines[lineIdx].align
//     gCtx.textBaseline = 'middle'

//     gCtx.fillText(text, x, y)
//     gCtx.strokeText(text, x, y)
//     gMeme.lines[lineIdx].pos = { x, y }
// }





// function onAddLine(value) {
//     addLine(value)
//     const center = { x: gCanvas.width / 2, y: gCanvas.height / 2 }
//     let newLineIdx = gMeme.lines.length - 1
//     let newTxt = gMeme.lines[newLineIdx].txt

//     drawText(newTxt, center.x, center.y, newLineIdx)
//     renderMeme()
// }

