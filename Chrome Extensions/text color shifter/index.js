colorText(document.body)

function colorText(element){
    if (element.hasChildNodes()) {
        element.childNodes.forEach(colorText)
    }
    else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/balls/gi)) {
            const newElement = document.createElement("span")
            newElement.innerHTML = element.textContent.replace(/(balls)/gi, '<span class = "rainbow">$<span>')
            element.replaceWith(newElement)
        }
    }
}