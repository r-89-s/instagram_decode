const { DataTypes } = require('sequelize')
const sequelize = require('../../config/db') //импортируйте настройки подключения к базе данных
const User = require('../auth/User')
const Post = require('../post/Post')

const Comment = sequelize.define('Comment', {
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
},{
    timestamps: true,    // Включаем timestamps для создания createdAt
    updatedAt: false,    // Отключаем только updatedAt
})

Comment.belongsTo(User, {foreignKey: 'userId'})
Comment.belongsTo(Post, {foreignKey: 'postId'})

module.exports = Comment