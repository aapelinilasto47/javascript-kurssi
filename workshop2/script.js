
let quote = document.getElementById("quote").innerText = "The only way to do great work is to love what you do.";
let author = document.getElementById("author").innerText = "- Steve Jobs";




let container =  document.querySelectorAll("div.container").forEach(div => {
    div.style.fontFamily = "Arial, sans-serif";
    div.style.textAlign = "center";
    div.style.maxWidth = "600px";
    div.style.margin = "50px auto";
    div.style.border = "2px solid black";
    div.style.padding = "20px";
    div.style.marginBottom = "20px";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "#f9f9f9";
    div.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
});
