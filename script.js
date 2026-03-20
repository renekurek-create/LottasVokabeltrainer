// Vokabeln mit Kapitel-Zuweisung
const vocabData = [
    { unit: "Check-in", de: "Mann", en: "man" }, { unit: "Check-in", de: "Männer", en: "men" },
    { unit: "Check-in", de: "sich vordrängeln", en: "to jump the queue" }, { unit: "Check-in", de: "Schlange stehen", en: "to stand in line" },
    { unit: "Check-in", de: "britisch", en: "British" }, { unit: "Check-in", de: "Rolltreppe", en: "escalator" },
    { unit: "Check-in", de: "stehen", en: "to stand" }, { unit: "Check-in", de: "rechts", en: "on the right" },
    { unit: "Check-in", de: "links", en: "on the left" }, { unit: "Check-in", de: "gehen", en: "to walk" },
    { unit: "Check-in", de: "warten", en: "to wait" }, { unit: "Check-in", de: "Spaß", en: "fun" },
    { unit: "Check-in", de: "Museum", en: "museum" }, { unit: "Check-in", de: "kosten", en: "to cost" },
    { unit: "Check-in", de: "Schiff", en: "ship" }, { unit: "Check-in", de: "über", en: "over" },
    { unit: "Check-in", de: "Fuß", en: "foot" }, { unit: "Check-in", de: "Füße", en: "feet" },
    { unit: "Check-in", de: "Osten", en: "east" }, { unit: "Check-in", de: "Westen", en: "west" },
    { unit: "Check-in", de: "Pier", en: "pier" }, { unit: "Check-in", de: "Tunnel", en: "tunnel" },
    { unit: "Check-in", de: "Fluss", en: "river" }, { unit: "Check-in", de: "Bauernhof", en: "farm" },
    { unit: "Check-in", de: "auf der anderen Seite", en: "across" }, { unit: "Check-in", de: "Stadt", en: "city" },
    { unit: "Check-in", de: "frei; kostenlos", en: "free" },
    { unit: "Station 1", de: "Wasserrutsche", en: "water slide" }, { unit: "Station 1", de: "Freizeitzentrum", en: "leisure centre" },
    { unit: "Station 1", de: "Aktivität", en: "activity" }, { unit: "Station 1", de: "Tour", en: "tour" },
    { unit: "Station 1", de: "durch", en: "through" }, { unit: "Station 1", de: "am Wochenende", en: "at the weekend" },
    { unit: "Station 1", de: "besonders", en: "special" }, { unit: "Station 1", de: "Um wie viel Uhr?", en: "What time?" },
    { unit: "Station 1", de: "gut; in Ordnung", en: "fine" }, { unit: "Station 1", de: "Bis dann!", en: "See you!" },
    { unit: "Station 1", de: "geschehen", en: "to happen" }, { unit: "Station 1", de: "schließen", en: "to close" },
    { unit: "Station 1", de: "genug", en: "enough" }, { unit: "Station 1", de: "glauben", en: "to believe" },
    { unit: "Station 1", de: "erschreckt", en: "scared" }, { unit: "Station 1", de: "gefährlich", en: "dangerous" },
    { unit: "Station 1", de: "Hai", en: "shark" },
    { unit: "Station 2", de: "buchstabieren", en: "to spell" }, { unit: "Station 2", de: "endlich", en: "at last" },
    { unit: "Station 2", de: "Halbschwester", en: "half-sister" }, { unit: "Station 2", de: "hinkommen", en: "to get to" },
    { unit: "Station 2", de: "uns", en: "us" }, { unit: "Station 2", de: "antworten", en: "to answer" },
    { unit: "Station 2", de: "schlecht", en: "bad" }, { unit: "Station 2", de: "Daumen drücken", en: "to keep your fingers crossed" },
    { unit: "Station 2", de: "Spinne", en: "spider" }, { unit: "Station 2", de: "bleiben", en: "to stay" },
    { unit: "Dictionary", de: "Broschüre", en: "brochure" }, { unit: "Dictionary", de: "bekommen", en: "to get" },
    { unit: "Dictionary", de: "Liebe(r)...", en: "Dear..." }, { unit: "Dictionary", de: "Besucher", en: "visitor" },
    { unit: "Dictionary", de: "verkaufen", en: "to sell" }, { unit: "Dictionary", de: "perfekt", en: "perfect" },
    { unit: "Dictionary", de: "reden mit", en: "to talk to" }, { unit: "Dictionary", de: "schwierig", en: "difficult" },
    { unit: "Dictionary", de: "deutsch", en: "German" }, { unit: "Dictionary", de: "grüßen", en: "to say hello to" },
    { unit: "Dictionary", de: "bedeuten", en: "to mean" }, { unit: "Dictionary", de: "Gewinner", en: "winner" },
    { unit: "Dictionary", de: "Tourist", en: "tourist" }, { unit: "Dictionary", de: "Zeile", en: "line" },
    { unit: "Dictionary", de: "einbiegen", en: "to turn into" }, { unit: "Dictionary", de: "links", en: "left" },
    { unit: "Dictionary", de: "rechts", en: "right" }, { unit: "Dictionary", de: "geradeaus", en: "straight on" },
    { unit: "Dictionary", de: "Ich weiß nicht", en: "I don't know" }, { unit: "Dictionary", de: "Stopp", en: "stop" },
    { unit: "Dictionary", de: "Touristeninfo", en: "tourist information centre" }, { unit: "Dictionary", de: "Markt", en: "market" },
    { unit: "Dictionary", de: "entlanggehen", en: "to go down" }, { unit: "Dictionary", de: "vorbei an", en: "past" },
    { unit: "Dictionary", de: "gegenüber", en: "opposite" }, { unit: "Dictionary", de: "Café", en: "café" },
    { unit: "Dictionary", de: "Theater", en: "theatre" }, { unit: "Dictionary", de: "Einkaufen", en: "shopping" },
    { unit: "Dictionary", de: "Kino", en: "cinema" }, { unit: "Dictionary", de: "Kirche", en: "church" },
    { unit: "Dictionary", de: "Umfrage", en: "survey" }, { unit: "Dictionary", de: "denken über", en: "to think of" },
    { unit: "Dictionary", de: "Hilfe", en: "help" }, { unit: "Dictionary", de: "einige", en: "some" }
];

