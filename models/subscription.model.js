const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSER,
    process.env.DBPASSWORD,
    {
      host: process.env.DBHOST,
      dialect: "mysql",
    }
  );

const Elofizetes = sequelize.define(
  'Elofizetes',
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userid: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    csomagid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
  
      },
      domain: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
  },
  {
    tableName: 'subscription',
    timestamps: false,
  },
);


console.log(Elofizetes === sequelize.models.Elofizetes); 
module.exports = Elofizetes;