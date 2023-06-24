import User from "../models/user.js"

export var getEnseignantProjet = async (req, res) => {

try {

    var projets = await User.find(
        {
          "projetsArray.enseignant": req.param("email"),
        },
        {
          "prenom": 0,
          "nom": 0,
          "mdp" : 0,
          "role": 0,
          "_id" : 0,
          projetsArray:{
            $elemMatch: {
              "enseignant" : "frederic.furst@gmail.com",
            },
          },
        }
      );
    res.json(projets);
}

catch(err){
    console.log(err);
}

}