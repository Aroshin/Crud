import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class Contact extends Model {}

Contact.init(
  {
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    whatsapp:{
        type:DataTypes.STRING,
        allowNull:false
    }
  },{sequelize, modelName: "contact", tableName: "contact",freezeTableName:true,timestamps:false }
);

export default Contact;
