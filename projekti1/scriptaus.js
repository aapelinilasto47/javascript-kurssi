// haetaan ja luodaan pari muuttujaa
const form1 = document.getElementById('trivia-form');
const gameTitle = document.getElementById('game-title');
let formClear = false;



// Kysymykset ja vastaukset

const questions = [
    {
        question: 'Mikä on maailman suurin valtameri?',
        answers: [
            'Atlantin valtameri',
            'Tyynimeri',
            'Intian valtameri',
            'Jäämeri'
        ],
        correct: 1
    },

    {
        question: 'Kuka kirjoitti romaanin "Sota ja rauha"?',
        answers: [
            'Leo Tolstoi',
            'Fyodor Dostojevski',
            'Anton Tšehov',
            'Vladimir Nabokov'
        ],
        correct: 0
    },

    {
        question: 'Mikä on Euroopan pisin joki?',
        answers: [
            'Tonavan joki',
            'Reinin joki',
            'Volgan joki',
            'Seine-joki'
        ],
        correct: 2
    },

    {
        question: 'Kuka maalasi kuuluisan teoksen "Mona Lisa"?',
        answers: [
            'Leonardo da Vinci',
            'Pablo Picasso',
            'Vincent van Gogh',
            'Claude Monet'
        ],
        correct: 0
    },

    {
        question: 'Mikä on kemiallinen merkki vedylle?',
        answers: [
            'H',
            'He',
            'Li',
            'Be'
        ],
        correct: 0
    },


    {
        question: 'Kuka on säveltänyt sinfonian nro 9, joka tunnetaan myös nimellä "Oodi ilolle"?',
        answers: [
            'Wolfgang Amadeus Mozart',
            'Ludwig van Beethoven',
            'Johannes Brahms',
            'Richard Wagner'
        ],
        correct: 1
    }

];

// Lomakkeen lähetyksen käsittelijä

form1.addEventListener('submit', function(event) {
    event.preventDefault(); // Estä lomakkeen oletuslähetys
    if (!form1.checkValidity()) {
        // Näytä virheilmoitus käyttäjälle
        form1.reportValidity();

    }
    else {
        // Lomake on voimassa, voit käsitellä sen täällä
        alert('Lomake lähetetty onnistuneesti!');
        // Tallenna käyttäjän tiedot paikalliseen tallennustilaan
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        
        
        form1.style.display = 'none'; // Piilota lomake
        gameTitle.style.display = 'none'; // Piilota otsikko

        formClear = true; // Merkitse, että lomake on käsitelty

        // Funktio, joka luo ja näyttää kysymykset

        runQuestions();
    }

});

