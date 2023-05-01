const express = require("express");
const session = require("express-session");
const cors = require("cors");

const UserRoute = require("./routes/UserRoute");

const app = express();
const port = 5000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "dkfoqijroiafoadnoaiaofjapAAAGAGigjapg",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })
);

app.use(UserRoute);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
