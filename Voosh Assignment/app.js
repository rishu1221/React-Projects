require('dotenv').config();
const express = require("express");
const mainRouter = require("./routes/main")
const passport =require('passport')
const session = require('express-session')

const app = express();

// app.get("/",(req,res)=>{
//     console.log("Server running");
//     res.send("Server started");
// })

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.authenticate('session'));

app.use(express.json())
app.use('/api/v1',mainRouter);


const port = process.env.PORT || 3000;




const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();