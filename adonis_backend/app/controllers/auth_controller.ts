import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request, response, auth }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)

    try {
      const user = await User.create(payload)
      const token = await auth.use('jwt').generate(user)

      return response.created({
        user: user.serialize(),
        token: {
          ...token,
        },
      })
    } catch (error) {
      return response.badRequest(error.message)
    }
  }

  async login({ request, response, auth }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    try {
      const user = await User.verifyCredentials(email, password)
      const token = await auth.use('jwt').generate(user)

      return response.ok({
        ...token,
      })
    } catch (error) {
      return response.unauthorized('Invalid credentials')
    }
  }

  async logout({ response, auth }: HttpContext) {
    try {
      await auth.authenticate()
      return response.ok({
        success: true,
        message: 'Logged out successfully',
      })
    } catch (error) {
      return response.unauthorized({
        success: false,
        message: 'Unauthenticated',
      })
    }
  }
}
