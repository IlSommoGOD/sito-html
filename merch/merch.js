var DIMcarrello = 10
var prodotticarrello=new Array(DIMcarrello)
var maxCopie = 5

if(localStorage.getItem('carrello')){
   prodotticarrello=JSON.parse(localStorage.getItem('carrello'))
   console.log(JSON.parse(localStorage.getItem('carrello')));
}

function aggiungi(nomeprodotto, costoprodotto, immagineprodotto){
    var quantita = 1
    var prodotto = {
        nome: nomeprodotto,
        prezzo: costoprodotto,
        immagine: immagineprodotto,
        quantita: quantita
    }
    //controllo se il prodotto è già presente
    var n=0;
    var nonpresente = 1;
    for(; n<=DIMcarrello; n++){
        if(prodotticarrello[n]!=null){
            if(prodotticarrello[n].nome==nomeprodotto){
            if (prodotticarrello[n].quantita < maxCopie){
                prodotticarrello[n].quantita++;
                nonpresente = 0;
                console.log(prodotticarrello[n].nome + ' acquistato ' + prodotticarrello[n].quantita + ' volte!');
                break
            }else{
                alert('Quantità massima per acquisto di ' + nomeprodotto + ' raggiunta!')
                console.log('Quantità massima per acquisto di ' + nomeprodotto + ' raggiunta!')
                return
            }
        }}
    }
    //aggiungo il prodotto al vettore se non già presente
    if(nonpresente){
        console.log('prodotto non presente');
        for(n=0; n<=DIMcarrello; n++){
            if(prodotticarrello[n]==null){
                prodotticarrello[n] = prodotto
                console.log(prodotticarrello[n].nome + ' acquistato!');
                break
            }
        }
    }
    if (n>=DIMcarrello){
        alert('Carrello pieno')
        return
    }
    if (localStorage.getItem('carrello')) {
      var carrello = JSON.parse(localStorage.getItem('carrello'))
    }
    localStorage.setItem('carrello', JSON.stringify(prodotticarrello));
}