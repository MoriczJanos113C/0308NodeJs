console.log("npm install lokijs")

const Loki = require('lokijs')
const db = new Loki('adatok.data')



/*adatminta
    hal
        (id),
        (halfaj),
        (tomeg(gramm))
*/



db.loadDatabase({}, () => {
    let halaim = db.getCollection("halak")
    if(halaim === null){
        halaim = db.addCollection("halak")
    }


const elsoHal = {
    id: 1, //uuid kene
    halfaj: "ponty",
    tomeg: 2300
}

const kettoHal = {
    id: 2, //uuid kene
    halfaj: "csuka",
    tomeg: 2000
}

const haromHal = {
    id: 3, //uuid kene
    halfaj: "ponty",
    tomeg: 3000
}

halaim.insert(elsoHal)
halaim.insert(kettoHal)
halaim.insert(haromHal)


const pontyok = halaim.find({tomeg: "ponty"});
console.table(pontyok)

const ponty = halaim.findOne({halfaj: "ponty"});
console.table(ponty)

halaim.remove(ponty)

/*
collection a memoriaban van, db fizikai állomány pl: valami(file itt)
végére mindig valami.saveDatabase();
ezek a fügvények async-ok, 
*/


db.addCollection("halak")

db.saveDatabase(err => {//async muvelet, callback fuggveny, error valtozot kap es ezt fel kell dolgozni
    if(!err){
        return console.log(`${halaim.length} elem mentés sikeres`);
    }else{
        return console.log("nem sikerult");
    }
    });
});