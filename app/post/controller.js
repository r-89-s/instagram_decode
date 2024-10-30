const Post = require('./Post');

const createPost = async (req, res) => {
    try {
        // Получаем данные из тела запроса
        const { caption, img, userId } = req.body;

        // Проверяем, что обязательные поля заполнены
        if (!caption || !img || !userId) {
            return res.status(400).json({ error: 'Пожалуйста, укажите caption, img и userId.' });
        }

        // Создаем новый пост в базе данных
        const newPost = await Post.create({
            caption,
            img,
            userId
        });

        // Возвращаем ответ с информацией о созданном посте
        res.status(201).json({
            message: 'Пост успешно создан!',
            post: newPost
        });
    } catch (error) {
        console.error('Ошибка при создании поста:', error);
        res.status(500).json({ error: 'Ошибка сервера при создании поста.' });
    }
};

const getPost = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).send(posts);
    } catch (error) {
        console.error('Ошибка при получении постов:', error);
        res.status(500).json({ error: 'Ошибка сервера при получении постов.' });
    }
};

module.exports = {
    getPost,
    createPost
};