import user from '../models/user.js';
import User from '../models/user.js'
import encryptor from 'simple-encryptor'

const key = '987654321NBVCXWMLKJH'
const myEncryptor = encryptor(key);

export function createUser(userDetails){
     return new Promise(function myFn(resolve, reject) {
        var user = new User();
        user.prenom = userDetails.prenom;
        user.nom = userDetails.nom;
        user.email = userDetails.email;
        user.mdp = myEncryptor.encrypt(userDetails.mdp);
        user.role = userDetails.role;

        try{
            resolve(true);
            user.save();
        }catch(err){
            reject(false);
            console.log(err);
        }
    });
}

export var createUserFct = async(req,res) =>
{
    try{
        console.log(req.body);
        var status = await createUser(req.body);

        if(status){
            res.send({ "status": true, "message": "L'Etudiant  a été crée" });
        }else{
            res.send({ "status":false, "message": "Erreur lors de la création de l'étudiant"});
        } 
        
    }catch(err){
        console.log(err);
    }
}
