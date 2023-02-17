const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id:{
      type:DataTypes.INTEGER,
      allownull:false,
      primaryKey:true,
      autoincrement:true,
    },
    product_id:{
      type:Datatypes.INTEGER,
      references:{
        model:"product",
        key:"id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;


//product tag should be done
