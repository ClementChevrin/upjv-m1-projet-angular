
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import note from './models/note.js';
//import note from './models/note';
import { ElementSchemaRegistry } from '@angular/compiler';

const app = express();
const port = 4000;
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/ArchiWeb');
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('Database connection established');
});


app.listen(port,()=>{
    console.log("Succes");
})

// Get every notes
router.route('/notes').get(async (req,res) =>{
    
    try{
        const notes = await note.find();
        res.json(notes);
    }catch(err)
    {
        console.log(err);
    }
});

app.use('/',router);



