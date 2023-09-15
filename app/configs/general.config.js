module.exports = {
    DBConnectors: {
        host: process.env.DB_HOST || "db4free.net",
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USER || "longsuke123",
        password: process.env.DB_PASSWORD || "Zxzzcxczc0@",
        database: process.env.DB_NAME || "longsuke",
        dialect: process.env.DB_DIALECT || "mysql",
    },
    jwtAuthKey: 'abcxyz',
    tokenLoginExpiredDays:'25 days'
};
