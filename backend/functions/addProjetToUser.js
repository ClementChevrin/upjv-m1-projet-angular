import projet from "../models/projet.js";
import user from "../models/user.js";

/* 
let Data : {
    email : clement2.chevrin2@gmail.com,
    projets : ["PRJ1","PRJ2","PRJ3"]
}
*/
export function addProjetToUser(data) {

    return new Promise(async (resolve, reject) => {

        var userDB = await user.findOne({email : data.email});
        var isNewProject = true;

        console.log(userDB);

        userDB.projets.forEach(projet =>{

            if(projet != data.projet){
                userDB.projets.push(data.projet);
            }else{
                isNewProject = false;
            }
        });

        try{
            if(isNewProject){
                resolve({status : true, msg : "Le projet a été ajouté" });
                userDB.save();
            }else{
                resolve({status : false, msg : "L'étudiant est déjà inscrit au projet" });
            }
        }catch(err){
            console.log(err);
            reject({status : false, msg : "Erreur lors ajout du projet"});
        }
        
     }); 
}

export var addProjetToUserFct = async (req, res) => {

    try {
       let myPromess = await addProjetToUser(req.body);

        if (myPromess.status) {
            res.send({ status: myPromess.status, message: myPromess.msg });
        }

    } catch (err) {

        console.log(err);
    }

}
