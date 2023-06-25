import Projet from "../models/projet.js"

export var enseignantProjet = async (req, res) => {

try {
    var projets = await Projet.find({"enseignant": req.param('email')});
    console.log(req.param('email'));
    console.log(projets);
    res.json(projets);
}

catch(err){
    console.log(err);
}

}