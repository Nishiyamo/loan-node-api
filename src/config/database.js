const sqlite3 = require('sqlite3').verbose()

// Connection to database
const db = new sqlite3.Database('../../loan_api.db', sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.log(err.message)
  }
)
