module.exports = (sequelize, DataTypes) => {
    let alias = "Pelicula";

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
  
      titulo: {
        type: DataTypes.VARCHAR(50),
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
      },
  
      updatedAt: {
        type: DataTypes.DATE,
      },
  
      calificacion: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      personajesAsociados:{
        type: DataTypes.VARCHAR(50),
        allowNull: false,
      }
     
    };
  
    let config = {
      tableName: "Pelicula",
      paranoid: true,
    };
  
    let Pelicula = sequelize.define(alias, cols, config);
  
    Pelicula.associate = function (models) {
      Pelicula.belongsToMany(models.Personajes, {});
  
      Pelicula.associate = function (models) {
        Pelicula.belongsTo(models.Genero, {});
      };
    };
  };