import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class Address extends Model {}

Address.init(
  {
    street:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pincode:{
        type:DataTypes.STRING,
        allowNull:false
    }
  },{sequelize, modelName:"address", tableName:"address", freezeTableName:true, timestamps:false}
);

export default Address;
