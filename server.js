const express = require("express");
const connectDB = require("./config/db");
const app = express(); //initialising express as app

app.get("/", (req, res) =>
  res.json({ msg: `Welcome to the contact keeper API...` })
);
//Connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
//Define routes

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.eventNames.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//The upper lines creates the server
