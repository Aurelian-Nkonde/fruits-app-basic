import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Fruit extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare uniqueid: string

  @column()
  declare name: string

  @column()
  declare description: string
  
  @column()
  declare image: string

  @column()
  declare season: string

  @column()
  declare province: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}