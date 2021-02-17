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

let tries = 6;
let word;
let guessed;

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
    let unGuessed = guessed.filter((l) => !word.includes(l))
    var x = document.querySelector("#word").innerText.replace(/[ _]+/g, "");
        if (unGuessed.length < tries) {
        if (x === word) {
            document.querySelector("#theWord").innerText = word;
            modal.style.display = "block";
        }
    } else {
        alert(`you lost; your word was "${word}"`); // modal here
    } 
}

function showGallows() {
    let unGuessed = guessed.filter((l) => !word.includes(l)).length + 1;
    let cls = "try" + unGuessed;
    document.querySelector("#gallows").classList.add(cls)

}

function showguessed() {
    document.querySelector("#guessed").innerText = guessed.filter(l => !word.includes(l)).join(" ");

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
    showguessed();
    showGallows();
    hasWon();
}

