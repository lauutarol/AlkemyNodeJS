module.exports = (sequelize, DataTypes) => {
    let alias = "Personajes";
  
    let cols = {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },

      imagen: {
        type: DataTypes.BLOB,
        allowNull: false,
      },

      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
  
      edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  
      peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
  
      historia: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      peliculasAsociadas: {
        type: DataTypes.STRING(255),
        allowNull: false,
      }
      
    };
  
    let config = {
      tableName: "Personajes",
      paranoid: true,
    };
  
    let Personajes = sequelize.define(alias, cols, config);
  
    Personajes.associate = function (models) {
      Personajes.belongsToMany(models.Pelicula, {});
  
      return Personajes;
    };
  };