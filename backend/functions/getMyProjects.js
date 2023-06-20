import User from '../models/user.js'

export var getAllMyProject = async (req, res) => {

    try {
    
        let myProject = await User.aggregate([
            {
                $match: { email : req.param('email')}
            },
          /*  {
                $unwind: "$projets"
            },*/
            {
                $lookup:{
                    from: "projets",
                    localField: "projets",
                    foreignField : "codeP",
                    as : "myProjects"
                }
            },
            {
                $project :{
                    "_id" : 0,
                    "projets._id" : 0,
                    "competences" : 0,
                    "prenom" : 0,
                    "nom" : 0,
                    "email" : 0,
                    "mdp" : 0,
                    "role" : 0
                }
            }
            
        ]);

        res.json(myProject);
        console.log(req.params.email);
    }
    catch(err){

        console.log(err);

    }
}

