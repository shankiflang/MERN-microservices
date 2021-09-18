import { Document, ObjectId } from 'mongoose'

export interface IUserJWT extends Document {
    _id: ObjectId
    perms: Array<string>
    iat: string
    exp: string
}
