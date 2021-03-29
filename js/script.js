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
        document.getElementById("offerta").innerHTML = "Sconto <br> over 65";
        console.log(costoTotale);
    } else if (etaMinore == 1) {
        costoTotale = costoTotale - (costoTotale * 20 / 100);
        document.getElementById("offerta").innerHTML = "Sconto <br> over 65";
    } else {
        document.getElementById("offerta").innerHTML = "Nessuna <br> offerta";
    }

    //stampa il costo del biglietto
    document.getElementById("costo-biglietto").innerHTML = costoTotale;

    //genera e stampa un random numero carrozza da 1 a 10
    var carrozza = Math.floor((Math.random() * 10) + 1);
    document.getElementById("carrozza").innerHTML = carrozza;

    //Genera e stampa un random numero Codice CP da 90 000 a 99 000
    var codiceCp = Math.floor((Math.random() * 99000) + 90000);
    document.getElementById("codice-cp").innerHTML = codiceCp;

    //stampa il nome passeggero
    document.getElementById("nome-passeggero").innerHTML = NomeCognome;


    //stampa: Prendere un div hidden e metterlo in display: block;
    // variabile.className(ti dice sto cambiando il nome della classe dell'elemento) = variabile.classList(ti dice sto mantenendo le classi scritte precedentemente) = " red"(ti dice sto aggiungendo la classe " red" effettivamente);
    var contenuto = document.getElementById("hidden").innerHTML;
    contenuto.className = contenuto.classList = " visible";
    // Cosi si concatenano le classi e non si sovrascrivono.

});
