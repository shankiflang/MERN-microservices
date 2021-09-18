import config from '@config/index'
import { IUserJWT } from '@interfaces/IUser'
import passport from 'passport'

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const opts = { jwtFromRequest: '', secretOrKey: '' }

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = config.jwtSecret

const isGoodType = (input: any): input is IUserJWT =>
    input._id !== undefined &&
    input.perms !== undefined &&
    input.iat !== undefined &&
    input.exp !== undefined

// TODO : Automatiser les checks

passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
        if (!isGoodType(jwt_payload)) {
            console.log('Not the good type')
        }
        return done(null, { user: jwt_payload })
    }),
)
