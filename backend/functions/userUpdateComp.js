import { ClientSession } from "mongodb";
import User from "../models/user.js";

export function userUpdateComp(data) {

    return new Promise(async (resolve, reject) => {
        try {

            let indiceProjet = data.iP;
            let indiceComp = data.iC;
            let etat = data.etat;
            let myEmail = data.email;

            var chaine = "projetsArray." + indiceProjet + "competences." + indiceComp + ".etat";
            //console.log(chaine);

           var userDB = await User.findOne({email : myEmail});
           
           userDB.projetsArray[indiceProjet].competences[indiceComp].etat = etat;
           userDB.save();

            resolve({statut : true, msg : "competence ajoutee"});
        }
        catch (err) {
            reject({statut : false, msg : err});
            console.log(err);
        }
    })
}

export var userUpdateCompFct = async (req, res) => {
    try {

        console.log(req.body);
        var statut = await userUpdateComp(req.body);

        if (statut.statut) {
            res.send({ "status": true, "message": statut.message });
        } else {
            res.send({ "status": false, "message": statut.message });
        }

    } catch (err) {
        console.log(err);
    }
}

