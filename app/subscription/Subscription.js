const { DataTypes } = require('sequelize')
const sequelize = require('../../config/db') //импортируйте настройки подключения к базе данных
const User = require('../auth/User')

const Subscription = sequelize.define('Subscription', {
    follower_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
        onDelete: 'CASCADE', // Удалить подписки при удалении пользователя
    },
    following_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
        onDelete: 'CASCADE', // Удалить подписки при удалении пользователя
    },
}, {
    timestamps: true, // Добавить поле createdAt
    updatedAt: false, // Отключить поле updatedAt
});

// Устанавливаем связь многие ко многим через модель Subscription
User.belongsToMany(User, { as: 'Followers', through: Subscription, foreignKey: 'following_id' });
User.belongsToMany(User, { as: 'Following', through: Subscription, foreignKey: 'follower_id' });

module.exports = Subscription;
