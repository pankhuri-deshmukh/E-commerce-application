module.exports = (sequelize, DataTypes) => {
  
    const Orders = sequelize.define("Orders", {
      order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      payment_status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('confirmed', 'cancelled'),
        allowNull: false
      }
    },{
        timestamps : true
    });
  
    return Orders;
  };
  