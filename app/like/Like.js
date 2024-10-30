const { DataTypes } = require('sequelize')
const sequelize = require('../../config/db') //импортируйте настройки подключения к базе данных
const User = require('../auth/User')
const Post = require('../post/Post')

const Like = sequelize.define('Like', {

},{
    timestamps: true,    // Включаем timestamps для создания createdAt
    updatedAt: false,    // Отключаем только updatedAt
})

Like.belongsTo(User, {foreignKey: 'userId'})
Like.belongsTo(Post, {foreignKey: 'postId'})

module.exports = Like