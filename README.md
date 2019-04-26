# TLE3-4 Leaseplanner

## Project setup
De eerste keer dat je het project opstart moet je alle packeges binnenhalen voor de vue omgeving en de server.

```
npm install
cd server
npm install
```

### Development server starten
Om het project te te draaien moet de backend server en de front end gedraaid worden. Je hebt hier dus twee "cmd/terminal" vensters voor nodig.

```
//Front-end
npm run serve

//Back-end
cd server
node app.js
```
Als je deze commands hebt uitgevoerd ga je in je browser naar localhost:8080


## Info en conventies

#### Front-end (vue)
In de map public staat het index.html bestand waar evt meta tags etc toegevoegd worden. Hierin wordt alle vue code geladen.
Alle bestanden voor de front-end development zijn inde code in de map src te vinden. Hierin staat een map assets waar alle afbeeldingen/videos komen. Een map components voor alle vue componenten en een map styles waar alle sass bestanden staan. Alle vue componenten worden geladen in de App.vue via de router. Alle routes staan in routes.js.

###### Sass
Alle sass is opgedeeld in verschillende bestanden. Styling voor specifieke onderdelen hoort in een apart bestand. Alle code voor knoppen staat bijv in buttons. Als je een nieuw sass bestand aanmaakt mmoet je deze inporteren in global.scss dan wordt de partial automatisch ingeladen.


#### Back-end (node)
Back end code is te vinden in de server map. Je moet de server apart aanzetten met "node app.js". Via socket wordt op de ai pagina verbinding gemaakt met de server.