//Express Application

const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');


const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const port= 3000;
const hostname = '127.0.0.1';
 
//Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname,'public')));

//Connect to MongoDB via Mongoose
mongoose.connect(`mongodb://${hostname}:27017/ContactUs`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var db = mongoose.connection;

//Defining a Mongoose Schema
var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

//Creating a Mongoose Model
var Contact = mongoose.model('Contact', contactSchema, 'Info');

//MiddleWare to parse the body
app.use(bodyParser.urlencoded({extended: true}));

//Event Handlers for MongoDB Connection
db.on('error', (err)=>{
    console.error('MongoDB Connection Error... ',err);
});

db.on('open', ()=>{
    console.log('MongoDB Connection Sucessful...');
});


//Serving HTML Files
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

//Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));

//Handling incoming Post request for Form Data
app.post('/submit', (req, res)=>{
    
    //Creating a new instance of mongoose model 'Contact'...
    const newItem = new Contact({
        name : req.body.name,
        email : req.body.email,
        message : req.body.message,
    });

//Saving Data into the collection

newItem.save()
    .then(() => {
        console.log('Data saved successfully to the database...');
    })
    .catch((err) => {
        console.error('Error while saving data into the collection...', err);
    });

});

//Adding Event Listeners for generating Road maps for subjects

app.get('/WebD', (req,res) => {
    res.status(200).render('WEBD.pug');
})
app.get('/AI', (req,res) => {
    res.status(200).render('AI.pug');
})
app.get('/DSA', (req,res) => {
    res.status(200).render('DSA.pug');
})
app.get('/DS', (req,res) => {
    res.status(200).render('DS.pug');
})

app.get('/Courses', (req, res) => {
    res.status(200).render('Courses.pug');
});

app.get('/About', (req, res) => {
    res.status(200).render('About.pug');
});

const Learn = require('./Learn/Learn');

app.use('/Learn', Learn);

app.listen(port, hostname, ()=>{
    console.log(`Server is running on http://${hostname}:${port}`);
});