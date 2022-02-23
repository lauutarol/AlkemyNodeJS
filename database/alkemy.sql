create database if not exists alkemy;

create table Personajes(
id INT  AUTO_INCREMENT UNIQUE KEY,
image LONGBLOB NOT NULL ,
nombre VARCHAR(50) NOT NULL,
edad INT NOT  NULL,
peso FLOAT NOT NULL,
historia VARCHAR(250) NOT NULL,
peliculasAsociadas VARCHAR(250) NOT NULL);

create table Pelicula(
id INT AUTO_INCREMENT UNIQUE KEY,
image LONGBLOB NOT NULL ,
titulo VARCHAR(50) NOT NULL,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
calificacion FLOAT NOT NULL,
personajesAsociados VARCHAR(250) NOT NULL);


create table Genero(
id BIGINT AUTO_INCREMENT UNIQUE KEY,
nombre VARCHAR(50) NOT NULL,
image LONGBLOB NOT NULL ,
peliculasAsociadas VARCHAR(250) NOT NULL);

create table Usuarios(



