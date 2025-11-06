import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        email: 'test@example.com',
        password: 'password',
        fullName: 'Test User',
      },
      {
        email: 'admin@example.com',
        password: 'admin123',
        fullName: 'Admin User',
      },
      {
        email: 'john.doe@example.com',
        password: 'password123',
        fullName: 'John Doe',
      },
      {
        email: 'jane.smith@example.com',
        password: 'password123',
        fullName: 'Jane Smith',
      },
      {
        email: 'demo@example.com',
        password: 'demo123',
        fullName: 'Demo User',
      },
    ])
  }
}
