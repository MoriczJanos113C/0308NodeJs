const uuid = require('uuid');

const etelekListajaMw = require('../middleWare/eteleklistaja');
const etelMw = require('../middleWare/etel');
const ujEtelMw = require('../middleWare/ujetel');
const egyEtelTorleseMw = require('../middleWare/egyeteltorlese');
const etelKeresMw = require('../middleWare/etelkeres');
const etelModositasMw = require('../middleWare/etelmodositasa');

function addRoutes(app, db, myModel){
    
    const objRep = {
        myModel,
        db,
        uuid
    }

    app.get('/etelek', etelekListajaMw(objRep));
    app.get('/etel/:id', etelMw(objRep));
    app.post('/etel', ujEtelMw(objRep));
    app.delete('/etel/:id', etelMw(objRep), egyEtelTorleseMw(objRep));
    app.post('/search', etelKeresMw(objRep));
    app.patch('/etel/:id', etelMw(objRep), etelModositasMw(objRep));
}



module.exports = addRoutes;

