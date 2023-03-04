const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const admin = async (req, res) => {
    db.query('SELECT * FROM reservation', (err, result) => {
        if (err) throw err;
        res.render('admin', { reservation: result });
      });

      
}


module.exports = admin;