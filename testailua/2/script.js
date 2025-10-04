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

function displayQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options-container');
    const nextButton = document.getElementById('next-button');

    // Otetaan ensimmäinen kysymys taulukosta
    const current = questions[0];

    // Näytetään kysymys
    questionEl.textContent = current.question;

    // Tyhjennetään mahdolliset vanhat napit
    optionsEl.innerHTML = '';

    
    // Luodaan vastausvaihtoehdot nappeina
    current.options.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.addEventListener('click', () => {
            if (i === current.answer) {
                alert('Oikein!');
            } else {
                alert('Väärin!');
            }
        });
        optionsEl.appendChild(btn);
    });

    // Näytetään "Seuraava kysymys" -nappi (voit laajentaa tätä myöhemmin)
    nextButton.style.display = 'block';
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

        // Näytä kysymys ja vastausvaihtoehdot
        questionContainer.style.display = 'block';
        displayQuestion();
    }
});

