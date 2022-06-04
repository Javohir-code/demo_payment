const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = express();

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
  handlebars: allowInsecurePrototypeAccess(Handlebars),
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/home"));
app.use("/payed", require("./routes/payed"));
app.use("/clickuz", require("./routes/clickuz"));

const PORT = process.env.PORT || 8080;

async function start() {
  try {
    mongoose.connect("mongodb://localhost/click", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
