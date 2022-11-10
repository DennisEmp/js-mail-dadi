// PROMPT PER IL CHECK DELLA MAIL NELLA LISTA DEGLI INVITATI

let check = prompt("inserisci la tua mail");

// CREAZIONE LISTA ARRAY

const arrMailList = ["yari@gmail.com", "romina@gmail.com", "trevor@gmail.com", "francesco@gmail.com", "gianluca@gmail.com"];

// SE SEI NELLA LISTA

for (let i = 0; i < (arrMailList.length); i++){
    if (check == arrMailList[i]) {
        console.log (`${arrMailList[i]} sei nella lista degli invitati!!`);
    }

// SE NON SEI NELLA LISTA

    else if (check !== arrMailList[i]){
        console.log(`Purtoppo non sei nella lista degli invitati.`)
    }
}