// ===== VRAGEN =====
let vragen = 
[
    {
        vraag: "Wat is 2 + 2?",
        antwoorden: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        vraag: "Welke taal gebruiken we in de browser?",
        antwoorden: ["Python", "C#", "JavaScript", "Java"],
        correct: 2
    }
];

// ===== VARIABELEN =====
let huidigeVraag = 0;

// ===== START KNOP =====
document.getElementById("start").onclick = function () 
{
    huidigeVraag = 0;
    toonVraag();
};

// ===== VRAAG TONEN =====
function toonVraag() 
{

    let vraagElement = document.getElementById("vraag");
    let antwoordenDiv = document.getElementById("antwoorden");
    let feedback = document.getElementById("feedback");

    // vraag tonen
    vraagElement.innerText = vragen[huidigeVraag].vraag;

    // oude antwoorden leegmaken
    antwoordenDiv.innerHTML = "";
    feedback.innerText = "";

    // antwoorden genereren (buttons)
    vragen[huidigeVraag].antwoorden.forEach(function (antwoord, index) {
        let knop = document.createElement("button");
        knop.innerText = antwoord;

        knop.onclick = function () 
        {
            controleerAntwoord(index);
        };

        antwoordenDiv.appendChild(knop);
    });

    // volgende knop uitzetten
    document.getElementById("volgende").disabled = true;
}

// ===== ANTWOORD CONTROLEREN =====
function controleerAntwoord(index) 
{

    let feedback = document.getElementById("feedback");

    if (index === vragen[huidigeVraag].correct) {
        feedback.innerText = "Juist!";
    } else {
        feedback.innerText = "Fout!";
    }

    document.getElementById("volgende").disabled = false;
}

// ===== VOLGENDE VRAAG =====
document.getElementById("volgende").onclick = function ()
{

    huidigeVraag++;

    if (huidigeVraag >= vragen.length) {
        alert("Einde van de quiz!");
        huidigeVraag = 0;
    }

    toonVraag();
};