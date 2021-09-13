import auth from '@routes/auth'
import user from '@routes/user'
import { Router } from 'express'

export default () => {
    const app = Router()
    const route = Router()

    app.use('/', route)

    auth(route)
    user(route)

    return app
}
