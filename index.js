// required Libraries

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const PORT = 8000;

const app = express();



app.listen(PORT, function(err){
    if(err){
        console.log("Error while connecting to server");
        return;
    }
    console.log(`Server running on port ${PORT}.`);
})