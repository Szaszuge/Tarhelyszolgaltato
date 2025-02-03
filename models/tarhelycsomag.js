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

const Tarhelycsomag = sequelize.define(
  'Tarhelycsomag',
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
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    tableName: 'tarhelycsomag',
    timestamps: false,
  },
);


console.log(Tarhelycsomag === sequelize.models.Tarhelycsomag); 
module.exports = Tarhelycsomag;