import user from '../models/user.js';
import User from '../models/user.js'
import encryptor from 'simple-encryptor'

const key = '987654321NBVCXWMLKJH'
const myEncryptor = encryptor(key);

export function createUser(userDetails){
     return new Promise(async function myFn(resolve, reject) {

        var user = new User();
        var ok = true;
        var userTest = await User.findOne({ email: userDetails.email });

        if(userTest == null || userTest == undefined){ //l'email est unique par user
        user.prenom = userDetails.prenom;
        user.nom = userDetails.nom;
        user.email = userDetails.email;
        user.mdp = myEncryptor.encrypt(userDetails.mdp);
        user.role = userDetails.role;
        user.projetsArray = [];
        }else{
            ok=false;
            console.log("L'utilisateur existe déjà");
        }

        try{
            if(ok){
                resolve({status: true, message : "User créé"});
                user.save();
            }else{
                resolve({status: false, message : "User existant"});
            }
        }catch(err){
            reject({status: false, message : "Error"});
            console.log(err);
        }
    });
}

export var createUserFct = async(req,res) =>
{
    try{
        console.log(req.body);
        var statut = await createUser(req.body);

        if(statut.status){
            res.send({ "status": statut.status, "message": statut.message });
        }else{
            res.send({ "status":statut.status, "message": statut.message});
        } 
        
    }catch(err){
        console.log(err);
    }
}

