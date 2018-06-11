import { BelongsTo, Column, Model, Table } from 'sequelize-typescript'
import { Category } from './Category'
import { Site } from './Site'

@Table({ tableName: 'item', timestamps: false, version: false, underscored: true })
export class Item extends Model<Item> {
  @Column
  name: string
  @Column
  price: number
  @Column
  source: Site

  @BelongsTo(() => Category, 'category_id')
    category: Category
}
