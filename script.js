// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// funzione per comporre array di lunghezza totLength con numeri compresi tra min e max
function getRndDifferentNumbers (min,max, totLength){

  var arrayTot = [];
  var array = [];

  do{

    var minRnd = min;
    var maxRnd = max - minRnd + 1;
    var numRnd = Math.floor(Math.random()*maxRnd)+minRnd;
    var index = arrayTot.indexOf(numRnd);
    arrayTot.push(numRnd);

    if (index == -1){
        array.push(numRnd)
      }

  }  while (array.length < totLength)

  return array;

}

function insertNumber(){
  var userNumbers = [];
  for(var i=0;i<5;i++){
    var userNumber = parseInt(prompt("Dammi un numero"));
    userNumbers.push(userNumber);
  }
  console.log("num utente ",userNumbers);

  if(casualNumbers.includes(userNumbers[0])){
    console.log("ci siamo")
  }else {
    console.log("non ci siamo");
  }

}

function timeout(){
  setTimeout(insertNumber, 2000);
}


var casualNumbers =  getRndDifferentNumbers(1,20,5);
console.log(casualNumbers);
var casualNumbersMessage = alert("Numeri: " + casualNumbers);
timeout();
