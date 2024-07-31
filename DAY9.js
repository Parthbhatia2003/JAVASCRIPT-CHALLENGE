//ACTIVITY 1
function changeContent() {
    let a = document.getElementById("myParagraph")
    a.textContent = "This is clone content"
}

function changeBackgroundColor() {
    let a = document.getElementsByClassName('colorBox')

    for (let index = 0; index < a.length; index++) {
        a[index].style.backgroundColor = 'lightblue';
    }
}


//ACTIVITY 2
function addDiv() {
    let a = document.createElement("div");

    let b = document.createTextNode("Hello, this is a new div!")

    a.appendChild(b)

    document.body.appendChild(a);
}

function addli() {
    let a = document.createElement("li")
    let b = document.createTextNode("3")
    a.appendChild(b)
    document.getElementsByTagName("ul")[0].appendChild(a);
}

//ACTIVITY 3

let len = document.getElementsByTagName('ul')[0].getElementsByTagName('li').length

document.getElementsByTagName('ul')[0].getElementsByTagName('li')[len - 1].remove()

//ACTIVITY 4

function changeImageSource() {
    let a = document.getElementById('myImage');

    a.setAttribute('src', 'new-image.jpg');
    a.setAttribute('alt', 'New Image')

}

function addClass() {
    // Select the element by its ID
    var element = document.getElementById('myElement');

    // Add the 'highlight' class to the element
    element.classList.add('highlight');
}

function removeClass() {
    // Select the element by its ID
    var element = document.getElementById('myElement');

    // Remove the 'highlight' class from the element
    element.classList.remove('highlight');
}

function toggleClass() {
    // Select the element by its ID
    var element = document.getElementById('myElement');

    // Toggle the 'highlight' class on the element
    element.classList.toggle('highlight');
}


//ACTIVITY 5
let element = document.getElementById('myelement');

function changeBordercolor() {
    element.style.borderColor = 'red'
}
function resetBorderColor() {
    element.style.borderColor = 'black'
}



element.addEventListener('mouseover', changeBordercolor);
element.addEventListener('mouseout', resetBorderColor);