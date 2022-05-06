const {connect} = require("mongoose");
const uri ="mongodb://kgf:Y0KpYDBA7wrDMoMe@cluster0-shard-00-00.kjyps.mongodb.net:27017,cluster0-shard-00-01.kjyps.mongodb.net:27017,cluster0-shard-00-02.kjyps.mongodb.net:27017/mySecondDatabase?ssl=true&replicaSet=atlas-pfvszs-shard-0&authSource=admin&retryWrites=true&w=majority";


connect(uri)
  .then(conn => console.log("mongo connected"))
  .catch(console.log)