var casualNumbers;

// funzione per comporre array di lunghezza totLength con numeri compresi tra min e max




function init(){
  casualNumbers =  getRndDifferentNumbers(1,20,5);
  console.log(casualNumbers);
  var casualNumbersMessage = alert("Numeri: " + casualNumbers);
  var waitingTime = setTimeout(insertNumber, 30*1000);
}

// init();





// VAR FISSE
var my5Numbers = getRndDifferentNumbers (1,20,5);
var myH3 = document.getElementById("principal-numbers");
var myBtn = document.getElementById("number-generator");
var myInputs = document.getElementsByClassName("choose-number");
var sec;
var clock;
var myCheck = document.getElementById("button-check");


// funzione per generare 5 numeri buoni
function getRndDifferentNumbers (min,max,totLength){

  var arrayTot = [];
  var array = [];

  do{

    var numRnd = Math.floor(Math.random()*max)+min;
    var index = arrayTot.indexOf(numRnd);
    arrayTot.push(numRnd);

    if (index == -1){
        array.push(numRnd)
      }

  }  while (array.length < totLength)

  return array;

}


// funzione per interrompere countdown, nascondere i numeri e mostrare input
function tick(){
  document.getElementById("timer").innerHTML = sec--;
  if(sec < 0){
    clearInterval(clock);
    document.getElementById("timer").innerHTML = "STOP";
    myH3.innerHTML = "NUMERI NASCOSTI";
    for(var i=0;i<myInputs.length;i++){
      var myInput = myInputs[i];
      myInput.style.visibility = 'visible';
    }

  }
}


// funzione per far partire countdown
function countdown(){
  sec = 4;
  clock = setInterval(tick, 1000);
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

function validateNumber(){

  var inputtedNumbers = [];
  var insertedStr = document.getElementById("choose-number").value;
  var insertedNumber = parseInt(insertedStr);



    if (Number.isNaN(insertedNumber)){
      alert ("numero non valido, scrivine un altro");
    } else {
      inputtedNumbers.push(insertedNumber);
    }

  console.log("numeri ok :" , my5Numbers, "numeri inseriti :", inputtedNumbers);
  // return (inputtedNumbers.length);

}

// FUNZIONI BOTTONE PER GENERARE NUMERI CHE POI SI VANNO A NASCONDERE, RESTITUENDOMI INPUT
myBtn.addEventListener("click", function(){

  myH3.innerHTML = my5Numbers;
  countdown();

});


// BOTTONE VERIFICA NUMERI CORRETTI
myCheck.addEventListener("click" , function(){

  validateNumber();


});
