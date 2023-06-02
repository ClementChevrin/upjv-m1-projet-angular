
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import note from './models/note.js';
import {router} from './routes.js'

//import note from './models/note';
import { ElementSchemaRegistry } from '@angular/compiler';

const app = express();
const port = 4000;
const myRouter = router;

app.use(cors(
    {
        origin : "http://localhost:4200"
    }
));

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/ArchiWeb');
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('Database connection established');
});

app.listen(port,()=>{
    console.log("Succes");
})


app.use('/',myRouter);



