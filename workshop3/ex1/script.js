const body = document.body;

body.style.backgroundColor = 'white';
body.style.color = 'black';
body.style.fontFamily = 'Arial, sans-serif';
body.style.textAlign = 'center';
body.style.padding = '50px';
body.style.lineHeight = '1.6';
body.style.height = '100vh';

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');

button1.addEventListener('click', () => {
    
    body.style.backgroundColor = 'lightgreen';
    body.style.color = 'darkgreen';

    
    const date = new Date();
    alert(`You clicked me! Current Date and Time: ${date}`);
});

button2.addEventListener('click', () => {
    body.style.backgroundColor = 'lightcoral';
    body.style.color = 'darkred';

    function showTable() {
        const output = document.getElementById('output');
        output.innerHTML += '<h2>Employee Table</h2><table border="1" style="margin: 0 auto; border-collapse: collapse;"><tr><th>Name</th><th>Position</th><th>Salary</th></tr><tr><td>John Doe</td><td>Software Engineer</td><td>$100,000</td></tr><tr><td>Jane Smith</td><td>Product Manager</td><td>$120,000</td></tr><tr><td>Mike Smith</td><td>UX Designer</td><td>$110,000</td></tr></table>';
    }

    if (!document.getElementById('output').innerHTML.includes('Employee Table'))
        showTable();
});


button3.addEventListener('click', () => {
    body.style.backgroundColor = 'lightblue';
    body.style.color = 'darkblue';

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
        }, (error) => {
            alert('Error retrieving location: ' + error.message);
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }


});
