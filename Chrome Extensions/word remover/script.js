replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText) // check until reaches the last child
    }
    else if (element.nodeType === Text.TEXT_NODE) {  // if that child is text node with having text .....
        if (element.textContent.match(/balls/gi)) {
            element.parentElement.remove()
        }
    }
}