// Määrittele funktio runQuestions
function runQuestions(){
    const questionContainer = document.getElementById('question-container');
    questionContainer.style.display = 'block'; // Näytä kysymysalue

    // Muuttujat pelin tilan seuraamiseksi
    let currentQuestionIndex = 0;
    let score = 0;
    // Funktio, joka näyttää nykyisen kysymyksen ja vastausvaihtoehdot
    function showQuestion() {
        //haetaan kysymysdata
        const questionData = questions[currentQuestionIndex];
        const questionTitle = document.getElementById('question-title');
        const answerSelect = document.getElementById('answer-select');

        // Aseta kysymys ja vastausvaihtoehdot
        questionTitle.textContent = questionData.question;
        answerSelect.innerHTML = '<option value="" disabled selected>Valitse vastaus</option>'; // Tyhjennä aiemmat vaihtoehdot

        // Lisää vastausvaihtoehdot
        questionData.answers.forEach((answer, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = answer;
            answerSelect.appendChild(option);
        });
    }
    // Näytä ensimmäinen kysymys
    showQuestion();
    // Lisää tapahtumankuuntelija vastauspainikkeelle
    const submitAnswerButton = document.getElementById('submit-answer');
    submitAnswerButton.addEventListener('click', function() {
        // Hae valittu vastaus ja muunna se numeroksi
        const answerSelect = document.getElementById('answer-select');
        const selectedAnswer = parseInt(answerSelect.value);
        submitAnswerButton.disabled = true; // Estä useat klikkaukset
        
        // Tarkista, onko vastaus oikein
        if (selectedAnswer === questions[currentQuestionIndex].correct) {
            score++;
            // Päivitä pistemäärä näytölle
            const scoreDisplay = document.getElementById('score-display');
            scoreDisplay.textContent = `Pisteet: ${score}`;
            feedbackText = document.getElementById('feedback-container');
            feedbackText.textContent = 'Oikein!'; // Ilmoita oikeasta vastauksesta
            feedbackText.style.color = 'green';
            setTimeout(() => {
                feedbackText.innerHTML = '<br>'; // Tyhjennä palaute
                submitAnswerButton.disabled = false; // Salli vastaaminen uudelleen
            }, 2000); // Poista palaute 2 sekunnin kuluttua
        }
        else {
            feedbackText = document.getElementById('feedback-container');
            feedbackText.textContent = `Väärin!`; // Ilmoita väärästä vastauksesta
            feedbackText.style.color = 'red';
            
            setTimeout(() => {
                feedbackText.innerHTML = '<br>'; // Tyhjennä palaute
                submitAnswerButton.disabled = false; // Salli vastaaminen uudelleen
            }, 2000); // Poista palaute 2 sekunnin kuluttua
        }
        // Siirry seuraavaan kysymykseen
        currentQuestionIndex++;
        // Näytä seuraava kysymys tai lopeta peli
        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                showQuestion();
            }, 1000); // Pieni viive ennen seuraavaa kysymystä
        } else {

            setTimeout(() => {
                showResults();
            }, 1000); // Pieni viive ennen tulosten näyttämistä
        }
    });
    // Funktio, joka näyttää pelin tulokset
    function showResults() {
        const questionContainer = document.getElementById('question-container');
        questionContainer.style.display = 'none'; // Piilota kysymysalue

        // Näytä tulokset ja anna mahdollisuus aloittaa alusta
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.style.display = 'block';
        resultsContainer.innerHTML = `<br><h2>Pelitulokset</h2><p>Oikein vastatut kysymykset: ${score} / ${questions.length}</p>`;
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Aloita alusta';
        resultsContainer.appendChild(restartButton);
        resultsContainer.style.marginBottom = '20px';

        // Lisää tapahtumankuuntelija uudelleenkäynnistyspainikkeelle

        restartButton.addEventListener('click', function() {
            location.reload(); // Lataa sivu uudelleen
        });

        

        // Haetaan käyttäjän tiedot paikallisesta tallennustilasta

        name1 = localStorage.getItem('name');
        email1 = localStorage.getItem('email');
        

        localStorage.removeItem('name');
        localStorage.removeItem('email');
        

        // jos nimeä ei ole listassa, lisätään se, tai jos pisteet ovat paremmat, päivitetään ne
        leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || {};
        
        if (!(name1 in leaderboard) || (leaderboard[name1].score < score)) {
            leaderboard[name1] = {
                email: email1,
                score: score
            };
        }

        
        // Järjestä tulokset ja pidä vain top 5

        leaderboard = Object.fromEntries(
            Object.entries(leaderboard).sort(([, a], [, b]) => b.score - a.score).slice(0, 5)
        );

        // Tallenna päivitetyt tulokset takaisin paikalliseen tallennustilaan
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

        // Näytä tulokset

        const leaderboardContainer = document.getElementById('leaderboard-container');
        leaderboardContainer.style.display = 'block'; // Näytä tulosalue

        const leaderboardList = document.getElementById('leaderboard-list');
        leaderboardList.innerHTML = ''; // Tyhjennä aiemmat tulokset

        // Lisää tulokset listaan
        Object.entries(leaderboard).forEach(([name, data]) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${name} - ${data.score}`;
            leaderboardList.appendChild(listItem);
        });

        

        

    }

}