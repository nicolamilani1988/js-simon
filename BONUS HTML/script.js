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
var myInputs = document.getElementsByClassName("choose-number");
var sec;
var clock;


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


// funzione per interrompere countdown, nascondere i numeri e mostrare 5 input
function tick(){
  document.getElementById("timer").innerHTML = sec--;
  if(sec < 0){
    clearInterval(clock);
    document.getElementById("timer").innerHTML = "Scrivi i numeri che hai memorizzato";
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


// funzione per estrarre num input e confrontarli con i 5
function validateNumber(){

  var insertedValues = document.getElementsByClassName("choose-number");
  var inputtedNumbers = [];

  for(var i=0;i<insertedValues.length;i++){

    var insertedValue = parseInt(insertedValues[i].value);
    if (Number.isNaN(insertedValue)){
      alert ("numero non valido, scrivine un altro");
    } else {
      inputtedNumbers.push(insertedValue);
    }

  }

  console.log("numeri ok :" , my5Numbers, "numeri inseriti :", inputtedNumbers);

  var okNumbers =[];
  for(var i=0;i<inputtedNumbers.length;i++){
    if(my5Numbers.includes(inputtedNumbers[i])){
      okNumbers.push(inputtedNumbers[i]);
    }
  }

    if(okNumbers.length == 0){
      document.getElementById("results").innerHTML = "Numeri indovinati: Nessuno";
    } else {
      document.getElementById("results").innerHTML = "Numeri indovinati: " + okNumbers;
    }


}

// FUNZIONI BOTTONE PER GENERARE NUMERI CHE POI SI VANNO A NASCONDERE, RESTITUENDOMI INPUT
var myBtn = document.getElementById("number-generator");
myBtn.addEventListener("click", function(){

  myH3.innerHTML = my5Numbers;
  countdown();

});


// BOTTONE VERIFICA NUMERI CORRETTI
var myCheck = document.getElementById("button-check");
myCheck.addEventListener("click" , function(){

  validateNumber();


});
