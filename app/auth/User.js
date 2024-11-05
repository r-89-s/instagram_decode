const { DataTypes } = require('sequelize')
const sequelize = require('../../config/db') //импортируйте настройки подключения к базе данных

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    profile_picture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},{
    timestamps: false, // Отключаем поля createdAt и updatedAt
})

User.belongsToMany(User, { 
    through: 'Subscriptions',
    as: 'followers',
    foreignKey: 'following_id',
    otherKey: 'follower_id',
});
User.belongsToMany(User, { 
    through: 'Subscriptions',
    as: 'following',
    foreignKey: 'follower_id',
    otherKey: 'following_id',
});

module.exports = User