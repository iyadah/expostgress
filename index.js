const express = require("express");
const Pool = require("pg").Pool;
const config = require("config");

// const connectDB = require("./config/db");
var cors = require("cors");
const app = express();
var pool;
const connectDB = async () => {
  try {
    pool = await new Pool({
      user: config.user,
      host: config.host,
      database: config.database,
      password: config.password,
      port: config.port,
    });
    console.log(
      "pool:" + (await pool.query("select * from auth_user limit 10")).rowCount
    );
    console.log("Postgres connected..");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB();
// try {
//   const getUsers = (request, response) => {
//     console.log("query");

//     connectDB.pool.query(
//       "SELECT * FROM auth_user ORDER BY id asc limit 10",
//       (error, results) => {
//         if (error) {
//           throw error;
//         }
//         console.log(results.rows);
//       }
//     );
//   };
//   getUsers();

// } catch (err) {
//   console.error(err.message);
//   res.status(500).send("Server error");
// }
app.get("/", (req, res) => res.send("API RUNNING"));
app.use(express.json({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);

//app.use("/api/pg", require("./routes/api/pg"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started in port ${PORT}`));
