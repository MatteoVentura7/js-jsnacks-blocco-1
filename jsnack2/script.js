// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = [
    'Nathan',
    'Ed',
    'Fabio',
    'Phil',
    'Carlo',
    'Lewis',
    'Luca'
  ];

  // 1 - Chiedo il nome all'utente
const NomeUtente =(prompt("Inserisci il nome"));

/* Controllo usando includes
 if (invitati.includes(NomeUtente)) {
     alert(`Puoi partecipare alla festa`);
 } else {
     alert(`Mi dispiace non puoi partecipare alla festa`);
 } */

let trovato = false;

// Controllo usando un ciclo for
for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === NomeUtente) {
        trovato = true;
        break;
    }
}

if (trovato) {
    alert(`Puoi partecipare alla festa`);
} else {
    alert(`Mi dispiace non puoi partecipare alla festa`);
}