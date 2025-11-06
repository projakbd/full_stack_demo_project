import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class MockData extends BaseModel {
  public static table = 'mock_data'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare value: number

  @column()
  declare category: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
