const express = require("express"); //express app
const cors = require("cors"); //cross origin rss sharing to allow client to access/make requests to server

const app = express();
app.use(cors()); //

app.use(express.json()); //parses incoming requests
const PORT = 8000;

//listenin to requests
app.listen(PORT, "localhost", () => {
  console.log("Server started successfully");
});

//hardcoded the user credentials
const EMAIL = "disha@gmail.com";
const PASSWORD = "123";

//post request from client, callback function, log user req.body
app.post("/login", (req, res) => {
  console.log("EMAIL: ", req.body.email);
  console.log("PASSWORD: ", req.body.password);

  //validating if email and pwd were submitted, and if they match
  if (!req.body?.email || !req.body?.password) {
    res.status(400).send("Please send both email and password");
  } else {
    if (req.body.email === EMAIL && req.body.password === PASSWORD) {
      // res.send(true);
      res.send({ success: true, message: "SERVER: Login success" });
    } else {
      // res.send(false);
      res.send({ success: false, message: "SERVER: Login failed" });
    }
  }
});
