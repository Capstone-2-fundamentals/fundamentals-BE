//import the Express library which is a framework for Node.js that makes it easier to build servers and handle HTTP req/res
const express = require("express");
const { db } = require("./models/expense");
const router = require("./routes/expenses")
const cors = require("cors")

//create an express app instance. the app object is what's use to define routes,add middleware and start the server
const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.redirect("/expenses");
});
app.get("/health", (req, res) => {
  res.json({ message: "good" });
});

app.use("/expenses", router)

db.sync().then(() => {
  app.listen(8080, () => {
    console.log("Server running on port 8080");
  });
});
