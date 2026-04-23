const generateBtn = document.getElementById("generateBtn");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

async function generateQuote() {

    generateBtn.innerHTML = "Generating...";
    generateBtn.disabled = true;

    quoteText.innerHTML = "Loading...";
    quoteAuthor.innerHTML = "";

    try {
        const response = await fetch("https://dummyjson.com/quotes/random");

        const data = await response.json();

        quoteText.innerHTML = `"${data.quote}"`;
        quoteAuthor.innerHTML = `— ${data.author}`;

    } catch (error) {
        console.error(error);
        quoteText.innerHTML = "❌ Internet / API error";
        quoteAuthor.innerHTML = "Check connection";
    }

    generateBtn.innerHTML = "Generate Quote";
    generateBtn.disabled = false;
}

generateBtn.addEventListener("click", generateQuote);