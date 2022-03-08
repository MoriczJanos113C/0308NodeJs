//implementációs kód
/*
nincs annotáció
ki kell írni h miket várunk:
    ut - pozitiv valós
    ido - pozitiv valós
mit ad vissza
    return
        sebesseg - nem negativ, valos
        hibas parameter eseten = err stringet ad vissza
*/
//seged fuggvenyek kellenek ide, de ez ami 13.sorba van implementációs kód egyszer lehet

function sebesseg( ut, ido){
    if(ido <= 0 || ut<= 0){
        return 'err';
    }
    return ut/ido;
}



module.exports = sebesseg;