import passport from 'passport'

export const verifyUser = passport.authenticate('jwt', { session: false })
