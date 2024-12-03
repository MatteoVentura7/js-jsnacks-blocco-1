/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore */

// 1 - Chiedo il primo numero all'utente
const num1 = Number(prompt("Inserisci il primo numero"));
// 2 - Chiedo il secondo numero all'utente
const num2 = Number(prompt("Inserisci il secondo numero"));

if (num1 > num2) {
    console.log(num1);
} else if(num2 > num1) {
    console.log(num2);
} else if(num1 == num2) {
    console.log('i numeri sono uguali');
}