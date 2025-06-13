var DIMcarrello = 10
var prodotticarrello=new Array(DIMcarrello)
var subtotale = 0.0
var maxCopie = 5

if(localStorage.getItem('carrello')){
   prodotticarrello=JSON.parse(localStorage.getItem('carrello'))
   //console.log(JSON.parse(localStorage.getItem('carrello')));
}

function contaelementi(){
    var conta=0
    for(var i=0;i<DIMcarrello;i++){
        if(prodotticarrello[i]!=null){
            conta++
            subtotale += parseFloat(prodotticarrello[i].prezzo*prodotticarrello[i].quantita)
            console.log(subtotale);
        }
        document.getElementById("subtotale").innerHTML = subtotale.toFixed(2) + " $"
    }
    //console.log(conta);
    document.getElementById("elementicarrello").innerText = "Carrello (" + conta + ")" 
}

function svuotacarrello(){
    localStorage.clear()
    prodotticarrello=new Array(DIMcarrello)
    location.reload()
}

function aggiungielementi(){
    for(var i=0;i<DIMcarrello;i++){
        if(prodotticarrello[i]!=null){
            aggiungielemento(prodotticarrello[i].nome,prodotticarrello[i].prezzo,prodotticarrello[i].immagine,prodotticarrello[i].quantita,i)
            console.log('aggiunto ' + prodotticarrello[i].nome);
        }
    }
}

function rimuovielemento(indice){
    prodotticarrello[indice] = null
    localStorage.setItem('carrello', JSON.stringify(prodotticarrello));
    location.reload()
}

function pagamento(){
    alert("acquisto eseguito!")
    svuotacarrello()
}

function aggiungielemento(nomeprodotto, costoprodotto, immagineprodotto, quantita, posizione){
    var newDiv = document.createElement("div");
    var nome = document.createElement("p");
    var costo = document.createElement("p");
    var bottonerimuovi = document.createElement('button');
    var nometxt = document.createTextNode(nomeprodotto);
    costoprodotto = costoprodotto * quantita
    var costotxt = document.createTextNode(costoprodotto + " $");
    var immagine = document.createElement('img');
    var costoword = document.createElement('p');
    var costowordtxt = document.createTextNode('Quantita');
    var costotendina = document.createElement('button');
    var costotendinatxt = document.createTextNode(quantita)
    var bottontetxt = document.createTextNode('Rimuovi');

    immagine.src=immagineprodotto;
    nome.appendChild(nometxt);
    costo.appendChild(costotxt);
    bottonerimuovi.appendChild(bottontetxt);
    costo.src= immagineprodotto;
    newDiv.className = "elemento";
    nome.className = "nome";
    costo.className = "costo";
    immagine.className = "immagine";
    costoword.appendChild(costowordtxt);
    costoword.className = "costoword";
    bottonerimuovi.className = "rimuovi";
    bottonerimuovi.addEventListener("click", function(){
        rimuovielemento(posizione)
    })

    costotendina.appendChild(costotendinatxt);
    costotendina.className = "costotendina";

    newDiv.appendChild(nome);
    newDiv.appendChild(costo);
    newDiv.appendChild(immagine);
    newDiv.appendChild(costoword);
    //aggiungo la tendina
    for(var i = 1 ; i <= maxCopie ; i++){
        console.log(i);
        var cambiaquantita = document.createElement('button');
        var cambiaquantitatxt = document.createTextNode(i);
        cambiaquantita.className = "cambiaquantita";
        cambiaquantita.appendChild(cambiaquantitatxt);
        const j = i
        cambiaquantita.addEventListener("click", function(){
            cambiavalorequantita(j, posizione)
        })
        cambiaquantita.setAttribute('id', 'cambiaquantita')
        newDiv.appendChild(cambiaquantita)
    }
    costotendina.addEventListener("click", function(){
        mostratendina(posizione)
    })
    costotendina.setAttribute('id', 'costotendina')
    newDiv.appendChild(costotendina);
    newDiv.appendChild(bottonerimuovi);

    const fondo = document.getElementById("fondo");
    document.body.insertBefore(newDiv,fondo);
}

function cambiavalorequantita(nuovaQuantita, posizione){
    prodotticarrello[posizione].quantita = nuovaQuantita;
    console.log('nuovo valore ' + prodotticarrello[posizione].quantita);
    localStorage.setItem('carrello', JSON.stringify(prodotticarrello));
    location.reload();
}

function mostratendina(posizione){
    //document.getElementById("cambiaquantita").classList.toggle("show");
    var duplex = document.querySelectorAll("[id=cambiaquantita]")
    for(var i = 0 ; i < maxCopie ; i++){
        duplex[posizione * maxCopie + i].classList.toggle("show");
    }
}

window.addEventListener('load', (event) => {
    contaelementi();
    aggiungielementi();
});