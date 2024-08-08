let text = "Hello World!"
let time = 1

for(i in text) {
    const elm = document.createElement('p')
    if(text[i] != ' ') {
        elm.style.animation = time + 's anim ease-in-out'
    } else {
        elm.style.boxShadow = 'none'
    }
    time += 0.3
    elm.textContent = text[i]
    document.body.appendChild(elm)
}