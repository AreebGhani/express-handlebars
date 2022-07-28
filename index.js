const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");

const port = process.env.PORT || 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "routes/routes")));

app.listen(port, () => {
  console.log(`Server runnimg at port ${port} => http://localhost:${port}`);
});
