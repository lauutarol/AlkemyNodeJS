module.exports = (sequelize, DataTypes) => {
    let alias = "Genero";
    let cols = {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
  
      nombre: {
        type: DataTypes.VARCHAR(50),
        allowNull: false,
      },
  
      imagen: {
        type: DataTypes.BLOB,
        allowNull: false,
      },

      peliculasAsociadas:{
        type: DataTypes.VARCHAR(50),
        allowNull: false,
      }
  
    };
    let config = {
      tableName: "Genero",
      paranoid: true,
    };
  
    let Genero = sequelize.define(alias, cols, config);
  
    Genero.associate = function (models) {
      Genero.hasMany(models.Pelicula, {});
    };
  
    return Genero;
  };