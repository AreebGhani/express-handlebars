const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const router = require("./routes/routes");

const app = express();
const port = process.env.PORT || 3000;

// Express-Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "static")));
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running at port ${port} => http://localhost:${port}`);
});
