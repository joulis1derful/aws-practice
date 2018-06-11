import { Column, HasMany, Model, Table } from 'sequelize-typescript'
import { Item } from './Item'

@Table({ tableName: 'category', timestamps: false, version: false, underscored: true })
export class Category extends Model<Category> {
  @Column
  name: string
  @Column
  subcategory: string[]

  @HasMany(() => Item, 'item_id')
  items: Item[]


}
