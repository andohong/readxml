const express = require ('express');
const app = express ();
const xml = require ('xml')
app.get('/users',(req,res,next)=> {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>`
    xml += `<user>`
    for (let i = 0; i<99; i++){
        xml += `<customer> 
        <firstName>Henry</firstName>
        <lastName>William</lastName>
    </customer>`
    }
    xml += `</user>`
    res.header('Content-Type', 'application/xml')
    res.status(200).send(xml)

})
app.listen(5000, (res)=>{console.log ('server started on port :5000')})