const body = document.body;

let keyCount = 0;

function showHint() {
    const textarea = document.getElementById('textdata');
    textarea.style.backgroundColor = 'lightyellow';
    textarea.value = "Please fill in the form using proper data.";

}

function countKeys() {
    keyCount++;
    document.getElementById('keycount').textContent = "Keypresses: " + keyCount;
}


const button = document.getElementById('submit');
    button.addEventListener('click', checkText);

function checkText() {
    const textdata = document.getElementById('textdata').value.trim();
    if (textdata === "") {
        alert("Textarea is empty!");
        return false;
    }
    else {
        alert("Form submitted successfully!");
        return true;
    }
}

function presentKeys(event) {
    if (event.key === "a") {
        body.appendChild(document.createElement("div"));
        body.lastChild.textContent = "You pressed the 'a' key!";
    }
}