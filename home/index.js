window.onload = function () {

const quoteArray = [
    "'Some of you thought me dead. Some of you even willed it, and you gathered here in the Nhexus to offer feigned respect. But now you see plainly that my will cannot be undone, my favour cannot be regained and my wrath cannot be tempered. Whether you are loyal or a traitor, you will be slaughtered, for it is only right that my ascension be celebrated with sacrifice. And if I deign to have you resurrected, know that you will serve me by your deeds or by your suffering. — Asdrubael Vect, Supreme Overlord of Commorragh'", 
    "'Spawned in the darkest pits of the universe, the piratical Eldar are a curse upon all races of the galaxy. For untold thousands of years they have preyed upon us, stealing forth from the shadows and dark places on their raids of terror and violence; massacring or capturing all whose paths they cross. That they are utterly evil and inhuman is without question. - High Lord Khouron, Imperial Commander of Astherax'", 
    "'There is no good story without a villain. I shall provide you with an antagonist beyond your imaginings or even your comprehension, and as you die you will curse my name exquisitely. - Drecarus, Master of The Sutured Helix'", 
    "'Every weapon your prey wields can be turned against them, given sufficient application of wit. — Archon Drekarth X'uskul'", 
    "'A blade to the chest? How pedestrian. We left behind such base concepts long ago, dear heart. Let me introduce you to a far more interesting demise... — Haemogarch Vanthis, Necromaester of the Dark Creed'", 
    "'I like your dog, Fenrisian. Once I have broken its will, I'll feed it your flesh as a treat. - Akkhar the Cruel, Beastmaster'", 
    "'Arrogant creature, you will pay for the insult of trying to force me to the ground. The mere thought of brushing my feet against the same dirt you tread sickens me. I will take your imminent screams of dying anguish as your crude attempt at an apology. - Sorakhn Elish Scourge Solarite'", 
    "'There is a very good reason why so many of the galaxy’s cultures and societies are afraid of the dark. - Inquisitor Bastalek Grimm, on Mandrakes'", 
    "'Fetch me another plaything. This one seems to have broken. - Urien Rakarth, sculptor of torments'", 
    "'To die once to a prey’s attack is indulgent. To die twice to the same force, in the same manner... That is positively embarrassing. Gather this fool’s remains, that we might teach him the error of his ways. - Quvelich the Emaciator'", 
    "'Death? You want death? I'm afraid that would be far too boring. - Lord Sarnak of the Kabal of the Black Heart'", 
    "'The Dark City feeds, rotting in the ether like an immeasurably vast and evil parasite with its barbed jaws buried in the soft belly of the material dimension. Black, vampiric, devoid of all warmth, it saps the vital juices of the galaxy and casts out only hatred and fear in return. - Aierulian, On the Hidden'",
]

///

const quoteElement = document.getElementById("quote");
 let randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];

 ///

function setRandomQuote() {
    quoteElement.innerText = randomQuote;
}

setRandomQuote();

document.getElementById("accessBtn").addEventListener("click", accessWin);
const toggle = document.getElementById("accessBtn")

  function accessWin() {
    if (toggle.checked) {
    document.body.style.fontFamily = "serif"
    globalThis.access = true;
    let accessOn = true;
    localStorage.setItem("accessOn", accessOn)
} else if (toggle) {
    document.body.style.fontFamily = 'Almendra SC'
    localStorage.removeItem("accessOn")
}
localStorage.setItem("accessTxt", access)

};

function checkButton() {
    let accessOn = localStorage.getItem("accessOn")
    if (accessOn) {
        toggle.checked = true;
        document.body.style.fontFamily = "serif"
    }
}

checkButton()

}



/*const accessBtn = document.getElementById("accessibilityBtn");




accessBtn.addEventListener("click", accessWin);


};

const body = document.getElementsByClassName("bodyStyle")

if(body) {
    console.log("yes")
}

function accessWin() {
    body.style.fontFamily = 'serif'
}
*/


/*window.onload = function () {
globalThis.access = document.getElementsByClassName("bodyStyle");

const accessBtn = document.getElementById("accessibilityBtn");

accessBtn.addEventListener("click", accessWin);

function accessWin() {
    access.classList.add('setSerif')
}
}
*/

