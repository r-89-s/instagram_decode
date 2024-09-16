const User = require('./User')
const bcrypt = require('bcrypt');

const saltRounds = 10;

const signUp = async (req, res) => {
    try {
        // Получаем данные из тела запроса
        const { email, password, phone, full_name, username, bio, profile_picture } = req.body;

        // Проверяем, что обязательные поля присутствуют
        if (!email || !password || !phone || !username) {
            return res.status(400).json({ error: 'Пожалуйста, заполните все обязательные поля (email, password, phone, username).' });
        }

        // Хэшируем пароль с помощью bcrypt
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Создаем нового пользователя в базе данных с хэшированным паролем
        const newUser = await User.create({
            email,
            password: hashedPassword, // сохраняем хэшированный пароль
            phone,
            full_name,
            username,
            bio,
            profile_picture,
        });

        // Возвращаем ответ с созданным пользователем (можно не возвращать пароль)
        res.status(201).json({
            message: 'Пользователь успешно создан!',
            user: {
                id: newUser.id,
                email: newUser.email,
                phone: newUser.phone,
                full_name: newUser.full_name,
                username: newUser.username,
                bio: newUser.bio,
                profile_picture: newUser.profile_picture,
            }
        });
    } catch (error) {
        console.error('Ошибка при создании пользователя:', error);

        // Если ошибка связана с уникальными полями (например, email или phone уже существуют)
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'Пользователь с таким email или номером телефона уже существует.' });
        }

        // Возвращаем общую ошибку
        res.status(500).json({ error: 'Ошибка сервера при создании пользователя.' });
    }
    
    
    
    console.log(req.body)

    // User.create({
        
    // })
    // res.status(200).end()
}

module.exports = {
    signUp
}