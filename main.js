var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'scrum1.jpg'){
        myImage.setAttribute('src', 'scrum2.png');
    }
    else {
        myImage.setAttribute('src', 'scrum1.jpg');
    }
}

var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Scrum is cool, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Scrum is cool, ' + storedName;
}

var myButton = document.querySelector('button');

myButton.onclick = function () {
    setUserName();
}
