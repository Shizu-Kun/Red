const { createConnection } = require('mysql');

const databaseConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "godong"
};

let con = createConnection(databaseConfig);

con.connect(err => {
  if (err) {
    return;
  }

  setInterval(() => {
    con.query('SELECT 1', err => {
      if (err) {
        return;
      }
    });
  }, 5000);
});

module.exports = con;