import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'fruits'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('uniqueid')
      table.string('name')
      table.string('description')
      table.string('image')
      table.string('season')
      table.string('province')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}