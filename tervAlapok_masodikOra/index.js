//2.ora
//tervezés során a backend, frontend egyutt mukodeset fektetjuk le, dokumentacio keszul a tervezes soran, minden egyes tevekenysegre keszul egy ilyen leiras, szabad szoveges formatumu es nincs megkotes 

//bodyparser- adatcsere formaja JSON, es ez segit h minel egyszerubben el tudjuk kuldeni
/*

*/

//nodemon
/*
powershellben = Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass -Force;
majd
./node_modules/.bin/nodemon
*/

//alkalmazast kell tervezni
/*1. feladat milyen alkalmazast akarunk kesziteni, étel nyilvántartás = etel{
    id: szam?
    nev: string,
    szint: szam(0-5, 0 ha szamba se veszem, 5 ha nagyon szeretem)
}

Mit akarok ezekkel az etelekkel?
uj etel felvétele
POST : /etel
be is ki paraméterek
  nev:
  szint:

  id
  nev
  szintet

etelek listazasa
GET : /etelek
bemenet null
ételek listája JSON formátum


egy etel listazasa
GET: /etel/:id
null is lehet
Egy étel JSON formátum


etel torlese
DELETE : /etel/:id
etel keresese 
a törölt étel json formában


POST : /keres
nev: érték vagy null
szint: érték vagy null
ételek listája

etel modositasa
PATCH : /etel/:id
null
módosított étel JSON-ben
*/

/*
uuid
npm install uuid

${uuid.uuidv4}
genaralas.megadás
*/
/*
CRUD model
C -create SQL: INSERT INTO : (POST)
R -read   SQL: SELECT : (GET)
U -update SQL: UPDATE : (PUT/PATCH)
D -delete SQL: DELETE : (DELETE)


*/

//3.ora
/*
lehet benne tobb metodus, azok segitenek majd
nev hasznalat figyelése

*/

/*
hf
ennek a tervezesnek mintajara
egy végtelen nagysagu parkolohaz be es kiengedo kapujat kell leprogramozni addig h a tervet el kell kesziteni (backend tervet), beengedes rendzsam alapjan illetve ido belyeget teszunk a beengedeshez, amikor pedig kimegy az auto akkor ki kell torolni (azaz elment a parkolohazbol)
modositas muveletre utvonal = rendszamot modositani
keresni autora v idopontra idobelyeg, rendszam alapjan
teljes mw struktura ennek alapjan
postman teszteket elo kesziteni

hf
index.js, route.js oltoztetni fel megjegyzesekkel, mit milrt
*/

const express = require('express');
const app = express();
const port = 3000;
const { v4 : uuidv4 } = require('uuid');


const bodyParser = require('body-parser');

app.use(bodyParser.json()); //mindig jsonben szeretnem latni



app.get('/', (req, res, next) => {
  res.status(200).send(`helloo node id: ${uuidv4()}`);
})



const {initDatabase} = require('./services/db');

const addRoutes = require('./route/route');

app.use(express.static('public')); //statikus root

initDatabase( err, (db, myModel) => {
  if(err){
    return console.error(`DB error:${err}`); //későbbi fejlesztés esetén sem irunk utana ha ott a return
  }

  addRoutes(app, db, myModel);
})




app.listen(port, () => {
  console.log(`Az alkalmazás portja: ${port}`)
})