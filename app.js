
let elements = document.getElementsByClassName('paragraphe')

for(let i = 0; i < elements.length; i++) {
    if(i === elements.length -1) {
        break;
    }
    let element = elements[i];
    element.innerHTML = "Position paragraphe " +i;
}
