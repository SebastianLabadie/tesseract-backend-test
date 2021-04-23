const express = require('express');
const multer = require('multer');
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(cors())

const PORT = process.env.PORT | 5000;

app.use('/api/upload',require('./routes/images'))

const main = async ()=>{
    await app.listen(PORT);
    console.log(`Server running on Port ${PORT}`);
}

main()