let activeList = [];
let currentIndex = 0;
let points = parseInt(localStorage.getItem('lottaPoints')) || 0;
let wrongWords = JSON.parse(localStorage.getItem('lottaErrors')) || [];

// Navigation
function showMenu() {
    document.getElementById('menu-view').style.display = 'block';
    document.getElementById('selection-view').style.display = 'none';
    document.getElementById('trainer-view').style.display = 'none';
    document.getElementById('error-btn-menu').style.display = wrongWords.length > 0 ? 'block' : 'none';
}

function showSelection() {
    const listDiv = document.getElementById('selection-list');
    listDiv.innerHTML = "";
    
    // Gruppiere nach Units
    const units = [...new Set(vocabData.map(v => v.unit))];
    units.forEach(unit => {
        listDiv.innerHTML += `<div class="unit-header">${unit}</div>`;
        vocabData.filter(v => v.unit === unit).forEach((word, idx) => {
            const globalIdx = vocabData.indexOf(word);
            listDiv.innerHTML += `
                <div style="padding: 8px 0;">
                    <input type="checkbox" id="v-${globalIdx}" value="${globalIdx}">
                    <label for="v-${globalIdx}">${word.de}</label>
                </div>`;
        });
    });
    document.getElementById('menu-view').style.display = 'none';
    document.getElementById('selection-view').style.display = 'block';
}

function startAll() {
    activeList = [...vocabData];
    currentIndex = 0;
    document.getElementById('mode-indicator').innerText = "Modus: Alle";
    launchTrainer();
}

function startSelected() {
    const selected = Array.from(document.querySelectorAll('#selection-list input:checked')).map(cb => vocabData[cb.value]);
    if(selected.length === 0) return alert("Wähle Wörter aus!");
    activeList = selected;
    currentIndex = 0;
    document.getElementById('mode-indicator').innerText = "Modus: Auswahl";
    launchTrainer();
}

function startErrorMode() {
    activeList = [...wrongWords];
    currentIndex = 0;
    document.getElementById('mode-indicator').innerText = "Modus: Stolperwörter";
    launchTrainer();
}

function launchTrainer() {
    document.getElementById('menu-view').style.display = 'none';
    document.getElementById('selection-view').style.display = 'none';
    document.getElementById('trainer-view').style.display = 'block';
    updateCard();
}

// Trainer Logik
document.getElementById('card').addEventListener('click', () => document.getElementById('card').classList.toggle('flipped'));

function updateCard() {
    document.getElementById('card').classList.remove('flipped');
    setTimeout(() => {
        document.getElementById('front-text').innerText = activeList[currentIndex].de;
        document.getElementById('back-text').innerText = activeList[currentIndex].en;
    }, 200);
}

function nextCard(isCorrect) {
    if (isCorrect) {
        points += 10;
        // Wenn es richtig war, aus Fehlerliste entfernen? (Optional)
    } else {
        points = Math.max(0, points - 5);
        if (!wrongWords.some(v => v.en === activeList[currentIndex].en)) {
            wrongWords.push(activeList[currentIndex]);
            localStorage.setItem('lottaErrors', JSON.stringify(wrongWords));
        }
    }
    currentIndex++;
    if (currentIndex >= activeList.length) {
        alert("Fertig!");
        showMenu();
    } else {
        updateScore();
        updateCard();
    }
}

function updateScore() {
    document.getElementById('score').innerText = points;
    localStorage.setItem('lottaPoints', points);
    const grade = document.getElementById('grade');
    if (points >= 500) grade.innerText = "⭐ Legend ⭐";
    else if (points >= 300) grade.innerText = "🔥 Pro 🔥";
    else if (points >= 150) grade.innerText = "✅ Learner ✅";
    else grade.innerText = "Newbie 🚀";
}

function resetPoints() {
    const choice = confirm("Punkte auf 0 setzen? (OK klickt für JA). Abbrechen löscht auch die Fehlerliste!");
    if (choice) {
        points = 0;
        updateScore();
    } else {
        if(confirm("Willst du WIRKLICH auch alle gespeicherten Fehler löschen?")) {
            localStorage.clear();
            location.reload();
        }
    }
}

showMenu();
updateScore();