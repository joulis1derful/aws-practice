import { BelongsTo, Column, DataType, Model, Table } from 'sequelize-typescript'
import { Category } from './Category'

@Table({ tableName: 'item', timestamps: false, version: false, underscored: true })
export class Item extends Model<Item> {
  @Column({ type: DataType.TEXT })
  name: string
  @Column({ type: DataType.DOUBLE })
  price: number
  @Column({ type: DataType.TEXT })
  source: string
  @Column({ type: DataType.TEXT })
  currency: string

  @BelongsTo(() => Category, 'category_id')
    category: Category
}
