import { trusted } from 'mongoose';
import user from '../models/user.js';
import User from '../models/user.js'

export function deleteUser(emailDetail) {

     return user.findOneAndRemove(emailDetail)
        .then((result) => {
            if (result) {
                console.log('Utilisateur supprimé avec succès'+emailDetail);
                return true;
            } else {
                console.log('Aucun utilisateur trouvé');
                return false;
            }
        })
        .catch((err) => {
            console.log('Erreur lors de la suppression de l\'utilisateur :', err);
            throw err;
        }); 

}

export var deleteUserFct = async (req, res) => {
    try {
        // console.log(req.body);
        var statut = await deleteUser(req.body);
        if (statut) {
            res.send({ "status": true, "message": "ok" });
        } else {
            res.send({ "status": false, "message": "error" });
        }

    } catch (err) {
        console.log(err);
        
    }
}
