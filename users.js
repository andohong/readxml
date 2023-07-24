//import fs from "fs";
//import { parseString } from "xml2js";

//const fs = require('fs');
//
//console.log(xml_string);


//const xml2js = require('xml2js');
//var xmldata = "user.xml";
//let xml_string = fs.readFileSync("user.xml", "utf8");

//xml2js.parseString(xml_string, function (err, results) {
//  let data = JSON.stringify(results)
//  console.log("resuts", data)
//})

import fs from "fs";
import xml2js from "xml2js";
fs.readFile("users.xml", "utf8", function (err, data) {
    let json
    if (err) {
        console.error(err);
        return;
    }
    let parser = new xml2js.Parser();
    parser.parseString(data.substring(0, data.length), function (err, result) {
        json = JSON.stringify(result);
        console.log(JSON.stringify(result));
    });
    return json;
})