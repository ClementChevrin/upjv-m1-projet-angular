import Competence from '../models/competence.js'
 
export var getAllCpt = async (req,res) => {

    try{
    const competenceDB = await Competence.find();
    res.json(competenceDB);
    }
    catch(err){
        console.log(err);
    }
}