export default {
    /**
     * Node Env
     */
    env: process.env.NODE_ENV || 'development',

    /**
     * Node Port
     */
    port: parseInt(process.env.PORT, 10),

    /**
     * MongoDB Url
     */
    mongoDb: process.env.MONGO_DB + process.env.MONGO_DB_NAME,

    /**
     * Cookie Secret
     */
    cookieSecret: process.env.COOKIE_SECRET,

    /**
     * JWT Secret
     */
    jwtSecret: process.env.JWT_SECRET,

    refreshToken: {
        secret: process.env.REFRESH_TOKEN_SECRET,
        expiry: process.env.REFRESH_TOKEN_EXPIRY,
    },

    sessionExpiry: process.env.SESSION_EXPIRY,

    whitelistedDomains: process.env.WHITELISTED_DOMAINS
        ? process.env.WHITELISTED_DOMAINS.split(',')
        : [],
}
