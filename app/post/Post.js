const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('../auth/User')

const Post = sequelize.define('Post', {
    caption: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    updatedAt: false
});

// Один пользователь может иметь много постов
Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = Post;