//felh: leltár
//jelszo leltar_123

const mysql = require('mysql');

const connection= mysql.createConnection({
    host:"localhost",
    port:"3306",
    database:"leltar",
    user:"leltar",
    password:"leltar_123"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("csatlakzoott");


    const myQuery="SELECT DISTINCT telepites.gepid, hely, ipcim FROM gep INNER JOIN telepites ON gep.id=telepites.gepid WHERE datum LIKE '%2013%';";
    connection.query(myQuery,(err, result, fields) => {
        if(err) throw err;
        const sorok = JSON.parse(JSON.stringify(result));
        for(sor of sorok){
            console.log(`GFép ideje ${sor.gepid}Gép helye ${sor.hely} és ip cime ${sor.ipcim}`);
        }0
    });

    const myQuery2="SELECT ipcim FROM gep INNER JOIN telepites ON gep.id=telepites.id INNER JOIN szoftver ON telepites.szoftverid=szoftver.id WHERE nev='Mozzila Firefox' AND ipcim IN (SELECT ipcim FROM gep INNER JOIN telepites ON gep.id=telepites.id INNER JOIN szoftver ON telepites.szoftverid=szoftver.id WHERE nev='Google Chrome');";
    connection.query(myQuery2,(err, result, fields) => {
        if(err) throw err;
        const sorok = JSON.parse(JSON.stringify(result));
        for(sor of sorok){
            console.log(`Gép cime ${sor.ipcim}`);
        }
    });

    const myDelete="DELETE FROM szoftver WHERE kategoria LIKE '%demo%';";
    connection.query(myDelete,(err, result) => {
        if(err) throw err;
        console.log(`Törölve ${result.affectedRows}`);
    });

    const myInsert="INSERT INTO gep (hely, tipus, ipcim) VALUES('T202', 'notebook', '172.16.0.102');";
    connection.query(myInsert,(err, result) => {
        if(err) throw err;
        console.log(`Beszurva ${result.affectedRows}`);
    });

    const myUpdate="UPDATE telepites SET verzio = 'ver1.0.0' WHERE verzio IS NULL;";
    connection.query(myUpdate,(err, result) => {
        if(err) throw err;
        console.log(`Frissítve ${result.affectedRows}`);
    });

    
    connection.end();
});