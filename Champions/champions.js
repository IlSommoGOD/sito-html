var campioni = new Array()

async function getdati(){
    
    const url = "https://ddragon.leagueoflegends.com/cdn/14.12.1/data/it_IT/champion.json"
    /*
    try{
        const res = await fetch(url)
        const json = await res.json()
        campioni = Object.values(json.data)
        console.log(campioni[0])
        for (let i=0; i < campioni.length; i++) {
          let nome = campioni[i].name
          console.log(nome)
        }

    }catch(error){
        alert(error)
    }
    */

    try {
        const data = await getData(url);
        console.log({ data });
        campioni = Object.values(data.data)

      } catch (error) {
        console.error({ error });
      }

    creapagina()

}

async function getData(url){
    const cacheVersion = 1;
    const cacheName = `myapp-${cacheVersion}`;
    let cachedData = await getCachedData(cacheName, url);

    if (cachedData) {
      console.log("Retrieved cached data");
      return cachedData;
    }
    console.log("Fetching fresh data");

    const cacheStorage = await caches.open(cacheName);
    await cacheStorage.add(url);
    cachedData = await getCachedData(cacheName, url);
    await deleteOldCaches(cacheName);

    return cachedData;
}
async function getCachedData(cacheName, url) {
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);
      
    if (!cachedResponse || !cachedResponse.ok) {
        return false;
    }
      
    return await cachedResponse.json();
}
async function deleteOldCaches(currentCache) {
    const keys = await caches.keys();
  
    for (const key of keys) {
      const isOurCache = key.startsWith("myapp-");
      if (currentCache === key || !isOurCache) {
        continue;
      }
      caches.delete(key);
    }
}

async function creapagina(){
    const fondo = document.getElementById("fondo");
    var newDiv = document.createElement('div')
    for(var i = 0 ; i < campioni.length ; i++){
        var immagineDiv = document.createElement('div')
        var immagine = document.createElement('img')
        immagine.loading = "lazy"
        var splashart = "https://ddragon.leagueoflegends.com/cdn/img/champion/centered/"+campioni[i].id+'_0.jpg'
        immagine.src = splashart
        console.log("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+campioni[i].id+'_0.jpg');
        
        
        var nomecampione = document.createElement('p')
        nomecampione.setAttribute("id","nomecampione")
        var nomecampionetxt = document.createTextNode(campioni[i].name)
        nomecampione.appendChild(nomecampionetxt)
        console.log(campioni[i].name);

        const pos = i
        immagine.addEventListener("click", function(){
            selezionacampione(pos)
        })
        const nome = nomecampione
        immagine.addEventListener("mouseover", function(){ 
            hover(nome)
        })
        immagine.addEventListener("mouseout", function(){ 
            hover(nome)
        })

        immagine.className = 'immagine'
        nomecampione.className = 'nomecampione'
        immagineDiv.className = 'slotcampione'
        immagineDiv.appendChild(immagine)
        immagineDiv.appendChild(nomecampione)
        newDiv.appendChild(immagineDiv)
    }
    newDiv.className = 'elencocampioni'
    console.log('immagini aggiunte!');
    fondo.appendChild(newDiv)
}

async function selezionacampione(posizione){
    /*campione = campioni[posizione]
    console.log(campione);
    campione = campioni[posizione]
    localStorage.setItem('campione', JSON.stringify(campione));*/
    var nomecampione = campioni[posizione].id
    var urlcampione = "https://ddragon.leagueoflegends.com/cdn/14.12.1/data/it_IT/champion/" + nomecampione + ".json"
    try {
        const data = await getData(urlcampione);
        console.log(nomecampione);
        campione = data.data[nomecampione]
        localStorage.setItem('campione', JSON.stringify(campione));
        window.location.href="campione/campione.html";
    } catch (error) {
        console.error({ error });
    }
    
}

function hover(scrittacampione){
    console.log('hover');
    scrittacampione.classList.toggle("cambiacolore");
}

window.addEventListener('load', (event) => {
    getdati()
});