import EntityWithDates from 'src/common/entity-with-dates.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';
export enum TodoStatusEnum {
  'actif' = 'En cours',
  'waiting' = 'En attente',
  'done' = 'Finalise',
}

@Entity()
export class TodoEntity extends EntityWithDates {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: TodoStatusEnum.waiting })
  public state: TodoStatusEnum;
}

// export const SchemaWithDateFields = (entity: EntityClassOrSchema<any>)=>new EntitySchema({
//   columns: {
//     createdAt: {
//       type: Date,
//       createDate: true,
//       update:false,
//     },
//     updatedAt: {
//       type: Date,
//       updateDate: true,
//     },
//     deletedAt: {
//       type: Date,
//       deleteDate: true,
//     }
//   },
//   name: entity.name,
//   extends: TodoEntity.name,
// })

export default TodoEntity;
