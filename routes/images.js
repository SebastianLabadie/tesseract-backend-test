const {Router} = require('express');
const router = Router();


const Tesseract = require('tesseract.js');




    

router.route('/')
    .post(async (req,res)=>{
        const tes = await Tesseract.recognize('./image.jpg','spa')

        res.send(tes.data.text)
    })

module.exports = router;