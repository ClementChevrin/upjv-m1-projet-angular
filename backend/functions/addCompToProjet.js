import Projet from '../models/projet.js'
import Competence from '../models/competence.js';

export function addCompToProjet(data) {

    return new Promise(async (resolve, reject) => {


        var projet = await Projet.findOne({codeP : data.codeP});

        try {
            var competence = await Competence.findOne({codeC : data.codeC})
            projet.competences.push(competence);
            projet.save();
            resolve({status: true, message : "Competence ajoutée"});
        } catch (err) {
            reject({status : false, message : "Error"});
            console.log(err);
        }
    });
}

export var addCompToProjetFct = async (req, res) => {
    try {

        console.log(req.body); // A supprimer par la suite
        var statut = await addCompToProjet(req.body);

        if (statut.status) {
            res.send({ "status": true, "message": statut.message });
        } else {
            res.send({ "status": false, "message": statut.message });
        }

    } catch (err) {
        console.log(err);
    }
}

