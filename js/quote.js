const generateBtn = document.getElementById("generateBtn");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

const fallbackQuotes = [
    { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { quote: "Discipline creates freedom.", author: "Unknown" },
    { quote: "Small steps lead to big changes.", author: "Unknown" },
    { quote: "Dream it. Do it.", author: "Unknown" },
    { quote: "Consistency beats motivation.", author: "Unknown" }
];

function displayQuote(text, author) {
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;

    setTimeout(() => {
        quoteText.innerHTML = `"${text}"`;
        quoteAuthor.innerHTML = `— ${author}`;

        quoteText.style.opacity = 1;
        quoteAuthor.style.opacity = 1;
    }, 300);
}

async function generateQuote() {
    generateBtn.innerHTML = "Generating...";
    generateBtn.disabled = true;

    quoteText.innerHTML = "Loading...";
    quoteAuthor.innerHTML = "";

    try {
        const response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok) throw new Error("API error");

        const data = await response.json();
        displayQuote(data.quote, data.author);

    } catch (error) {
        console.error("API failed, using fallback");

        const random = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        displayQuote(random.quote, random.author);
    }

    generateBtn.innerHTML = "Generate Quote";
    generateBtn.disabled = false;
}

generateBtn.addEventListener("click", generateQuote);
window.addEventListener("load", generateQuote);
