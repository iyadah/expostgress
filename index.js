const express = require("express");
const connectDBES = require("./config/db");
var cors = require("cors");
const app = express();
connectDBES.connectDB();
app.get("/", (req, res) => res.send("API RUNNING"));
app.use(express.json({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/pg", require("./routes/api/pg"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started in port ${PORT}`));
