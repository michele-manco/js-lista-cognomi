// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui  il nuovo utente si trova.
var list = ['Cave', 'Smith', 'Morrisey'];
var surname = prompt('digita il tuo cognome');
console.log(surname);
surname = surname.toUpperCase();
list.push(surname);
console.log(list);
list.sort();
console.log(list);
