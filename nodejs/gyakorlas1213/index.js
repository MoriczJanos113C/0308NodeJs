const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port:"3306",
    database: "leltar",
    user: "root",
    password: ""
});

connection.connect((err) => {
    if(err) throw err;
    console.log("mukdoik");


    const myQuery ="SELECT DISTINCT tipus from gep;";
    connection.query(myQuery,(err, result, fields) => {
        if(err) throw err;
        const sorok = JSON.parse(JSON.stringify(result));
        for(sor of sorok){
            console.log(`Gep tipusok: ${sor.tipus}`);
        }
    });

    const myInsert = "INSERT INTO gep (hely, tipus, ipcim) VALUES('T1020', 'KINTI', '1.1.1.1.1.1.1.1');";
    connection.query(myInsert,(err, result) => {
        if(err) throw err;
        console.log(`Beszurva${result.affectedRows}`);
        
    });

    const myQuery2="SELECT DISTINCT hely FROM gep WHERE hely = 'T1020';";
    connection.query(myQuery2,(err, result, fields) => {
        if(err) throw err;
        const sorok = JSON.parse(JSON.stringify(result));
        for(sor of sorok){
            console.log(`gép létezik ${sor.hely}`);
        }
    });

    const myUpdate = "UPDATE gep SET hely = 'T500' WHERE hely = 'T1020';";
    connection.query(myUpdate, (err, result) => {
        if(err) throw err;
        console.log(`Modositva ${result.affectedRows}`);
    });

    const myDelete = "DELETE FROM gep WHERE hely = 'T500';";
    connection.query(myDelete,(err, result) => {
        if(err) throw err;
        console.log(`Törölve ${result.affectedRows}`);
    });
    connection.end();
});