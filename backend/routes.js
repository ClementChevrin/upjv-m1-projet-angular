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
import { getAllMyProject } from './functions/getMyProjects.js';
import { addProjetToUserFct } from './functions/addProjetToUser.js';
import { addCompToProjetFct } from './functions/addCompToProjet.js';
import { getNumberOfProjects } from './functions/getNumberOfProjects.js';
import { addProjetToUserFct2 } from './functions/addProjetToUser2.js';
import { getAllMyProjets } from './functions/getAllMyProjets.js';
import { getProjetsToAdd } from './functions/getProjetsToAdd.js';
import { userUpdateComp, userUpdateCompFct } from './functions/UserUpdateComp.js';


const myRouter = express.Router();

// Users - Administration
myRouter.route('/users').get(getAllUsers);
myRouter.route('/user/create').post(createUserFct);
myRouter.route('/user/delete').post(deleteUserFct);
myRouter.route('/user/update').post(updateUserFct);
myRouter.route('/user/login').post(loginUserFct);

// Etudiants - Projects
myRouter.route('/user/projet/add').post(addProjetToUserFct2); //Ajouter un projet
myRouter.route('/user/mesProjet').get(getAllMyProjets); //Projets de l'etudiant
myRouter.route('/user/projetsRestants').get(getProjetsToAdd); //Projets restants
myRouter.route('/user/updateCompetences').post(userUpdateCompFct); // Maj des compétences


// Enseignant - Competences
myRouter.route('/competence/create').post(createCompetenceFct); //Creation d'une competence
myRouter.route('/competences').get(getAllCpt); //Visualisation des competences

// Enseignant - Projet
myRouter.route('/projet/create').post(createProjetFct);
myRouter.route('/projet/create/competence').post(addCompToProjetFct);
myRouter.route('/projet/numberOfProjet').get(getNumberOfProjects);  //Permet de définir un code projet


export const router = myRouter;