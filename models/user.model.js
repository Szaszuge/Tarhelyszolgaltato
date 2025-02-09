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

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
        allowNull: false,

    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    role: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
  },
  {
    tableName: 'users',
    timestamps: false,
  },
);


console.log(User === sequelize.models.User); 
module.exports = User;