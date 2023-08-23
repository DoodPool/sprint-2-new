'use strict'

function handleClassEl(className, selector, isAdd) {
    isAdd
        ? document.querySelector(selector).classList.add(className)
        : document.querySelector(selector).classList.remove(className)
}

function removeClass(className, selector) {
    document.querySelector(selector).classList.remove(className)
}

function addClass(className, selector) {
    document.querySelector(selector).classList.add(className)
}

function setElText(selector, txt) {
    const el = document.querySelector(selector)
    el.innerText = txt
}

function setElHtml(selector, html) {
    const el = document.querySelector(selector)
    el.innerHTML = html
}

function navigateToPage(page) {
    window.location = `${page}.html`
}

function onDownloadCanvas(elLink) {
    const dataUrl = gCanvas.toDataURL()
    elLink.href = dataUrl
    elLink.download = 'my-img'
  }
  