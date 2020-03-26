/*Fizz Buzz test:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.*/


// dichiaro le variabili dei multipli
var multiploTre, multiploCinque, multiploTreCinque;

// creo un ciclo for di numeri da 1 a 100 con condizionali per i diversi multipli

for (var i = 1; i <= 100; i++) {

  // assegno un valore ai multipli
  multiploTre = i / 3;

  multiploCinque = i / 5;

  multiploTreCinque = multiploTre && multiploCinque;

  // trovo i multipli di tre e li stampo
  if (multiploTre == parseInt(multiploTre)) {
    console.log("Fizz");
  } else if (multiploTreCinque == parseInt(multiploTreCinque)) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }



}
