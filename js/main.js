// variabili
var list = ["Totti", "Vera", "Anderson", "Manna", "Bianchi"];
console.log(list);
var surnameUser = prompt('Inserisci il tuo Cognome!');
var ranking;

// surnamen in the list
list.push(surnameUser);
console.log(list );

// ordinary list
list.sort();

// position allocated
for (var i = 0; i < list.length; i++) {
  var position = list[i];
  if (surnameUser == position) {
    ranking = i;
  }
}

// stamp
document.getElementById('surnamelist').innerHTML = surnameUser + " sei in posizione: " + ranking;
