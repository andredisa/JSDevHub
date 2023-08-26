class SlotMachine {
    constructor() {
        this.numero1 = 0;
        this.numero2 = 0;
        this.numero3 = 0;
        this.numero4 = 0;
        this.cifraScommessa = 0;
        this.crediti = 100;
    }
    Gira() {
        let lista = document.getElementById("sel1");
        this.cifraScommessa =  lista[lista.selectedIndex].text;
        if(this.crediti >= this.cifraScommessa) {
            this.crediti-= this.cifraScommessa;
            //pesco numero tra 0 e 2
            this.numero1 = Math.floor(Math.random()*3);
            this.numero2 = Math.floor(Math.random()*3);
            this.numero3 = Math.floor(Math.random()*3);
            this.numero4 = Math.floor(Math.random()*3);
            //imposto immagine numero 1
            if(this.numero1 == 0) {
                document.getElementById("img1").src="img/7.PNG";
            }
            else if(this.numero1 == 1) {
                document.getElementById("img1").src="img/Arancia.PNG";
            }
            else if(this.numero2 == 2) {
                document.getElementById("img1").src="img/Campana.PNG";
            }
            //numero 2
            if(this.numero2 == 0) {
                document.getElementById("img2").src="img/7.PNG";
            }
            else if(this.numero2 == 1) {
                document.getElementById("img2").src="img/Arancia.PNG";
            }
            else if(this.numero2 == 2) {
                document.getElementById("img2").src="img/Campana.PNG";
            }
            //num3
            if(this.numero3 == 0) {
                document.getElementById("img3").src="img/7.PNG";
            }
            else if(this.numero3 == 1) {
                document.getElementById("img3").src="img/Arancia.PNG";
            }
            else if(this.numero3 == 2) {
                document.getElementById("img3").src="img/Campana.PNG";
            }
            //num4
            if(this.numero4 == 0) {
                document.getElementById("img4").src="img/7.PNG";
            }
            else if(this.numero4 == 1) {
                document.getElementById("img4").src="img/Arancia.PNG";
            }
            else if(this.numero4 == 2) {
                document.getElementById("img4").src="img/Campana.PNG";
            }
            if(this.numero1 == this.numero2 && this.numero1 == this.numero3 && this.numero1 == this.numero4) {
                this.crediti += this.cifraScommessa*10;
            }
            else {
                let vettoreTmp = [this.numero1, this.numero2, this.numero3, this.numero4];
                //scorro 0 = figura del 7, 1 = figura arancia, 2 = figura campana
                //per ogni figura vedo quante volte si ripete
                for(let j = 0; j < 3; j++) {
                    let numeroUguali = 0;
                    //qua scorro i 4 numeri e controllo quante volte si ripete la figura
                    for(let i = 0; i < vettoreTmp.length; i++) {
                        if(vettoreTmp[i] == j) {
                            numeroUguali += 1;
                        }
                        if(numeroUguali == 3) {
                            this.crediti += this.cifraScommessa*5;
                        }
                    }
                }      
            }
            document.getElementById("cred").innerHTML = this.crediti;
        }
        else {
            alert("non hai abbastanza crediti");
        }
    }
    Resetta() {
        this.numero1 = 0;
        this.numero2 = 0;
        this.numero3 = 0;
        this.numero4 = 0;
        this.cifraScommessa = 0;
        this.crediti = 100;
        document.getElementById("img1").src="img/7.PNG";
        document.getElementById("img2").src="img/7.PNG";
        document.getElementById("img3").src="img/7.PNG";
        document.getElementById("img4").src="img/7.PNG";
        document.getElementById("cred").innerHTML = this.crediti;
    }
}