function changeHeading() {
    const heading = document.querySelector('h1');
    heading.textContent = 'Modified Heading';
}

const secondButton = document.getElementById('secondButton');

secondButton.addEventListener('click', () => {
    const heading = document.getElementById('ex2');
    heading.style.color = 'red';
    heading.style.backgroundColor = 'black';
    heading.style.fontSize = '3em';
});


fourthP = document.querySelector('p:nth-of-type(4)');

const thirdButton = document.querySelector('button:nth-of-type(3)');

const loremText = document.getElementById('lorem');

thirdButton.addEventListener('click', () => {
    fourthP.insertAdjacentHTML('afterend', `<br>${loremText.innerHTML}`);
});

function hide() {

    const me = document.getElementById('me');
    me.style.display = 'none';
}

function show() {

    const me = document.getElementById('me');
    me.style.display = 'block';
}

function surprise() {
    const surprises = document.getElementsByClassName('surprise');
    for (let i = 0; i < surprises.length; i++) {
        surprises[i].style.fontSize = '20px';
        surprises[i].style.color = 'red';
    }
};

function updateImg() {
    const carImage = document.getElementById('carimage');
    const select = document.getElementById('mySelect');
    const selectedCar = select.value;

    let imageUrl = '';
    if (selectedCar === 'BMW') {
        imageUrl = 'BMW.png';
        
    } else if (selectedCar === 'Audi') {
        imageUrl = 'Audi.png';
        
    } else if (selectedCar === 'Mercedes') {
        imageUrl = 'Mercedes.png';
        
    } else if (selectedCar === 'Volvo') {
        imageUrl = 'Volvo.png';
       
    }

    carImage.src = imageUrl;

}

function changePosition() {
    const car = document.getElementById('carimage');
    car.style.transform = 'translate(-200px, 500px)';
    
}

let direction = 1;
let pos = 0;

function doMove() {

    const car = document.getElementById('carimage');
    const maxWidth = window.innerWidth;

    
    pos += 100 * direction;

    if (pos <= 0 || pos >= maxWidth) {
        direction *= -1; // Change direction
    }

    car.style.left = pos + 'px';
    document.getElementById('animationButton').disabled = true;
    
}

let opacity = 1.0;

function fadeOut() {
    const car = document.getElementById('carimage');
    opacity -= 0.05;
    car.style.opacity = opacity;
    document.getElementById('fadeButton').disabled = true;

    
}

function remove() {
    const car = document.getElementById('carimage');
    car.remove();
}

function insertRows() {

    const table = document.getElementById('data');

    const value1 = document.getElementById('textfield').value;
    const value2 = document.getElementById('textfield2').value;
    const value3 = document.getElementById('textfield3').value;


    const newRow = table.insertRow(-1);

    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = value1;
    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = value2;
    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = value3;


}