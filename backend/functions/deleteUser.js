import user from '../models/user.js';
import User from '../models/user.js'

export function deleteUser(emailDetail){
     
    return new Promise(async function myFn(resolve, reject) {
        var ok = true;
        const element = await User.findByIdAndRemove({email : emailDetail });
        console.log(element);
        
        var userTest = await User.findOne({ email: emailDetail });
        if(userTest == null || userTest == undefined){ // User supprimé
            ok = true;
            console.log("utilisateur supprimé");
        }else{
            ok = false;
            console.log("L'utilisateur non supprimé");
        }

        try{
            if(ok){
                resolve({status: true, message : "User supprimé"});
            }else{
                resolve({status: false, message : "User non supprime"});
            }
        }catch(err){
            reject({status: false, message : "Error"});
            console.log(err);
        }
    }); 


  /*  return user.findByIdAndRemove(user.id)
    .then((result) => {
      if (result) {
        console.log('Utilisateur supprimé avec succès');
        return true;
      } else {
        console.log('Aucun utilisateur trouvé');
        return false;
      }
    })
    .catch((err) => {
      console.log('Erreur lors de la suppression de l\'utilisateur :', err);
      throw err;
    }); */
    
}

export var deleteUserFct = async(req,res) =>
{
    try{
       // console.log(req.body);
        var statut = await deleteUser(req.body);
        if(statut.status){
            res.send({ "status": statut.status, "message": statut.message });
        }else{
            res.send({ "status":statut.status, "message": statut.message});
        } 
        
    }catch(err){
        console.log(err);
    }
}
