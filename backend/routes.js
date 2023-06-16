import express from 'express';
import Note from './models/note.js';

// Users functions
import { getAllUsers } from './functions/getAllUsers.js';
import {createUserFct} from './functions/createUser.js'
import { loginUserFct } from './functions/loginUser.js';
import { updateUserFct } from './functions/updateUser.js';
import { deleteUserFct } from './functions/deleteUser.js';


import {createCompetenceFct} from './functions/createCompetence.js'

import {createProjetFct} from './functions/createProjet.js'
import { getAllCpt } from './functions/getAllCpt.js';
import user from './models/user.js';


const myRouter = express.Router();

// Utilisateurs
myRouter.route('/user/create').post(createUserFct);
myRouter.route('/user/delete').post(deleteUserFct);
myRouter.route('/user/update').post(updateUserFct);
myRouter.route('/user/login').post(loginUserFct);

myRouter.route('/user/logout',(req,res)=>{
    res.clearCookie('username');
    res.redirect('/user/login');
})

myRouter.route('/users').get(getAllUsers);

// Compétences
myRouter.route('/competence/create').post(createCompetenceFct);
myRouter.route('/competences').get(getAllCpt);

// Projets
myRouter.route('/projet/create').post(createProjetFct);

/*
myRouter.route('/notes').get(async (req,res) =>{
    try{
        const notes = await Note.find();
        res.json(notes);
    }catch(err)
    {
        console.log(err);
    }
}); */

export const router = myRouter;