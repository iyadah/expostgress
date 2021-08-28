const Pool = require("pg").Pool;
const config = require("config");
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
console.log("pool before exports: " + pool);
module.exports = {
  connectDB,
  pool,
};
