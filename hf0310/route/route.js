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

const uuid = require('uuid');

const rendszamokListajaMw = require('../middleWare/rendszamoklistaja');
const rendszamMw = require('../middleWare/rendszam');
const ujRendszamMw = require('../middleWare/ujrendszam');
const egyRendszamMw = require('../middleWare/egyrendszam');
const rendszamKeresMw = require('../middleWare/rendszamkeres');
const rendszamModositasMw = require('../middleWare/rendszammodositas');

function addRoutes(app, db, myModel){
    
    const objRep = {
        myModel,
        db,
        uuid
    }

    app.get('/etelek', rendszamokListajaMw(objRep));
    app.get('/etel/:id', rendszamMw(objRep));
    app.post('/etel', ujRendszamMw(objRep));
    app.delete('/etel/:id', rendszamMw(objRep), egyRendszamMw(objRep));
    app.post('/search', rendszamKeresMw(objRep));
    app.patch('/etel/:id', rendszamMw(objRep), rendszamModositasMw(objRep));
}



module.exports = addRoutes;