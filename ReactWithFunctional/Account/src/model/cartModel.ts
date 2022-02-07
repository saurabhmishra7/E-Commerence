import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../utility/database";
import { CartProductInstance as CartProductTable } from "./cartProductModel";
import {ProductInstance as Product} from "./productModel"

interface ICartAttributes {
  cartID?: number;
  userID: number;
}

export class CartInstance extends Model<ICartAttributes> {}

CartInstance.init(
  {
    cartID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "CartTable",
  }
);


 /* CartInstance.hasMany(CartProductTable,{
  foreignKey:"cartID"
}); */ 

/* CartInstance.belongsToMany(Product,{
foreignKey:"productID",
through: CartProductTable
})
 */