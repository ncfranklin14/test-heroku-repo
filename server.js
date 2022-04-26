const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

const people = [ 
    {
        id:1,
        name:"Joe",
        role:"Instructor"
    },
    {
        id:2,
        name:"Niles",
        role:"TA"
    },
          {
        id:3,
        name:"Stefan",
        role:"Student"
    }
]
// parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serves css/js/static assets
app.use(express.static("public"))
const allRoutes = require("./routes")
app.use(allRoutes);

app.listen(PORT,()=>{
    console.log("listening to port " + PORT)
})