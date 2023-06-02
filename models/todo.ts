import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional  } from 'sequelize';
import db from '../config/database.config';

export class Todo extends Model<InferAttributes<Todo>, InferCreationAttributes<Todo>> {
  declare id: CreationOptional<string>;
  declare title: string;
  declare completed: CreationOptional<boolean>;
};

Todo.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  },
  {
    sequelize: db,
    tableName: 'Todos',
  }
);
