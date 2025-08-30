const express = require("express");
const route = require("./routes/route");
const session = require("express-session");
const engine = require("ejs-mate");
const app = express();
const port = 8080;

app.engine('ejs', engine);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: "social-media-secret",
    resave: false,
    saveUninitialized: true
}));
app.use("/", route);

app.listen(port, () => {
    console.log(`server run on port: ${port}`);
})