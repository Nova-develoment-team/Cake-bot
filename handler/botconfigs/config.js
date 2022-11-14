module.exports = {
  Bot: {
  token: process.env.token,
  prefix: ">", //put your prefix here or remove ">" and put $getServerVar[prefix] for many server and prefix changablity
  intents: "all",
    
    database: {
    db: require("dbdjs.db"),
    type: "default",
    path: "./database/",
    tables: ["main", "variables"],
  }
  
  }
}