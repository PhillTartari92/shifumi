const choixUser = document.getElementById('user');
const choixOrdi = document.getElementById('ordi');
const resultat = document.getElementById('resultat');
const choixMultiples = document.querySelectorAll('button');

let tirage;
let montrer;
let numberGo;
let final;

choixMultiples.forEach(choixMultiples => choixMultiples.addEventListener('click', (e) => {
    tirage = e.target.id;

    if(tirage === "pierre"){
        montrer = '<img src="img/pierre.png" alt="pierre" />'
    }else if(tirage === 'feuille'){
        montrer = '<img src="img/feuille.png" alt="feuille" />'
    }else{
        montrer = '<img src="img/ciseaux.png" alt="ciseaux" />'
    }
    choixUser.innerHTML = montrer;
    computerBet();
    whoIsTheChampion();
}))



function computerBet(){
    const numeroSorti = Math.floor(Math.random() * 3) + 1;

    if(numeroSorti === 1){
        numberGo = '<img src="img/pierre.png" alt="pierre" />'
    }else if(numeroSorti === 2){
        numberGo = '<img src="img/feuille.png" alt="feuille" />'
    }else{
        numberGo ='<img src="img/ciseaux.png" alt="ciseaux" />'
    }
    choixOrdi.innerHTML = numberGo;
}

function whoIsTheChampion(){
    if(montrer === numberGo){
        final = 'Egalité';
    }
    if(montrer === '<img src="img/pierre.png" alt="pierre" />' && numberGo === '<img src="img/ciseaux.png" alt="ciseaux" />'){
        final = 'Gagné';
    }
    if(montrer === '<img src="img/pierre.png" alt="pierre" />' && numberGo === '<img src="img/feuille.png" alt="feuille" />'){
        final = 'Perdu';
    }
    if(montrer === '<img src="img/feuille.png" alt="feuille" />' && numberGo === '<img src="img/pierre.png" alt="pierre" />'){
        final = 'Gagné';
    }
    if(montrer === '<img src="img/feuille.png" alt="feuille" />' && numberGo === '<img src="img/ciseaux.png" alt="ciseaux" />'){
        final = 'Perdu';
    }
    if(montrer === '<img src="img/ciseaux.png" alt="ciseaux" />' && numberGo === '<img src="img/feuille.png" alt="feuille" />'){
        final = 'Gagné';
    }
    if(montrer === '<img src="img/ciseaux.png" alt="ciseaux" />' && numberGo === '<img src="img/pierre.png" alt="pierre" />'){
        final = 'Perdu';
    }
    resultat.innerHTML = final;
}