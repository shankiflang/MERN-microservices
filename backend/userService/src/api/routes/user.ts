import { verifyUser } from '@src/authenticate'
import { Router } from 'express'

export default (route: Router) => {
    route.use('/user', route)

    route.get('/me', verifyUser, (req, res, next) => {
        res.send(req.user)
    })
}
