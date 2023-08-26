'use strict'

function handleClassEl(className, selector, isAdd) {
    isAdd
        ? document.querySelector(selector).classList.add(className)
        : document.querySelector(selector).classList.remove(className)
}

function onDownloadCanvas(elLink) {
    const dataUrl = gCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-img'
  }
  