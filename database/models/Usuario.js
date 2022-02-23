module.exports = (sequelize, DataTypes) => {
    let alias = "User";
    let cols = {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
  
      name: {
        type: DataTypes.VARCHAR(50),
        allowNull: false,
      },
  
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
  
      token: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
  
      createdAt: {
        type: DataTypes.DATE,
      },
  
      updatedAt: {
        type: DataTypes.DATE,
      },
    };
    let config = {
      tableName: "User",
      paranoid: true,
    };
  
    let User = sequelize.define(alias, cols, config);
  
    User.associate = function (models){};
  
    return User;
  };