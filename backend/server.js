
import express from 'express';
// Import pour une session
import session from 'express-session';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import note from './models/note.js';
import {router} from './routes.js'

// Le cookie expirera au bout d'un jour
const cookieDuration = 1000*60*60*24

const app = express();
const port = 4000;
const myRouter = router;

app.use(session({
    secret: "maclesecrete12346789",
    cookie : {
        sameSite : 'strict',
        maxAge : cookieDuration,
    }
}));



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

/*app.get('/',(req,res) => {
    session=req.
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
    res.sendFile('views/index.html',{root:__dirname})
}); */


app.use('/',myRouter);



