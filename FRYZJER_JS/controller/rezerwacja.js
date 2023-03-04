const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const rezerwacja = async (req, res) => {
    const {lastname, date, fromTime, upTime, service} = req.body
    if(!lastname || !date || !fromTime || !upTime || !service) return res.json({status: "error", error: "Enter your details"});
    else{
        db.query('SELECT * FROM reservation WHERE date = ? AND ((fromTime >= ? AND fromTime < ?) OR (upTime > ? AND upTime <= ?) OR (fromTime <= ? AND upTime >= ?))', [date, fromTime, upTime, fromTime, upTime, fromTime, upTime], async (err, result) => {
            if(err) throw err;
            if(result[0]) return res.json({ status: "error", error: "Termin został już zarezerwowany"})
            else{
                db.query('INSERT INTO reservation SET ?', {id: '', lastname: lastname, date: date, fromTime: fromTime, upTime: upTime, service: service, state: "w trakcie"}, (error, results) => {
                    if(error) throw error;
                    return res.json({ status: "success", success: "Rezerwacja została złożona!"})
                })
            }
        })
    }
}
module.exports = rezerwacja;