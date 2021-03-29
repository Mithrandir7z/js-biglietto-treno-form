//AL CLICK DEL BOTTONE GENERA: prendere in input il valore di NomeCognome // KmDaPercorrere
//e prendere in input il valore di eta-utente

//usare gli if per calcolare il prezzo del biglietto con o senza sconto

//al click del tasto genera stampa tutto
//al click del tasto cancella stampa valore '' a tutto




//AL CLICK DEL BOTTONE GENERA: button-genera // KmDaPercorrere
//e prendere in input il valore di eta-utente
var generaInput = document.getElementById("button-genera");

generaInput.addEventListener("click", function(){

    //Prendere in input il valore di NomeCognome
    var NomeCognome = document.getElementById("nome-cognome-input").value;

    //Prendere in input il valore di km
    var chilometriUtente = document.getElementById("km-da-percorrere-input").value;

    //Prendere in input il valore di eta-utente e settare degli if per verificare l'età, 
    //dopo di che calcolare lo sconto.
    var etaUtente = document.getElementById("eta-utente").value;

    //Calcolo dei kilometriTotali * cost al Km
    var costoAlKm = 0.21;
    var costoTotale = chilometriUtente * costoAlKm;
    console.log(costoTotale); 

    //calcolo dello sconto in base al valore scelto nel tag select/option
    var etaMaggiore = 0;
    var etaMinore = 0;
    var etaOver = 0;

    if (etaUtente == "minorenne") {
        etaMinore = 1;
        console.log(etaMinore);
    } else if (etaUtente == "over") {
        etaOver = 1;
        console.log(etaOver);
    }

    //calcolo sconto
    if (etaOver == 1) {
        costoTotale = costoTotale - (costoTotale * 40 / 100);
        console.log(costoTotale);
    } else if (etaMinore == 1) {
        costoTotale = costoTotale - (costoTotale * 20 / 100);
    }


    //stampa
    

});
