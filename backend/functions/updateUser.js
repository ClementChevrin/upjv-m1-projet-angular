import user from '../models/user.js';
import User from '../models/user.js'
import encryptor from 'simple-encryptor'

const key = '987654321NBVCXWMLKJH'
const myEncryptor = encryptor(key);

export function updateUser(userDetails) {
    return new Promise(async function myFn(resolve, reject) {

        var userDB = await User.findOne({ email: userDetails.old_email });

        userDB.prenom = userDetails.prenom;
        userDB.nom = userDetails.nom;

        if (userDetails.new_email != null || userDetails.new_mail != null) {
            userDB.email = userDetails.new_email;
        }

        if (userDetails.mdp != null || userDetails.mdp != undefined) {
            userDB.mdp = myEncryptor.encrypt(userDetails.mdp);
        }

        try {
            userDB.save();
            resolve({ status: true, message: "Changement opéré" });
        }
        catch (err) {
            reject({ status: false, message: "Error" });
            console.log(err);
        }
    });
}

export var updateUserFct = async (req, res) => {
    try {
        console.log(req.body);
        var statut = await updateUser(req.body);

        if (statut.status) {
            res.send({ "status": statut.status, "message": statut.message });
        } else {
            res.send({ "status": statut.status, "message": statut.message });
        }

    } catch (err) {
        console.log(err);
    }
}

