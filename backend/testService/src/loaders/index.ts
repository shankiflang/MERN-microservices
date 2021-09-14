import dependencyInjectorLoader from '@loaders/dependencyInjector'
import expressLoader from '@loaders/express'
import mongooseLoader from '@loaders/mongooseLoader'

export default async ({ expressApp }) => {
    await mongooseLoader()

    require('@strategies/jwtStrategy')
    require('@strategies/localStrategy')

    const models = [
        {
            name: 'userModel',
            model: require('@models/user').default,
        },
    ]

    await dependencyInjectorLoader({
        models,
    })

    await expressLoader({ app: expressApp })
}
