
import fs from "fs";
import xml2js from "xml2js";
import express from "express";

const app = express();

let json = fs.readFile("user.xml", "utf8", function (err, data) {
    //let json
    if (err) {
        console.error(err);
        return;
    }
    let parser = new xml2js.Parser();
    parser.parseString(data.substring(0, data.length), function (err, result) {
        json = JSON.stringify(result);
        //console.log(JSON.stringify(result));
        console.log(json);

    });
    return json;

})
app.get('/', function (req, res) {
    res.send(json);
})
app.listen(5001, (res) => {
    console.log('Server started on port : 5001')
})
