function parseData() {
    const parser = new DOMParser();

    const xmlData = `
    <allquotes>
        <quotes>
			<quote>I'm not concerned about all hell breaking loose, but that a PART of hell will break loose... it'll be much harder to detect.</quote>
			<length>124</length>
			<author>George Carlin</author>
		</quotes>

		<quotes>
			<quote>The biggest problem with every art is by the use of appearance to create a loftier reality. </quote>
			<author>Johann Wolfgang von Goethe</author>
		</quotes>
    </allquotes>
        `;

    const xmlDoc = parser.parseFromString(xmlData, "text/xml");
    
    const quotes = xmlDoc.getElementsByTagName("quotes");
    
   


    for (let quote of quotes) {
        const text = quote.getElementsByTagName("quote")[0].textContent;
        const author = quote.getElementsByTagName("author")[0].textContent;
        output += `<blockquote>${text} - <cite>${author}</cite></blockquote>`;
    }

   document.querySelector("#output").innerHTML = output;
}

/*

function loadXMLFile() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://quotes.rest/qod.xml", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.responseText;
            console.log(response);
        }
    }
}

*/

function loadJSONFile(x) {
    let quoteText = "";
    let quoteAuthor = "";
    console.log("loadJSONFile called");
    console.log(x);
    // Sori, oli ongelmia XML tiedoston kanssa, joten tein JSON version
    fetch('https://thequoteshub.com/api/')
        .then(response => response.json())
        .then(data => {
            
            quoteAuthor = data.author;
            quoteText = data.text;
            const output1 = `<blockquote>${quoteText} - <cite>${quoteAuthor}</cite></blockquote>`;
            
            document.querySelector("#quotes").innerHTML = output1;
            
        })
        .catch(error => console.error('Error fetching JSON:', error));

        return { quoteText, quoteAuthor };

}

function loadAndParseXML() {
    console.log("loadAndParseXML called");
    fetch('https://thequoteshub.com/api/')
        .then(response => response.json())
        .then(data => {
            
            quoteAuthor = data.author;
            quoteText = data.text;
            const output1 = `<blockquote>${quoteText} - <cite>${quoteAuthor}</cite></blockquote>`;
            document.querySelector("#mytable").innerHTML += `<tr><td>${quoteText}</td><td>${quoteAuthor}</td></tr>`;
        })
        .catch(error => console.error('Error fetching JSON:', error));
}
