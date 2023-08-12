module.exports = (sequelize, DataTypes) => {

  const Cart_Items = sequelize.define("Cart_Items", {
    cart_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps : true
  });

  return Cart_Items;
};
