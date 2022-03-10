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