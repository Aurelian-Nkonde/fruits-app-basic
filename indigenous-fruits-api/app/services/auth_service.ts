import User from '#models/user'
import { IUser } from '../Interfaces/user.js'
import generateUniqueId from '../utils/generateUniqueId.js'

export class AuthService {
  constructor() {}

  async AllUsers() {
    return await User.all()
  }

  async User(id: string) {
    return await User.findByOrFail('uniqueid', id)
  }

  async Create(data: IUser) {
    const checkExistance = await User.findBy({ name: data.name, email: data.email })
    if (checkExistance != null) {
      console.error('This user already exists')
      throw new Error('User exists!')
    }
    const user = await new User()
      .fill({
        name: data.name,
        email: data.email,
        uniqueid: generateUniqueId(),
        password: data.password,
      })
      .save()
    const token = await User.accessTokens.create(user)
    return {
      type: 'bearer',
      value: token.value!.release(),
    }
  }

  async login(email: string, password: string) {
    const user = await User.verifyCredentials(email, password)
    return User.accessTokens.create(user)
  }
}
