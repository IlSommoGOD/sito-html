var click=0;
function gioca(){
    var quotes = ["NO!" , "TOCCA UN PO D'ERBA PIUTTOSTO" , "ragazzi perfavore non scaricate i giochini sul computer dela scuola" , "NON PUOI GIOCARE AL LAVORO!" , "LO DICO AL MASA!" , "VAI A LETTO!" , "SEI LICENZIATO!" , "SPEGNI IL COMPUTER!" , "SMETTILA DI GIOCARE AI GIOCHINI CHE NON TI PORTANO A NULLA NELLA VITA E VAI A STUDIARE!", "meglio di no, dai"];
    tmp = click;
    while(tmp == click)click = Math.floor(Math.random() * quotes.length);
    document.getElementById("gioca").innerHTML = quotes[click];
    console.log(click);
}
function cambiacampione(nomecampione){
    document.getElementById("nome").innerHTML = nomecampione;
    if(nomecampione=="AKALI"){
        document.getElementById("immaginecampione").src = "akali.webp";
        document.getElementById("descrizione").innerHTML = "Simp queen";
    }else if(nomecampione=="YASUO"){
        document.getElementById("immaginecampione").src = "yasuo.webp";
        document.getElementById("descrizione").innerHTML = "0/10 powerspike";
    }else if(nomecampione=="LUX"){
        document.getElementById("immaginecampione").src = "lux.webp";
        document.getElementById("descrizione").innerHTML = "Cash machine della riot 🤑💰💸";
    }else if(nomecampione=="JINX"){
        document.getElementById("immaginecampione").src = "jinx.webp";
        document.getElementById("descrizione").innerHTML = "OMG arcane so good UwU";
    }else if(nomecampione=="THRESH"){
        document.getElementById("immaginecampione").src = "thresh.webp";
        document.getElementById("descrizione").innerHTML = "Gioco thresh pk sono skillato 🤓☝<br>(procede a missare tutti gli hook)";
    }else if(nomecampione=="LEONA"){
        document.getElementById("immaginecampione").src = "leona.webp";
        document.getElementById("descrizione").innerHTML = "😴😴😴😴😴";
    }
}

function dettagliArena(){
    document.getElementById("DETTAGLI").innerHTML = "La solita modalità sRand() sbilanciata e basata sulla fortuna";
}
function mostratendina(){
    document.getElementById("tendina").classList.toggle("show");
    document.getElementById("intestazione").classList.toggle("sfondobianco");
    console.log("toggle tendina");
}