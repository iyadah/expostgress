const Pool = require("pg").Pool;
const config = require("config");

const connectDB = async () => {
  try {
    const pool = await new Pool({
      user: config.user,
      host: config.host,
      database: config.database,
      password: config.password,
      port: config.port,
    });
    console.log("Postgres connected..");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
};
