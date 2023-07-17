const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

//files imports
const user = require("./routes/user");
const routes = require("./routes/routes");
const ConnnectedDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

//middle ware
app.use(cors());
app.use(bodyparser.json());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Method",
//     "GET,POST,PUT,PATCH,DELETE,OPTIONS"
//   );
//   res.setHeader("Access-Control-Allow-Header", "Contect-Type,Authorization");
//   next();
// });

//routes
app.use(user);
app.use(routes);

// error middle ware
app.use(errorHandler);
//calling database
ConnnectedDB().then(app.listen(5000));
