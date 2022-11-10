// PROMPT PER IL CHECK DELLA MAIL NELLA LISTA DEGLI INVITATI

let check = prompt("inserisci la tua mail");

// CREAZIONE LISTA ARRAY

const arrMailList = ["yari@gmail.com", "romina@gmail.com", "trevor@gmail.com", "francesco@gmail.com", "gianluca@gmail.com"];

let emailtrovata = false;

// check se il prompt è presente nella lista

for (let i = 0; i < arrMailList.length; i++){
    
    if (check === arrMailList[i]) {
       emailtrovata = true;
    }
    console.log (`${arrMailList[i]} sei nella lista degli invitati!!`);

    // else {
    //     console.log(`Purtoppo non sei nella lista degli invitati.`);
    //     };
};

if(emailtrovata === false) {
    console.log("non sei stato invitato");
}







// if (emailtrovata === true){
// }

// // SE NON SEI NELLA LISTA

