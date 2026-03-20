const vocabList = [
    { de: "Mann", en: "man" }, { de: "Männer", en: "men" },
    { de: "sich vordrängeln", en: "to jump the queue" }, { de: "Schlange stehen", en: "to stand in line" },
    { de: "britisch", en: "British" }, { de: "Rolltreppe", en: "escalator" },
    { de: "stehen", en: "to stand" }, { de: "auf der rechten Seite", en: "on the right" },
    { de: "auf der linken Seite", en: "on the left" }, { de: "gehen; laufen", en: "to walk" },
    { de: "warten", en: "to wait" }, { de: "Spaß", en: "fun" },
    { de: "Museum", en: "museum" }, { de: "kosten", en: "to cost" },
    { de: "Schiff", en: "ship" }, { de: "über", en: "over" },
    { de: "Fuß", en: "foot" }, { de: "Füße", en: "feet" },
    { de: "Osten", en: "east" }, { de: "Westen", en: "west" },
    { de: "Pier", en: "pier" }, { de: "Tunnel", en: "tunnel" },
    { de: "Fluss", en: "river" }, { de: "Bauernhof", en: "farm" },
    { de: "auf der anderen Seite", en: "across" }, { de: "Stadt", en: "city" },
    { de: "frei; kostenlos", en: "free" }, { de: "Wasserrutsche", en: "water slide" },
    { de: "Freizeitzentrum", en: "leisure centre" }, { de: "Aktivität", en: "activity" },
    { de: "Tour", en: "tour" }, { de: "durch", en: "through" },
    { de: "am Wochenende", en: "at the weekend" }, { de: "besonders", en: "special" },
    { de: "Um wie viel Uhr?", en: "What time?" }, { de: "gut; in Ordnung", en: "fine" },
    { de: "Bis dann!", en: "See you!" }, { de: "geschehen", en: "to happen" },
    { de: "schließen", en: "to close" }, { de: "genug", en: "enough" },
    { de: "glauben", en: "to believe" }, { de: "erschreckt", en: "scared" },
    { de: "gefährlich", en: "dangerous" }, { de: "Hai", en: "shark" },
    { de: "buchstabieren", en: "to spell" }, { de: "endlich", en: "at last" },
    { de: "Halbschwester", en: "half-sister" }, { de: "hinkommen", en: "to get to" },
    { de: "uns", en: "us" }, { de: "antworten", en: "to answer" },
    { de: "schlecht", en: "bad" }, { de: "Daumen drücken", en: "to keep your fingers crossed" },
    { de: "Spinne", en: "spider" }, { de: "bleiben", en: "to stay" },
    { de: "Broschüre", en: "brochure" }, { de: "bekommen", en: "to get" },
    { de: "Liebe(r)...", en: "Dear..." }, { de: "Besucher", en: "visitor" },
    { de: "verkaufen", en: "to sell" }, { de: "perfekt", en: "perfect" },
    { de: "reden mit", en: "to talk to" }, { de: "schwierig", en: "difficult" },
    { de: "deutsch", en: "German" }, { de: "grüßen", en: "to say hello to" },
    { de: "bedeuten", en: "to mean" }, { de: "Gewinner", en: "winner" },
    { de: "Tourist", en: "tourist" }, { de: "Zeile", en: "line" },
    { de: "einbiegen", en: "to turn into" }, { de: "links", en: "left" },
    { de: "rechts", en: "right" }, { de: "geradeaus", en: "straight on" },
    { de: "Ich weiß nicht", en: "I don't know" }, { de: "Stopp", en: "stop" },
    { de: "Touristeninfo", en: "tourist information centre" }, { de: "Markt", en: "market" },
    { de: "entlanggehen", en: "to go down" }, { de: "vorbei an", en: "past" },
    { de: "gegenüber", en: "opposite" }, { de: "Café", en: "café" },
    { de: "Theater", en: "theatre" }, { de: "Einkaufen", en: "shopping" },
    { de: "Kino", en: "cinema" }, { de: "Kirche", en: "church" },
    { de: "Umfrage", en: "survey" }, { de: "denken über", en: "to think of" },
    { de: "Hilfe", en: "help" }, { de: "einige; ein paar", en: "some" }
];

let activeList = [...vocabList];
let currentIndex = 0;
let points = parseInt(localStorage.getItem('lottaPoints')) || 0;
let wrongWords = JSON.parse(localStorage.getItem('lottaErrors')) || [];

// HTML Elemente
const views = ["menu-view", "selection-view", "trainer-view", "error-view"];
const card = document.getElementById('card');
const frontText = document.getElementById('front-text');
const backText = document.getElementById('back-text');
const scoreDisplay = document.getElementById('score');
const gradeDisplay = document.getElementById('grade');

// Navigation
function showView(viewId) {
    views.forEach(id => document.getElementById(id).style.display = (id === viewId ? 'block' : 'none'));
    if(viewId === 'menu-view') {
        document.getElementById('error-btn-menu').style.display = wrongWords.length > 0 ? 'block' : 'none';
    }
}

// Menü Aktionen
function startAll() {
    activeList = [...vocabList];
    currentIndex = 0;
    showView('trainer-view');
    updateCard();
}

function showSelection() {
    const listDiv = document.getElementById('selection-list');
    listDiv.innerHTML = "";
    vocabList.forEach((word, index) => {
        listDiv.innerHTML += `
            <div style="padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <input type="checkbox" id="vocab-${index}" value="${index}">
                <label for="vocab-${index}"> ${word.de}</label>
            </div>`;
    });
    showView('selection-view');
}

function startSelected() {
    const selectedIndexes = Array.from(document.querySelectorAll('#selection-list input:checked')).map(cb => parseInt(cb.value));
    if(selectedIndexes.length === 0) return alert("Wähle mindestens ein Wort!");
    activeList = selectedIndexes.map(i => vocabList[i]);
    currentIndex = 0;
    showView('trainer-view');
    updateCard();
}

function startErrorMode() {
    activeList = [...wrongWords];
    currentIndex = 0;
    showView('trainer-view');
    updateCard();
}

function showMenu() { showView('menu-view'); }

// Trainer Logik
card.addEventListener('click', () => card.classList.toggle('flipped'));

function updateCard() {
    card.classList.remove('flipped');
    setTimeout(() => {
        frontText.innerText = activeList[currentIndex].de;
        backText.innerText = activeList[currentIndex].en;
    }, 200);
}

function nextCard(isCorrect) {
    if (isCorrect) {
        points += 10;
    } else {
        points = Math.max(0, points - 5);
        let currentVocab = activeList[currentIndex];
        if (!wrongWords.some(v => v.en === currentVocab.en)) {
            wrongWords.push(currentVocab);
            localStorage.setItem('lottaErrors', JSON.stringify(wrongWords));
        }
    }
    currentIndex++;
    if (currentIndex >= activeList.length) {
        alert("Runde beendet! Zurück zum Menü.");
        showMenu();
    } else {
        updateScoreDisplay();
        updateCard();
    }
}

function updateScoreDisplay() {
    scoreDisplay.innerText = points;
    localStorage.setItem('lottaPoints', points);
    if (points >= 500) gradeDisplay.innerText = "Level: Legend ⭐";
    else if (points >= 300) gradeDisplay.innerText = "Level: Pro 🔥";
    else if (points >= 150) gradeDisplay.innerText = "Level: Learner ✅";
    else gradeDisplay.innerText = "Level: Newbie 🚀";
}

function resetPoints() {
    if (confirm("Alles löschen?")) {
        localStorage.clear();
        location.reload();
    }
}

// Initialisierung
updateScoreDisplay();
showView('menu-view');