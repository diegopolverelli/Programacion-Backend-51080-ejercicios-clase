import {Sequelize, DataTypes} from 'sequelize';

// config conexión
export const sequelize=new Sequelize('pruebas_mysql', 'root', '123', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: true
})

// configurar el modelo:
export const usuariosModelo = sequelize.define('usuarios', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});


// sincronizar modelos con DB
sequelize.sync()
    .then(()=>{
        console.log('Modelos sincronizados')
    })
    .catch((error)=>{
        console.log(error)
    });
