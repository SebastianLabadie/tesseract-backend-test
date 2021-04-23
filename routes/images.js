const {Router} = require('express');
const router = Router();
const multer = require('multer')
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
const Tesseract = require('tesseract.js');



const upload= multer()
router.route('/')
    .post(upload.single('file'),async (req,res)=>{
        //console.log(req.file.buffer.toString("base64"))
        
        console.log(req.file.originalname)
        console.log(req.file)
        await require("fs").writeFile(req.file.originalname, req.file.buffer.toString('base64'), 'base64', function(err) {
            console.log(err);
          });

        //if (file.detectedFileExtension != ".jpg") 

        const tes = await Tesseract.recognize(req.file.originalname,'spa')
        
         res.send(tes.data.text) 
    })

module.exports = router;
