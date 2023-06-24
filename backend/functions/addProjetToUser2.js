import Projet from '../models/projet.js'
import User from '../models/user.js';

export function addProjetToUser2(data) {

    return new Promise(async (resolve, reject) => {


        var user = await User.findOne({email : data.email});

        try {
            var projet = await Projet.findOne({codeP : data.codeP})
            user.projetsArray.push(projet);
            user.save();
            resolve({status: true, message : "Projet Ajouté"});
        } catch (err) {
            reject({status : false, message : "Error"});
            console.log(err);
        }
    });
}

export var addProjetToUserFct2 = async (req, res) => {
    try {

        console.log(req.body);
        var statut = await addProjetToUser2(req.body);

        if (statut.status) {
            res.send({ "status": true, "message": statut.message });
        } else {
            res.send({ "status": false, "message": statut.message });
        }

    } catch (err) {
        console.log(err);
    }
}

