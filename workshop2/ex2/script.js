function repeatingText(){
    const quote = "The only limit to our realization of tomorrow is our doubts of today.";
    const author = "Franklin D. Roosevelt";
    for (let i = 0; i < 50; i++) {
        document.write(`<p><strong><i>"${quote}"</i></strong></p>`);
        document.write(`<p>-- ${author}</p><br>`);
    }
}

repeatingText();