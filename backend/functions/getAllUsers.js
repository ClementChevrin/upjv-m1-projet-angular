import User from '../models/user.js'
 
export var getAllUsers = async (req,res) => {

    try{
    const userDB = await User.find();
    res.json(userDB);
    }
    catch(err){
        console.log(err);
    }
}