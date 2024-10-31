// import type { HttpContext } from '@adonisjs/core/http'

import User from '#models/user'
import { AuthService } from '#services/auth_service'
import { AuthLoginValidator, AuthRegisterValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(private authService: AuthService) {}

  getAllUsers() {
    return this.authService.AllUsers()
  }

  getUser({ params }: HttpContext) {
    const id = params.id
    return this.authService.User(id)
  }

  async register({ request }: HttpContext) {
    const payload = await request.validateUsing(AuthRegisterValidator)
    return this.authService.Create({ ...payload })
  }

  async login({ request }: HttpContext) {
    const payload = await request.validateUsing(AuthLoginValidator)
    return await this.authService.login(payload.email, payload.password)
  }

  async logout({ auth }: HttpContext) {
    // const user = auth.user!
    const user = auth.getUserOrFail()
    await User.accessTokens.delete(user, user.id)
  }
}
