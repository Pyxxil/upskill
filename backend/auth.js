module.exports = {
    jwt: {
        secret: process.env.JWT_SECRET,
        options: {
            expiresIn: '1h',
        },
        cookie: {
            maxAge: 86400000,
            httpOnly: true,
            sameSite: false,
            signed: true,
            secure: false,
            overwrite: true
        }
    }
}