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
etelek listazasa
GET : /etelek
egy etel listazasa
GET: /etel/:id
etel torlese
DELETE : /etel/:id
etel keresese 
POST : /keres
etel modositasa
PATCH : /etel/:id
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


const express = require('express')
const app = express()
const port = 3000
const { v4 : uuidv4 } = require('uuid');


app.get('/', (req, res) => {
  res.status(200).send(`helloo node id: ${uuidv4()}`);
})

app.get('etelek/:id', etelekListajaMw),

app.post()
app.listen(port, () => {
  console.log(`Az alkalmazás portja: ${port}`)
})