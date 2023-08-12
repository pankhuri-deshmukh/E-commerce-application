module.exports = (sequelize, DataTypes) => {

  const Order_Items = sequelize.define("Order_Items", {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
  },{
    timestamps : true
  });

  return Order_Items;
};
