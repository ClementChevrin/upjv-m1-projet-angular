import Projet from '../models/projet.js'
 
export var getNumberOfProjects = async (req,res) => {

    try{
    const nb = await Projet.count();
    res.json(nb);
    }
    catch(err){
        console.log(err);
    }
}