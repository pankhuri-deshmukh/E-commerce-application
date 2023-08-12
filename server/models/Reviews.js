module.exports = (sequelize, DataTypes) => {
  
    const Reviews = sequelize.define("Reviews", {
      review_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
        timestamps : true
    });

    return Reviews;
  };
  