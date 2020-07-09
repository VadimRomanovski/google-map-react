const fs = require('fs');
const data = fs.readFileSync('./data/data.json', 'utf8');
const locationsData = fs.readFileSync('./data/coordsData.json', 'utf8');
// const json = JSON.parse(data)
const cors = require('cors')
const bodyparser = require('body-parser');
const express = require('express');

const app = express();

app.use(cors());

const server = app.listen(5000,listening);

function listening () {
    console.log("Server started at port 5000");
}
app.use(express.static('website'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// app.get('/',sendAll);
 
// function sendAll(req, res){
//     res.send(data);
// };

app.get('/fetchCoords', sendCoords);

function sendCoords(req, res){
    if(req.query.polygon === "true"){
        res.send(data);
    }
    // const locationsCoords = JSON.stringify(json.locations);
    res.send(locationsData);
}