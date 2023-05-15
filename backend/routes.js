import express from 'express';
import Note from './models/note.js';

import {createUserFct} from './functions/createUser.js'


const myRouter = express.Router();

myRouter.route('/user/create').post(createUserFct);
myRouter.route('/notes').get(async (req,res) =>{
    try{
        const notes = await Note.find();
        res.json(notes);
    }catch(err)
    {
        console.log(err);
    }
});

export const router = myRouter;