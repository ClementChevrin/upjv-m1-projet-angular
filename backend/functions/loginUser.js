import user from '../models/user.js';
import User from '../models/user.js'
import encryptor from 'simple-encryptor'

const key = '987654321NBVCXWMLKJH'
var myEncryptor = encryptor(key);

export function loginUser(userDetails) {

    return new Promise(async (resolve, reject) => {

        var userDB = await user.findOne({ email: userDetails.email });
        var login = true;
        var decryptedMdp = "";

        if (userDB != undefined && userDB != null) {

            var decryptedMdp = myEncryptor.decrypt(userDB.mdp);

            if (decryptedMdp == userDetails.mdp) {
                console.log("Ok" + "__" + decryptedMdp + "__" + userDetails.mdp);
            } else {
                console.log("KO" + "__" + decryptedMdp + "__" + userDetails.mdp);
                login = false;
            }
        } else {
            login = false;
        }

        try {
            if (login) {
                resolve({ status: login, mdp: decryptedMdp + "__" + userDetails.mdp + "__" + userDB, userDB });
            } else {
                resolve({ status: login, mdp: decryptedMdp + "__" + userDetails.mdp + "__" + userDB, userDB });
            }
        }
        catch (err) {
            reject(false);
        }

    })

}

export var loginUserFct = async (req, res) => {
    try {
        console.log(req.body);

        var resp = await loginUser(req.body);
        if (resp.status) {
            res.send({ "status": true, "message": "Utilisateur Connecté", "user": resp.userDB });
            console.log("", resp, "");

            req.session.user = resp.userDB;
            req.session.authorized;
            console.log(req.session.user.email);
        } else {
            res.send({ "status": false, "message": "Erreur lors de la connection" })
            console.log(resp);


        }

    } catch (err) {
        console.log(err);
        res.send({ "status": false, "message": err.msg })
    }
}



/*export async function loginUser(userDetails){
    
    const userDb = await User.findOne({email : userDetails.email});
    const userDetailsMdp = userDetails.mdp;

    if(userDb == null || userDb == undefined || userDetails.email == null){
        console.log("L'utilisateur n'existe pas ___ "+userDetails.mdp+"___"+myEncryptor.decrypt(userDb.mdp));
    }else{

        var decryptedMdp = myEncryptor.decrypt(userDb.mdp)
        if( userDetailsMdp == decryptedMdp){
            console.log("Connexion reussit ___ "+userDetails.mdp+"___"+decryptedMdp);
        }
        else
        {
            console.log("Mdp invalide ___ "+userDetails.mdp+"___"+decryptedMdp);
        }
    }
} */

/*
export async function  loginUser(userDetails) {

    try {

        const userDB = await User.findOne({email : userDetails.email})

        if (userDB != undefined && userDB != null) {

            if (myEncryptor.decrypt(userDB.mdp) == userDetails.mdp) {
                console.log("Ok");
            } else {
                console.log("KO");
            }
        }
    }
        catch (err) { }
} */


/*export var loginUser = async (resp,userDetails) => {

    try {
        var userDB = new User();
        userDB = await User.findOne({email : userDetails.email});
    
        if (userDB != undefined && userDB != null) {

            if (decryptedMdp == userDetails.mdp) {
                console.log("Ok");
                resp.status = true;
            } else {
                console.log("KO"+"__"+userDB.mdp+"__"+userDetails.mdp); 
                resp.status = false
            }
        }
    }
        catch (err) {                
        }
    
} */