module.exports = (sequelize, DataTypes) => {

  const Carts = sequelize.define("Carts", {
    cart_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },{
    timestamps : true
  });

  return Carts;
};
