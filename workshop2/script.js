
let quote = document.getElementById("quote").innerText = "The only way to do great work is to love what you do.";
let author = document.getElementById("author").innerText = "- Steve Jobs";




function printQuote() {
    for (let i = 0; i < 50; i++) {
        const p = document.createElement("p");
        p.textContent = quote + " " + author;
        document.body.appendChild(p);
    }
}


const body = document.body;

body.append("Hello World!");

const newP = document.createElement("p");
newP.textContent = "This is a new paragraph added with createElement and textContent.";
body.appendChild(newP);