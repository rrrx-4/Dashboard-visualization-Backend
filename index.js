const express = require("express");
const dotenv = require("dotenv");
const fs = require('fs');
const connectDB = require("./dp/connect");
const Forecast = require('./model/forecast');
const cors = require('cors');

const variableRouter = require('./routes/variables')













// let datajson = fs.readFileSync("jsondata.json");

// let data = JSON.parse(datajson);


// Forecast.insertMany(data);






dotenv.config();

const app = express();
app.use(cors());

app.use(express.json())
app.get('/', (req, res) => {
    res.send('<h1>Forecast API</h1>');
});

app.use('/api/v1', variableRouter)
























const port = 3000;














const start = async () => {

    try {

        await connectDB(process.env.MONGO_URL);

        app.listen(port, () => {
            console.log(`Server listen on port ${port}...`)
        }
        )
    } catch (error) {

        console.log(error);

    }
}

start();