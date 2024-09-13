const User = require('./User')

const signUp = (req, res) => {
    console.log(req.body)

    User.create({
        
    })
    res.status(200).end()
}

module.exports = {
    signUp
}