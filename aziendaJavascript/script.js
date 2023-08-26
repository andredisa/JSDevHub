function compilaCampi(){
    var azienda=document.getElementById("azienda").value;
    var prodotto=document.getElementById("prodotto").value;
    var giorno=parseInt(document.getElementById("giorno").value);
    var mese=document.getElementById("mese").value;
    var anno=parseInt(document.getElementById("anno").value);
    var acquisti=parseInt(document.getElementById("numAcquiti").value)
    var prezzo=parseFloat(document.getElementById("prezzo").value);

    if(!isNaN(azienda) || azienda === ""){
        alert("ERRORE! IL CAMPO AZIENDA NON PU0' ESSERE VUOTO O CONTENERE NUMERI");
        return false;
    }

    if(!isNaN(prodotto) || prodotto === ""){
        alert("ERRORE! IL CAMPO PRODOTTO NON PU0' ESSERE VUOTO O CONTENERE NUMERI");
        return false;
    }

    if(isNaN(giorno) || giorno < 1 || giorno > 31){
        alert("ERRORE! IL CAMPO GIORNO NON DEVE CONTENERE CARATTERI E NON DEVE ESSERE 0 O SUPERIORE DI 31");
        return false;
    }

    if(isNaN(anno) || anno < 2000 || anno>2017){
        alert("ERRORE! L'ANNO DEVE ESSERE UN NUMERO / DEVE ESSERE COMPRESO TRA 2000 E 2017");
        return false;    
    }

    if(isNaN(acquisti) || acquisti < 1 || acquisti > 99){
        alert("ERRORE! I PRODOTTI ACQUISTATI DEVE ESSERE UN NUMERO / DEVE ESSERE COMPRESO TRA 1 E 999");
        return false;    }

    if(isNaN(prezzo) || prezzo < 1 || prezzo > 999){
        alert("ERRORE! IL PREZZO DEVE ESSERE UN NUMERO / DEVE ESSERE COMPRESO TRA 1 E 999");
        return false;
    }
    return true;
}

function codiceAcq(){
    if(compilaCampi()){
    var azienda= document.getElementById("azienda").value.substring(0,4).toUpperCase();
    var prodotto= document.getElementById("prodotto").value.substring(0,3).toUpperCase();
    var giorno=document.getElementById("giorno").value.padStart(2,"0").toUpperCase();
    var mese= document.getElementById("mese").value.substring(0,3).toUpperCase();
    var anno= document.getElementById("anno").value.substring(2).toUpperCase();
    var acquisti=document.getElementById("numAcquiti").value.padStart(2,"0").toUpperCase();
    var prezzo=document.getElementById("prezzo").value.padStart(3,"0").toUpperCase();
    
    var code=azienda+prodotto+giorno+mese+anno+acquisti+prezzo;
    document.getElementById("codiceAcquisto").value = code;
    }

}

function reset(){
    var azienda=document.getElementById("azienda").value="";
    var azienda=document.getElementById("prodotto").value="";
    var azienda=document.getElementById("giorno").value="";
    var mese=document.getElementById("mese").value="";
    var azienda=document.getElementById("annp").value="";
    var azienda=document.getElementById("numAcquiti").value="";
    var azienda=document.getElementById("prezzo").value="";
    var code= document.getElementById("codiceAcquisto").value="";

}

