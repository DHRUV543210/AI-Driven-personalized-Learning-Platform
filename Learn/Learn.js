const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const app= express();

router.get('/', (req, res) => {
    res.render('LearnPugs/standard.pug');
});

router.get('/AI', (req,res) => {
    res.render('LearnPugs/LearnAI.pug');
});

router.get('/DS', (req,res) => {
    res.render('LearnPugs/LearnDS.pug');
});

router.get('/DSA', (req,res) => {
    res.render('LearnPugs/LearnDSA.pug');
});

router.get('/WebD', (req,res) =>{
    res.render('LearnPugs/LearnWebD.pug');
});

//AI SPECIFIC

router.get('/:subject/:fileName', (req, res) =>{

    const fileName = req.params.fileName;
    const subject = req.params.subject;

    const htmlPath = path.join(__dirname, `../public/Content/${subject}/${fileName}.html`);
    const cssPath = path.join(__dirname, `../public/Content/${subject}/style.css`);

    fs.readFile(htmlPath, (err, htmlContent) => {
        // if(err){
        //     console.error('facing error in html file ...', err);
        // }
        
        fs.readFile(cssPath, (err, cssContent) => {
            // if(err){
            //     console.error('facing error reading css file ...', err);
            // }

            const fullHtmlContent = `${htmlContent}<style>${cssContent}</style>`;

            res.status(200).send(fullHtmlContent);        

        });
        
    });
});

module.exports = router;

