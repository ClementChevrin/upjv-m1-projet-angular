import Projet from '../models/projet.js'

export function createProjet(projetDetails) {

    return new Promise(async (resolve, reject) => {

        var ok = true;
        var projetDB = await Projet.findOne({ codeP: projetDetails.codeP });

        if (projetDB == null || projetDB == undefined) { // Le projet n'existe pas
            
            var new_projet = new Projet();

            new_projet.nom = projetDetails.nom;
            new_projet.description = projetDetails.description
            new_projet.codeP = projetDetails.codeP

            projetDetails.codeCR.forEach(code => {
                new_projet.codeCR.push(code);
            });

            projetDetails.codeCO.forEach(code => {
                new_projet.codeCO.push(code);
            });
    
        }else{
            ok = false;
            console.log("Le projet existe déjà");
        }

        try {
            if(ok){
            new_projet.save();
            resolve({status: true, message : "Projet créé"});
            }
        } catch (err) {
            reject({status : false, message : "Le projet existe deja"});
            console.log(err);
        }
    });
}

export var createProjetFct = async (req, res) => {
    try {

        console.log(req.body); // A supprimer par la suite
        var statut = await createProjet(req.body);

        if (statut.status) {
            res.send({ "status": true, "message": statut.message });
        } else {
            res.send({ "status": false, "message": statut.message });
        }

    } catch (err) {
        console.log(err);
    }
}
