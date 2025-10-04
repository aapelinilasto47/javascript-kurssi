const questions = [
    {
        question: "Mikä on JavaScriptin pääasiallinen käyttötarkoitus?",
        options: [
            "Verkkosivujen interaktiivisuuden lisääminen",
            "Tietokantojen hallinta",
            "Kuvankäsittely",
            "Pelien kehittäminen"
        ],
        answer: 0
    },
    {
        question: "Mikä on HTML:n rooli verkkosivujen rakentamisessa?",
        options: [
            "Tyylin määrittäminen",
            "Sisällön strukturointi",
            "Käyttäjän vuorovaikutuksen hallinta",
            "Tietokannan hallinta"
        ],
        answer: 1
    },
    {
        question: "Mikä seuraavista on JavaScriptin ominaisuus?",
        options: [
            "Staattinen tyypitys",
            "Objekti-orientoitunut ohjelmointi",
            "Monimutkainen syntaksi",
            "Ei tueta tapahtumankäsittelyä"
        ],
        answer: 1
    },

    {
        question: "Mikä on CSS:n pääasiallinen tehtävä?",
        options: [
            "Sivuston rakenteen määrittäminen",
            "Sivuston ulkoasun määrittäminen",
            "Sivuston toiminnallisuuden määrittäminen",
            "Sivuston tietokannan hallinta"
        ],
        answer: 1
    },

    {
        question: "Mikä seuraavista on JavaScriptin tietotyyppi?",
        options: [
            "String",
            "Number",
            "Boolean",
            "Object"
        ],
        answer: 0
    }
];



const form = document.getElementById('trivia-form');

const questionContainer = document.getElementById('question-container');

const questionElement = document.getElementById('question');

function loadQuestion() {
    const currentQuestion = questions[0];
    questionElement.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.options.map((option, index) => `
                <li>
                    <input type="radio" name="answer" value="${index}" id="option${index}">
                    <label for="option${index}">${option}</label>
                </li>
            `).join('')}
        </ul>
    `;
}


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

        questionContainer.style.display = 'block'; // Näytä kysymysalue
        loadQuestion(); // Lataa ensimmäinen kysymys
    }
});

