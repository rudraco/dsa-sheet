const mongoose = require("mongoose");
const app = require("./config/express");
const port = 3000;

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/dsa_sheet", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Mongoose Connected");
});
mongoose.connection.on("error", (err) => {
  console.log("Error while connecting to db", err);
});

app.listen(port, () => {
  console.log(`Server active on port- ${port}`);
});
