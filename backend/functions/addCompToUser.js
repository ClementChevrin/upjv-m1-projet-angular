import User from "../models/user.js";

/* 
let Data : {
    email : clement2.chevrin2@gmail.com,
    competences : ["PRJ1","PRJ2","PRJ3"]
}
*/
export function addCompToUser(data){

    return new Promise(async (resolve,reject) =>{

    let user = User.findOne({email : data.email});

    data.competences.forEach(competence => {
        user.competences.push(competence);
    });

    try{
        user.save();
        resolve({status : true, message : "Competences ajoutés"});
    }catch(err){
        reject({status : false, message : "Erreur lors de l'ajout de competences"});
    }

    })
}

export var addCompToUserFct = async (req, res) => {

try{
    myPromess = await addCompToUser(req.body);

    if(myPromess.status){
        res.send({status : myPromess.status, message : myPromess.message});
    }

}catch(err){
    console.log(err)
    res.send({status : myPromess.status, message : myPromess.message});
}

}
