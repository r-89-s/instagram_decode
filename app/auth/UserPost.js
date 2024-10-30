const { DataTypes } = require('sequelize')
const sequelize = require('../../config/db')
const User = require('./User')
const Post = require('../post/Post')

const UserPost = sequelize.define('UserPost', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

User.belongsToMany(Post, {through: UserPost});
Post.belongsTo(User, {through: User})

module.exports = UserPost;