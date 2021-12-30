const db_confg = require('../config/connection')
const {Sequelize,DataTypes} = require("sequelize")

const sequelize = new Sequelize("db_name","User","pass",{
    host:"host",
    dialect:"mysql",
    logging:false
})


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


db.profile = require('./clutch_utility_db')(sequelize,DataTypes)


module.exports = db
