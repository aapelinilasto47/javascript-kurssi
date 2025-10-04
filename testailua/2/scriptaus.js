const form = document.getElementById('trivia-form');

let formClear = false;

// Lomakkeen lähetyksen käsittelijä

form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        // Näytä virheilmoitus käyttäjälle
        form.reportValidity();

    }
    else {
        // Lomake on voimassa, voit käsitellä sen täällä
        alert('Lomake lähetetty onnistuneesti!');
        event.preventDefault(); // Estä lomakkeen oletuslähetys
        form.style.display = 'none'; // Piilota lomake

        const questionContainer = document.getElementById('question-container');
        questionContainer.style.display = 'block'; // Näytä kysymysalue
        questionContainer.appendChild(document.createElement('p')).textContent = "testaus";
    }
});