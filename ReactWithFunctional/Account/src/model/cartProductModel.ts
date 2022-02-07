import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../utility/database";
import {ProductInstance as ProductTable } from "./productModel";
import {CartInstance as CartTable } from "./cartModel"

interface ICartTable {
  cartID: number;
  productID?: number;
  quantity?: number;
  cartProductID?: number;
}

export class CartProductInstance extends Model<ICartTable> {}

CartProductInstance.init(
  {
    cartProductID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cartID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    productID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "CartProductTable",
  }
);

/* CartProductInstance.belongsTo(CartTable,{
  foreignKey:"cartID"
}) */