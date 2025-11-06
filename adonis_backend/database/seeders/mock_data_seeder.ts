import MockData from '#models/mock_data'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await MockData.createMany([
      {
        title: 'Monthly Revenue',
        value: 12500.5,
        category: 'finance',
      },
      {
        title: 'User Registrations',
        value: 245,
        category: 'users',
      },
      {
        title: 'Server Uptime',
        value: 99.8,
        category: 'infrastructure',
      },
      {
        title: 'Pending Orders',
        value: 12,
        category: 'orders',
      },
      {
        title: 'Completed Tasks',
        value: 89,
        category: 'productivity',
      },
      {
        title: 'Customer Satisfaction',
        value: 94.5,
        category: 'feedback',
      },
      {
        title: 'Active Sessions',
        value: 156,
        category: 'analytics',
      },
      {
        title: 'API Response Time',
        value: 125.3,
        category: 'performance',
      },
      {
        title: 'Database Queries',
        value: 2347,
        category: 'performance',
      },
      {
        title: 'Storage Usage',
        value: 76.2,
        category: 'infrastructure',
      },
    ])
  }
}
