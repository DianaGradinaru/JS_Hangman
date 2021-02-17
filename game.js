var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

var words = [
    "codecool",
    "kahoot",
    "journey",
    "attendance",
    "workshop",
    "teamwork",
    "student",
    "codecooler",
    "assessment",
    "project",
];

const tries = 10;
var word;
var guessed;

function initGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guessed = []

    showWord();
    
    document
        .querySelectorAll("ul.alphabet li")
        .forEach((li) => li.addEventListener("click", selectLetter));
};

initGame(); 

function hasWon() {
    /// guessed = guessed - displayed letters
    var x = document.querySelector("#word").innerText.replace(/[ _]+/g, "");
    if (guessed.length < tries) {
        if (x === word) {
            document.querySelector("#theWord").innerText = word;
            modal.style.display = "block";
        }
    } else {
        alert(`you lost; your word was "${word}"`); // modal here
    } 
}

function showGallows() {
    var wrongGuesses = guessed.length - word.length
}
///function showGallows -> len(guessed) = imaginea #

function showGuessed() {
    document.querySelector("#guessed").innerText = guessed.join(" ");
}

function showWord() {
    var shownWord = word
        .split("")
        .map((l) => (guessed.includes(l) ? l : "_"))
        .join(" ");
    document.querySelector("#word").innerText = shownWord;
}

function selectLetter(event) {
    event.preventDefault();

    var letter = event.target.innerText;
    guessed.push(letter.toLowerCase());

    event.target.parentElement.removeChild(event.target);

    showWord();
    showGuessed();
    hasWon();
}

