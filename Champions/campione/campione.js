var campione
var elencoskins
var skinselezionata = 1
if(localStorage.getItem('campione')){
    campione = JSON.parse(localStorage.getItem('campione'))
    elencoskins = campione.skins
    //console.log(JSON.parse(localStorage.getItem('carrello')));
 }

function getdati(){
    console.log(campione.name);
    var title = document.createElement("title");
    var newDiv = document.createElement("div");
    var sfondo = document.createElement('img');
    var gradiente = document.createElement('div');
    var titolo = document.createElement('div');
    var nome = document.createElement('div');
    var lore = document.createElement('div');

    var percorsosfondo = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+ campione.id +'_0.jpg'
    sfondo.src= percorsosfondo
    console.log(percorsosfondo);
    
    var gradientetxt = document.createTextNode(' ')
    var titletxt = document.createTextNode(campione.name)
    var titolotxt = document.createTextNode(campione.title)
    var nometxt = document.createTextNode(campione.name)
    var loretxt = document.createTextNode(campione.blurb)
    title.appendChild(titletxt)
    gradiente.appendChild(gradientetxt)
    titolo.appendChild(titolotxt)
    nome.appendChild(nometxt)
    lore.appendChild(loretxt)
    
    gradiente.className = 'gradiente'
    sfondo.className = 'sfondo'
    titolo.className = 'titolo'
    nome.className = 'nome'
    lore.className = 'lore'
    newDiv.className = 'pagina'
    
    newDiv.appendChild(title);
    newDiv.appendChild(titolo);
    newDiv.appendChild(gradiente)
    newDiv.appendChild(sfondo);
    newDiv.appendChild(titolo);
    newDiv.appendChild(nome);
    newDiv.appendChild(lore);

    const fondo = document.getElementById("fondointestazione");
    document.body.insertBefore(newDiv,fondo);
}

function getskins(){
    var newDiv = document.createElement('div')
    var splashskinselezionata = document.createElement('img')

    var splashurl = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + campione.id + "_" + skinselezionata + ".jpg" 
    splashskinselezionata.src = splashurl
    console.log(campione.skins[skinselezionata].name + " " + splashurl);

    //aggiungo elenco skins
    console.log(elencoskins);
    var skins = document.createElement('table')
    var elencosplashskins = document.createElement('tr')
    for(i=0 ; elencoskins[i]!=null ; i++){
        var immagine = document.createElement('div')
        var nome = document.createElement('div')
        var slotskin = document.createElement('td')
        var immagineskin = document.createElement('img')
        var nomeskintxt = elencoskins[i].name
        var nomeskin = document.createTextNode(nomeskintxt)
        immagineskin.src = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + campione.id + "_" + campione.skins[i].num + ".jpg" 
        console.log(campione.skins[i].num + "aggiunta");
        immagine.appendChild(immagineskin)
        nome.appendChild(nomeskin)
        console.log(nomeskin);
        nome.className = 'nomeskin'
        immagineskin.className = 'immagine'
        slotskin.className = 'slotskin'
        slotskin.appendChild(immagine)
        slotskin.appendChild(nome)
        const posizioneskin = i
        slotskin.addEventListener("click", function(){
            selezionaskin(posizioneskin)
        })
        elencosplashskins.appendChild(slotskin)
    }
    skins.appendChild(elencosplashskins)
    elencosplashskins.className = 'elencosplashskins'
    skins.className = 'skins'
    
    splashskinselezionata.id = 'splashskinselezionata'
    splashskinselezionata.className = 'splashskinselezionata'
    newDiv.className = 'skinselector'

    newDiv.appendChild(splashskinselezionata)
    newDiv.appendChild(skins)
    const fondo = document.getElementById("fondoskinselector");
    document.body.insertBefore(newDiv,fondo);
}

function selezionaskin(posizioneskin){
    var splashskinselezionata = document.getElementById("splashskinselezionata") 
    splashskinselezionata.src = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + campione.id + "_" + campione.skins[posizioneskin].num + ".jpg" 
}

window.addEventListener('load', (event) => {
    getdati()
    getskins()
});