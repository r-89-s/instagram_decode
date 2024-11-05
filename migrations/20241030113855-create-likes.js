'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Likes', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            post_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Posts', // Название таблицы Post, которую вы уже создали
                    key: 'id',
                },
                onDelete: 'CASCADE', // Удалить лайк при удалении поста
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users', // Название таблицы User, которую вы уже создали
                    key: 'id',
                },
                onDelete: 'CASCADE', // Удалить лайк при удалении пользователя
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('now'), // Устанавливаем текущее время как значение по умолчанию
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Likes'); // Удаляем таблицу Likes
    }
};