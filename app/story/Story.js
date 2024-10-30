const { DataTypes } = require('sequelize')
const sequelize = require('../../config/db') //импортируйте настройки подключения к базе данных
const User = require('../auth/User')

const Story = sequelize.define('Story', {
    media_url: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    expires_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User, // Ссылка на модель User
            key: 'id',
        },
        onDelete: 'CASCADE', // Удалить историю при удалении пользователя
        allowNull: false,
    },
},{
    timestamps: true,    // Включаем timestamps для создания createdAt
    updatedAt: false,    // Отключаем только updatedAt
})

Story.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(Story, { foreignKey: 'userId', as: 'stories' });

module.exports = Story