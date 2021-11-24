const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return Product;
};

module.exports = Product;