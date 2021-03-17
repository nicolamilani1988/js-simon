var casualNumbers;

// funzione per comporre array di lunghezza totLength con numeri compresi tra min e max
function getRndDifferentNumbers (){

  var arrayTot = [];
  var array = [];

  do{

    var numRnd = Math.floor(Math.random()*20)+1;
    var index = arrayTot.indexOf(numRnd);
    arrayTot.push(numRnd);

    if (index == -1){
        array.push(numRnd)
      }

  }  while (array.length < 5)

  myH3.innerHTML = array;

}

function insertNumber(){
  var userNumbers = [];
  while(userNumbers.length < 5){
    var userNumber = parseInt(prompt("Dammi un numero"));
    if(userNumbers.indexOf(userNumber) >=0 || Number.isNaN(userNumber)){
      alert("dammi numero nuovo");
    } else {
      userNumbers.push(userNumber);
    }
  }
  console.log("num utente ",userNumbers);

  var okNumbers =[];
  for(var i=0;i<userNumbers.length;i++){
    if(casualNumbers.includes(userNumbers[i])){
      okNumbers.push(userNumbers[i]);
    }
  }
  console.log("hai indovinato i seguenti numeri :" , okNumbers);
  var result = okNumbers.length;
  console.log("hai memorizzato ", result, " numeri");
}


function init(){
  casualNumbers =  getRndDifferentNumbers(1,20,5);
  console.log(casualNumbers);
  var casualNumbersMessage = alert("Numeri: " + casualNumbers);
  var waitingTime = setTimeout(insertNumber, 30*1000);
}

// init();

// var number = document.getElementById("input-1").value;
var myH3 = document.getElementById("principal-numbers");
var myBtn = document.getElementById("number-generator");

myBtn.addEventListener("click", getRndDifferentNumbers);
