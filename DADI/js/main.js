let numUtente = Math.floor((Math.random)()*6)+ 1;
let numComputer = Math.floor((Math.random)()*6)+ 1;

if (numUtente > numComputer) {
    console.log("vince l'utente")
}
   
if (numUtente < numComputer) {
    console.log("vince il computer")
}

if (numUtente === numComputer) {
    console.log("Pareggio")
}

console.log(numUtente, numComputer);