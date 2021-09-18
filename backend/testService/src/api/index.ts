import test from '@routes/test'
import { Router } from 'express'

export default () => {
    const app = Router()

    app.use('/', test())

    return app
}
