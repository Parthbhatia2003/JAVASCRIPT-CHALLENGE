//ACTIVITY 1
document.getElementById("myButton").addEventListener("click",function(){
    document.getElementById("myParagraph").textContent="This is a clone text";
})

document.getElementById("myImage").addEventListener("dblclick",function(){
    var image = document.getElementById('myImage');

    if(image.style.display==="none"){
        image.style.display="block"
    }
    else{
         image.style.display="none"
    }
})

//ACTIVITY 2
const element = document.getElementById('myElement');

element.addEventListener('mouseenter', function() {
    element.style.backgroundColor = 'lightblue';
});

element.addEventListener('mouseleave', function() {
    element.style.backgroundColor = 'lightgray';
});
//ACTIVITY 3

document.getElementById("myInput").addEventListener("keydown",function(event){
    console.log(`Key pressed: ${event.key}`);
})

document.getElementById("myInput").addEventListener("keyup",function(){
    var inputValue = document.getElementById('myInput').value;

    document.getElementById("displayParagraph").textContent='Current value: ' + inputValue;
})

//ACTIVITY 4
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object to collect the form data
    var formData = new FormData(event.target);

    // Log the form data to the console
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
});

document.getElementById('mySelect').addEventListener('change', function() {
    var selectedValue = document.getElementById('mySelect').value;
    document.getElementById('displayParagraph').textContent = 'Selected value: ' + selectedValue;
});

//ACTIVITY 5
document.getElementById('myList').addEventListener('click', function(event) {
    // Check if the clicked element is an li
    if (event.target && event.target.nodeName === 'LI') {
        console.log('Clicked item text: ' + event.target.textContent);
    }
});

const parentDiv = document.getElementById('parent');
const logParagraph = document.getElementById('log');

parentDiv.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' && event.target.id !== 'addButton') {
        logParagraph.textContent = 'Clicked button text: ' + event.target.textContent;
    }
});
document.getElementById('addButton').addEventListener('click', function() {
    const newButton = document.createElement('button');
    newButton.textContent = 'New Button ' + (parentDiv.getElementsByTagName('button').length);
    parentDiv.appendChild(newButton);
});
