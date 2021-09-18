import expressLoader from '@loaders/express'
import mongooseLoader from '@loaders/mongooseLoader'

export default async ({ expressApp }) => {
    await mongooseLoader()

    require('@strategies/jwtStrategy')


    await expressLoader({ app: expressApp })
}
