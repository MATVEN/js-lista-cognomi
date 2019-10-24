// variabili
var list ["Totti", "Vena", "Anderson", "Manna", "Bianchi"]
var surnameUser;
var ranking;
var position = list[i];

// ask surname user
surnameUser = prompt("Inssrisci il tuo Cognome!");

// surnamen in the list
list.push(surnameUser);

// ordinary list
surnameUser.sort();

// position allocated
for (var i = 0; i < array.length; i++) {
  if (surnameUser == position) {
    ranking = i;
  }
}

// stamp
document.getElementById('surnamelist').innerHTML = surnameUser + "Sei in posizione: " + ranking;
