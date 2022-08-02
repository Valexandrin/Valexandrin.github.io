var myPicture = document.querySelector('img');

myPicture.onclick = function() {    
    var myScr = myPicture.getAttribute('src');
    if (myScr === 'images/find_job.png') {
        myPicture.setAttribute('src', 'https://kartinkin.net/uploads/posts/2022-03/1647353981_44-kartinkin-net-p-slonik-kartinki-46.jpg');
     } else {
        myPicture.setAttribute('src', 'images/find_job.png')
     }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Vacancies for ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Vacancies for ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}