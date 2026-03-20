// --- DEINE VOLLSTÄNDIGE VOKABEL-LISTE ---
const vocabList = [
    { de: "Mann", en: "man" },
    { de: "Männer", en: "men" },
    { de: "sich vordrängeln", en: "to jump the queue" },
    { de: "Schlange stehen", en: "to stand in line" },
    { de: "britisch; Brite/Britin", en: "British" },
    { de: "Rolltreppe", en: "escalator" },
    { de: "stehen", en: "to stand" },
    { de: "auf der rechten Seite", en: "on the right" },
    { de: "auf der linken Seite", en: "on the left" },
    { de: "gehen; laufen", en: "to walk" },
    { de: "warten", en: "to wait" },
    { de: "Spaß; Freude", en: "fun" },
    { de: "Museum", en: "museum" },
    { de: "kosten", en: "to cost" },
    { de: "Schiff", en: "ship" },
    { de: "über; hinüber", en: "over" },
    { de: "Fuß", en: "foot" },
    { de: "Füße", en: "feet" },
    { de: "Osten", en: "east" },
    { de: "Westen", en: "west" },
    { de: "Pier; Hafendamm", en: "pier" },
    { de: "Tunnel", en: "tunnel" },
    { de: "Fluss", en: "river" },
    { de: "Bauernhof", en: "farm" },
    { de: "auf der anderen Seite von", en: "across" },
    { de: "Stadt; Großstadt", en: "city" },
    { de: "frei; kostenlos", en: "free" },
    { de: "Wasserrutsche", en: "water slide" },
    { de: "Freizeitzentrum", en: "leisure centre" },
    { de: "Aktivität", en: "activity" },
    { de: "Tour; Rundgang", en: "tour" },
    { de: "durch", en: "through" },
    { de: "am Wochenende", en: "at the weekend" },
    { de: "besonders", en: "special" },
    { de: "Um wie viel Uhr?", en: "What time?" },
    { de: "gut; in Ordnung", en: "fine" },
    { de: "Bis dann!", en: "See you!" },
    { de: "geschehen; passieren", en: "to happen" },
    { de: "schließen", en: "to close" },
    { de: "genug", en: "enough" },
    { de: "glauben", en: "to believe" },
    { de: "Angst haben; erschreckt", en: "scared" },
    { de: "gefährlich", en: "dangerous" },
    { de: "Hai", en: "shark" },
    { de: "buchstabieren", en: "to spell" },
    { de: "endlich", en: "at last" },
    { de: "Halbschwester", en: "half-sister" },
    { de: "gelangen nach; hinkommen", en: "to get to" },
    { de: "uns", en: "us" },
    { de: "antworten", en: "to answer" },
    { de: "schlecht; schlimm", en: "bad" },
    { de: "die Daumen drücken", en: "to keep your fingers crossed" },
    { de: "Spinne", en: "spider" },
    { de: "bleiben", en: "to stay" },
    { de: "Broschüre", en: "brochure" },
    { de: "bekommen; holen", en: "to get" },
    { de: "Liebe(r)... (Anrede)", en: "Dear..." },
    { de: "Besucher", en: "visitor" },
    { de: "verkaufen", en: "to sell" },
    { de: "perfekt", en: "perfect" },
    { de: "sprechen mit", en: "to talk to" },
    { de: "schwierig", en: "difficult" },
    { de: "deutsch; Deutsche(r)", en: "German" },
    { de: "grüßen", en: "to say hello to" },
    { de: "bedeuten", en: "to mean" },
    { de: "Gewinner", en: "winner" },
    { de: "Tourist", en: "tourist" },
    { de: "Zeile", en: "line" },
    { de: "einbiegen in", en: "to turn into" },
    { de: "links", en: "left" },
    { de: "rechts", en: "right" },
    { de: "geradeaus", en: "straight on" },
    { de: "Ich weiß nicht", en: "I don't know" },
    { de: "Haltestelle; Stopp", en: "stop" },
    { de: "Touristeninformation", en: "tourist information centre" },
    { de: "Markt", en: "market" },
    { de: "hinuntergehen (Straße)", en: "to go down" },
    { de: "vorbei an", en: "past" },
    { de: "gegenüber", en: "opposite" },
    { de: "Café", en: "café" },
    { de: "Theater", en: "theatre" },
    { de: "Einkaufen", en: "shopping" },
    { de: "Kino", en: "cinema" },
    { de: "Kirche", en: "church" },
    { de: "Umfrage", en: "survey" },
    { de: "denken über; halten von", en: "to think of" },
    { de: "Hilfe", en: "help" },
    { de: "einige; ein paar", en: "some" }
];

let currentIndex = 0;
let points = parseInt(localStorage.getItem('lottaPoints')) || 0;
// Fehlerliste aus Speicher laden
let wrongWords = JSON.parse(localStorage.getItem('lottaErrors')) || [];

const card = document.getElementById('card');
const frontText = document.getElementById('front-text');
const backText = document.getElementById('back-text');
const scoreDisplay = document.getElementById('score');
const gradeDisplay = document.getElementById('grade');

card.addEventListener('click', () => card.classList.toggle('flipped'));

function updateCard() {
    card.classList.remove('flipped');
    setTimeout(() => {
        frontText.innerText = vocabList[currentIndex].de;
        backText.innerText = vocabList[currentIndex].en;
    }, 200);
}

function nextCard(isCorrect) {
    if (isCorrect) {
        points += 10;
    } else {
        points = Math.max(0, points - 5);
        // Fehler-Speicherung
        let currentVocab = vocabList[currentIndex];
        if (!wrongWords.some(v => v.en === currentVocab.en)) {
            wrongWords.push(currentVocab);
            localStorage.setItem('lottaErrors', JSON.stringify(wrongWords));
        }
    }

    currentIndex++;
    if (currentIndex >= vocabList.length) {
        currentIndex = 0;
        alert("Runde geschafft! Alle Fehler wurden für später gemerkt.");
    }

    updateScoreDisplay();
    updateCard();
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
    if (confirm("Alles löschen und neu starten?")) {
        localStorage.clear();
        location.reload();
    }
}

updateScoreDisplay();
updateCard();