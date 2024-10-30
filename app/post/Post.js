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

// В будущем можно будет определить ассоциации с лайками и комментариями:
// Post.hasMany(Like, { foreignKey: 'postId', as: 'likes' });
// Post.hasMany(Comment, { foreignKey: 'postId', as: 'comments' });

module.exports = Post;