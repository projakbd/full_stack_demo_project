/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import MockData from '#models/mock_data'

import '../app/routes/auth_route.js'

router
  .get('/api/user', async ({ auth, response }) => {
    await auth.authenticate()

    return response.ok({
      success: true,
      data: {
        user: auth.user!.serialize(),
      },
    })
  })
  .use(middleware.auth({ guards: ['jwt'] }))

router
  .get('/api/dashboard', async ({ auth, response }) => {
    await auth.authenticate()

    const mockData = await MockData.all()

    return response.ok({
      success: true,
      data: {
        dashboard: {
          welcomeMessage: `Hello, ${auth.user!.fullName || auth.user!.email}`,
          stats: mockData,
          recentActivity: [
            { action: 'Login', timestamp: new Date().toISOString() },
            { action: 'Profile View', timestamp: new Date().toISOString() },
          ],
        },
      },
    })
  })
  .use(middleware.auth({ guards: ['jwt'] }))

router
  .post('/api/test', async ({ request, auth, response }) => {
    await auth.authenticate()

    const { message, data } = request.only(['message', 'data'])

    return response.ok({
      success: true,
      message: 'Test API call successful',
      received: {
        message,
        data,
        authenticatedUser: auth.user!.email,
        timestamp: new Date().toISOString(),
      },
    })
  })
  .use(middleware.auth({ guards: ['jwt'] }))

router.get('/api/health', async ({ response }) => {
  return response.ok({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
  })
})
