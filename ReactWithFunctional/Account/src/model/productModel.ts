import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../utility/database";

interface IProductAttributes {
  productID?: number;
  productName:string;
  productPrice: number;
  productCategory: string;
  imageURL: string;
  productStock: number;
}

export class ProductInstance extends Model<IProductAttributes> {}

ProductInstance.init(
  {
    productID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productCategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productStock:{
      type : DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: sequelizeConnection,
    tableName: "ProductInformation",
  }
);
