const express = require('express');
const dotenv = require('dotenv');

const homeController = require("./controllers/homeController");
const postsController = require("./controllers/postsController");


dotenv.config();
const app = express();
app.use(express.static("public"));


app.get("/", homeController.index);
app.get("/posts", postsController.index);


app.listen( process.env.PORT || 3000, ()=>{
    console.log("server acceso a http://localhost:" + process.env.PORT)
})