const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
  });

  return Product;
};

module.exports = Product;