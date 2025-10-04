const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        // Näytä virheilmoitus käyttäjälle
        form.reportValidity();

    }
    else {
        // Lomake on voimassa, voit käsitellä sen täällä
        alert('Lomake lähetetty onnistuneesti!');
    }
});