import sequelize from "../config/db.js";
import { DataTypes ,Model } from "sequelize";
import Contact from "./contact.js";
import Address from "./address.js";

class Profile extends Model{}

Profile.init(
    {
        firstname :{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        fullname:{
            type:DataTypes.STRING,
            allowNull:true
        },
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true
        }
    },{sequelize,modelName:'profile',tableName:'profile',freezeTableName:true,timestamps:false}
)

Profile.hasMany(Contact,{foreignKey:"id",as:"contacts"})
Contact.belongsTo(Profile,{foreignKey:"id", as: "profile"})

Profile.hasMany(Address,{foreignKey:"id",as:"address"})
Address.belongsTo(Profile,{foreignKey:"id",as:"profile"})

export default Profile;
