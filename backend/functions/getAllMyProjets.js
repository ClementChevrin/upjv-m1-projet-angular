import User from "../models/user.js"


export var getAllMyProjets = async (req, res) => {

try {

    var projets = await User.find({'email' : req.param('email')},{'projetsArray' : 1,'_id' : 0});
    res.json(projets);
}

catch(err){
    console.log(err);
}

}