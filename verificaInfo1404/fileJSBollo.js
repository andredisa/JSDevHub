class Veicolo {
    constructor() {
        this.tipologia = "";
        this.codiceTelaio = "";
        this.tipoCarb = 0;
        this.potenzaCavalli = 0;
        this.costoBollo = 0;
    }
    calcolaBollo() {
        let lista = document.getElementById("selVeicolo");
        let tipo =  lista[lista.selectedIndex].text;
        if(tipo == "auto") {
            this.tipologia = 15;
        }
        else if(tipo == "moto") {
            this.tipologia = 8;
        }
        else if(tipo == "autobus") {
            this.tipologia = 35;
        }
        this.codiceTelaio = document.getElementById("codiceTelaio").value;
        //controllo telaio
        if(this.codiceTelaio.length == 8) {
            let somma = 0;
            for(let i = 0; i < 8; i++) {
                somma+=parseInt(this.codiceTelaio.charAt(i));
            }
            if(somma == 40) {
                //controllo carb
                this.tipoCarb = document.getElementById("tipoCarburante").value;
                if(this.tipoCarb == 0.5 || this.tipoCarb == 0.9 || this.tipoCarb == 0.2 || this.tipoCarb == 0) {
                    //controllo cavalli
                    this.potenzaCavalli = document.getElementById("cavalli").value;
                    if(this.potenzaCavalli > 7 && this.potenzaCavalli < 1000) {
                        if(this.potenzaCavalli > 280) {
                            this.tipoCarb = this.tipoCarb*2;
                        }
                        this.costoBollo = this.tipologia + this.tipoCarb * this.potenzaCavalli;
                        document.getElementById("costoBolloVis").innerHTML = this.costoBollo + " euro";
                        if(tipo == "auto") {
                            document.getElementById("immagine").src = "img/auto.jpg";
                        }
                        else if(tipo == "moto") {
                            document.getElementById("immagine").src = "img/moto.jpg";
                        }
                        else if(tipo == "autobus") {
                            document.getElementById("immagine").src = "img/autobus.jpg";
                        }
                    }
                    else {
                        alert("i cavalli devo essere compresi tra 7 e 1000");
                        document.getElementById("immagine").src = "img/x.jpg";
                        document.getElementById("costoBolloVis").innerHTML = "";
                    }
                }
                else {
                    alert("il carburante puo solo essere 0.5, 0, 0.2 o 0.9!");
                    document.getElementById("immagine").src = "img/x.jpg";
                    document.getElementById("costoBolloVis").innerHTML = "";
                }
            }
            else {
                alert("il codice telaio deve dare somma 40");
                document.getElementById("immagine").src = "img/x.jpg";
                document.getElementById("costoBolloVis").innerHTML = "";
            }
        }
        else {
            alert("il codice telaio deve essere di 8 cifre");
            document.getElementById("immagine").src = "img/x.jpg";
            document.getElementById("costoBolloVis").innerHTML = "";
        }
    }
}