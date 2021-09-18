import config from '@config/index'
import mongoose from 'mongoose'

export default async () => {
    const connection = await mongoose.connect(config.mongoDb, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })

    console.log('Connection OK')
}
