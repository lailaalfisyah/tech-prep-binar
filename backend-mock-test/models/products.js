'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static inputProduct = ({ name, price, imageurl }) => {
      return this.create({
        name,
        price,
        imageurl
      })
    }

    static editProduct = (id, { name, price, imageurl }) => {
      return this.update({
        name,
        price,
        imageurl
      }, {
        where: {
          id
        }
      })
    }
  };

  Products.init({
    name: DataTypes.STRING(50),
    price: DataTypes.INTEGER(8),
    imageurl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};