const express = require("express");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const schema = require("./Schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const cors = require("cors")
const app = express();

// connect to db
connectDB();
app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: (process.env.NODE_ENV = "development"),
  })
);

app.listen(port, () => {
  console.log("o Server is running on", port.cyan.bold);
});
