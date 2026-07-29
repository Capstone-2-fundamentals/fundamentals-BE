const { DataTypes, STRING } = require ("sequelize")
const db = require ("../db")


const Expense = db.define("Expense", {
    title: {
        type:DataTypes.STRING,
        allowNull:false,
        validate: { notEmpty:true },

    },
    amount:{
        type:DataTypes.FLOAT,
        allowNull:false,
        validate:{ notEmpty:true},
    },
    category:{
        type:DataTypes.STRING,
        allowNull: false
    },
    note: {
        type: DataTypes.STRING,
        allowNull: true
    },
    paid:{
        type:DataTypes.BOOLEAN
    
        
    },


})

module.exports = {db,Expense}