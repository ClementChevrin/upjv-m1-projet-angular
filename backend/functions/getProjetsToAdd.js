import User from "../models/user.js"
import Projet from "../models/projet.js"

export var getProjetsToAdd = async (req, res) => {

try {

    var mesProjets = await User.find({'email' : 'alice.ngae@gmail.com'},{'projets': 1,'_id' : 0})
    var projets = await Projet.find( {'codeP' : { $nin : mesProjets[0].projets }})
    console.log(projets);
    res.json(projets);
}

catch(err){
    console.log(err);
}

}