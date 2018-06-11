import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { Item } from './Item'

@Table({ tableName: 'category', timestamps: false, version: false, underscored: true })
export class Category extends Model<Category> {
  @Column({ type: DataType.TEXT })
  name: string

  @Column({ type: DataType.TEXT })
  subcategory: string

  @HasMany(() => Item, 'item_id')
  items: Item[]

}
