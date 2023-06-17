import projet from "../models/projet.js";
import user from "../models/user.js";

/* 
let Data : {
    email : clement2.chevrin2@gmail.com,
    projets : ["PRJ1","PRJ2","PRJ3"]
}
*/
export function addProjetToUser(data) {

    return new Promise(async (resolve, reject) => {

        data.projets.forEach(new_projet => {
                user.updateOne(
                { email: data.email },
                {
                    $push: {
                        projets: new_projet
                    }
                }
            )
        })

        try {
            user.bulkSave()
            resolve({ status: true, message: "Projets ajoutés" });
        }
        catch (err) {
            reject({ status: false, message: "Erreur lors de l'ajout de projets" });
        }

    })
}

export var addProjetToUserFct = async (req, res) => {

    try {
        myPromess = await addProjetToUser(req.body);

        if (myPromess.status) {
            res.send({ status: myPromess.status, message: myPromess.message });
        }

    } catch (err) {
        console.log(err);
    }

}
