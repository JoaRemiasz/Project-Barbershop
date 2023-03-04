const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const zarezerwowane = async (req, res) => {
    db.query('SELECT * FROM reservation', (err, result) => {
        if (err) throw err;
        res.render('zarezerwowane', { reservation: result });
      });
}
module.exports = zarezerwowane;