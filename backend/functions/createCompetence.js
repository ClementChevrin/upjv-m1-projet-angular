import Competence from '../models/competence.js'

export function createCompetence(competenceDetails) {

    return new Promise(async (resolve, reject) => {

        var ok = true;
        var competenceDB = await Competence.findOne({ codeC: competenceDetails.codeC });
        var numberComp = await Competence.count();
        numberComp++;

        if (competenceDB == null || competenceDB == undefined) { // La competence n'existe pas
            var new_competence = new Competence();
            new_competence.nom = competenceDetails.nom;
            new_competence.description = competenceDetails.description;
            new_competence.codeC = 'COMP'+numberComp;
            new_competence.etat = 0;
        } else {
            ok = false;
            console.log("La compétence existe déjà");
        }

        try {
            if (ok) {
                new_competence.save();
                resolve({ status: true, message: "Competence créé" });
            } else {
                resolve({ status: false, message: "La competence existe deja" });
            }
        } catch (err) {
            reject({ status: false, message: "Error" });
            console.log(err);
        }
    });
}

export var createCompetenceFct = async (req, res) => {
    try {

        console.log(req.body); // A supprimer par la suite
        var statut = await createCompetence(req.body);

        if (statut.status) {
            res.send({ "status": true, "message": statut.message });
        } else {
            res.send({ "status": false, "message": statut.message });
        }

    } catch (err) {
        console.log(err);
    }
}
