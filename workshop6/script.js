
function getData() {
    const destination = document.getElementById('destination').value;
    const arrival = document.getElementById('arrival').value;
    const services = Array.from(document.querySelectorAll('#services input:checked')).map(checkbox => checkbox.value);
    localStorage.setItem('reservation', JSON.stringify({ destination, arrival, services }));
}

function showData() {
    console.log("showData called");
    const sessionDataDiv = document.getElementById('sessiondata');
    const reservation = JSON.parse(localStorage.getItem('reservation'));
    if (reservation) {
        sessionDataDiv.innerHTML = `<p style="font-size: 18px;">You have a reservation to <b>${reservation.destination}</b> on <b>${reservation.arrival}</b> with services: <b>${reservation.services.join(', ')}</b></p>`;
    } else {
        sessionDataDiv.innerHTML = '<b>No reservation data found.</b>';
    }
}