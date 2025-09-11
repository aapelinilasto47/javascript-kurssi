const h1 = document.querySelector('h1');

h1.addEventListener("mouseover", function() {
    h1.style.color = "red";
    
    console.log("Stepped over by mouse!");
});

h1.addEventListener("mouseout", function() {
    h1.style.color = "black";
    
    alert("Bye bye mouse!");
});
