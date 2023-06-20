import Projet from '../models/projet.js'
import Competence from '../models/competence.js';
import { createCompetence } from './createCompetence.js';
import competence from '../models/competence.js';

export function createProjet(projetDetails) {

    return new Promise(async (resolve, reject) => {

        var ok = true;
        var projetDB = await Projet.findOne({ codeP: projetDetails.codeP });
        var numberOfProjet  = await Projet.count();
        numberOfProjet++;

        if (projetDB == null || projetDB == undefined) { // Le projet n'existe pas
            
            var new_projet = new Projet();
            new_projet.nom = projetDetails.nom;
            new_projet.description = projetDetails.description;

            if(projetDetails.enseigant != null && projetDetails != undefined){
            new_projet.enseigant = projetDetails.enseigant
            }

            new_projet.codeP = "PROJ"+numberOfProjet;

            projetDetails.competences.forEach( async code => {
              //  new_projet.codeComp.push(code);
              try{
                var competence = await Competence.findOne({codeC : code})
                new_projet.competences.push(competence);
              }catch(err){
                console.log(err);
              }
            });

    
        }else{
            ok = false;
            console.log("Le projet existe déjà");
        }

        try {
            if(ok){
            new_projet.save();
            resolve({status: true, message : "Projet créé"});
            }else{
            resolve({status: false, message : "Le projet existe deja"});
            }
        } catch (err) {
            reject({status : false, message : "Error"});
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

