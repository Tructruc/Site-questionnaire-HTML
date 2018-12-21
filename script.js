charge();


let reponse1 = "rien";
let reponse2 = "rien";
let reponse3 = "rien";
let reponse4 = "rien";
let reponse5 = "rien";
let reponse6 = "rien";
let reponse7 = "rien";
let reponse8 = "rien";
let reponse9 = "rien";
let reponse10 = "rien";
let note = 0;
let tour = 0;
let reponse_enter = document.getElementById('rep')
let questionBouton = document.getElementById('questionButton');
let rejouerBouton = document.getElementById('rejouerButton');
let info = document.getElementById('info_html')
let infoHTML = "Le format de la reponse doit etre au format : <dd>";
let infoCSS = "Le format de la reponse doit etre au format : color"


function charge() {
    document.getElementById('rep').style.visibility = "hidden";
    document.getElementById("questionButton").style.visibility = "visible";
    document.getElementById("rejouerButton").style.visibility = "hidden";
    document.getElementById('info_html').style.visibility = "hidden";
    document.getElementById('i').style.visibility = "hidden";
}


function question() {

    console.log(document.getElementById("rep").value);
    if (tour === 0) {
        document.getElementById('rep').style.visibility = "visible";
        document.getElementById("texte").innerHTML = "Quelle est la balise d'un grand titre";
        document.getElementById('info_html').innerText = infoHTML;
        document.getElementById('info_html').style.visibility = "visible";
        document.getElementById('i').style.visibility = "visible";

    } else if (tour === 1) {

        if (reponse_enter.value === "<h1>") {
            note++;
            console.log("Vrai");
        }
        document.getElementById("rep").value = "";
        document.getElementById("texte").innerHTML = "Quelle est la balise d'un texte en italique?";
        document.getElementById('info_html').innerText = infoHTML;
    } else if (tour === 2) {
        if (reponse_enter.value.toLowerCase() === "<i>") {
            note++;
            console.log("Vrai");
        }
        document.getElementById("rep").value = "";
        document.getElementById("texte").innerHTML = "Quelle est la balise d'un bouton ?";
        document.getElementById('info_html').innerText = infoHTML;
    } else if (tour === 3) {
        if (reponse_enter.value === "<button>") {
            note++;
            console.log("Vrai");
        }
        document.getElementById("rep").value = "";
        document.getElementById("texte").innerHTML = "Quelle est la balise d'un pied de page ?";
        document.getElementById('info_html').innerText = infoHTML;
    } else if (tour === 4) {
        if (reponse_enter.value === "<footer>") {
            console.log("vrai");
            note++;
        }
        document.getElementById("rep").value = "";
        document.getElementById("texte").innerHTML = "Quelle est la balise d'un texte en gras ?";
        document.getElementById('info_html').innerText = infoHTML;
    } else if (tour === 5) {
        if (reponse_enter.value === "<b>" || reponse_enter.value === "<strong>") {
            console.log("vrai");
            note++;
        }
        document.getElementById("rep").value = "";
        document.getElementById("texte").innerHTML = "Quelle est la balise d'une zone de texte";
        document.getElementById('info_html').innerText = infoHTML;

    } else if (tour === 6) {
        if (reponse_enter.value === "<textarea>") {
            console.log("vrai");
            note++;
        }
        document.getElementById("rep").value = "";
        document.getElementById("texte").innerHTML = "quelle est la balise d'une Metadonnée ?";
        document.getElementById('info_html').innerText = infoHTML;

    } else if (tour === 7) {
        if (reponse_enter.value === "<meta>") {
            console.log("vrai");
            note++;
        }
        document.getElementById("rep").value = "";
        document.getElementById("texte").innerHTML = "Quelle est la balise d'un son ?";
        document.getElementById('info_html').innerText = infoHTML;
    } else if (tour === 8) {
        if (reponse_enter.value === "<audio>") {
            console.log("vrai");
            note++;
        }
        document.getElementById("rep").value = "";
        document.getElementById("texte").innerHTML = "Quelle est la balise d'une image ?";
        document.getElementById('info_html').innerText = infoHTML;
    } else if (tour === 9) {
        if (reponse_enter.value === "<img>") {
            console.log("vrai");
            note++;
        }
        document.getElementById("rep").value = "";
        document.getElementById("texte").innerHTML = "Quelle est la balise d'une division ?";
        document.getElementById('info_html').innerText = infoHTML;
    } else if (tour === 10) {
        if (reponse_enter.value === "<div>") {
            console.log("vrai");
            note++;
        }
        document.getElementById("rep").value = "";
        document.getElementById("texte").innerHTML = "Quelle est la propriétée en CSS pour metre un fond de couleur ?";
        document.getElementById('info_html').innerHTML = infoCSS;
    } else if (tour >= 11) {
        if (reponse_enter.value === "backgroud-color") {
            console.log("vrai");
            note++;
        }
        document.getElementById("rep").value = "";
        document.getElementById("texte").innerHTML = "C'est fini";
        console.log("stop");
        document.getElementById("questionButton").style.visibility = "hidden";
        document.getElementById("rejouerButton").style.visibility = "visible";
        document.getElementById("texte").innerHTML = " Ta note est de " + note + "/11";
        document.getElementById("rep").style.visibility = "hidden";
        document.getElementById('info_html').style.visibility = "hidden";
        document.getElementById('i').style.visibility = "hidden";

    }

    console.log(note);
    tour++;
    console.log(tour);
    reponse_enter.focus();
}

function recharge() {
    location.reload();
}

rejouerBouton.addEventListener('click', recharge);
questionBouton.addEventListener('click', question);
reponse_enter.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("questionButton").click();
    }
})


//HyperText Markup Language   = HTML