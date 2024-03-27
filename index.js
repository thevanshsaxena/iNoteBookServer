const express = require("express");
const { connectToMongoodb } = require("./db");
const app = express();
const port = 4005;
var cors = require('cors')

app.use(cors())

connectToMongoodb('mongodb://localhost:27017/');

app.use(express.json());
app.use('/api/auth',(req,res,next)=>{console.log ("body = ",req.body),next()}
,require('./Routes/auth'))
app.use('/api/notes',require('./Routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  // .then(() => console.log("connected to mongo"))
  console.log("connected to mongo");
});
