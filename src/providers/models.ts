import { DataTypes, Model, UUIDV4 } from 'sequelize';
import { sequelize } from './database';

class Color extends Model {
  declare id: string;
  declare text: string;
  declare hex: string;
}

Color.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hex: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Color',
    tableName: 'colors',
    timestamps: false,
  },
);

class Size extends Model {
  declare id: string;
  declare text: string;
  declare width: number;
  declare height: number;
}

Size.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    width: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Size',
    tableName: 'sizes',
    timestamps: false,
  },
);

class Shape extends Model {
  declare id: string;
  declare text: string;
}

Shape.init(
  {
    id: {
      defaultValue: DataTypes.UUID,
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Shape',
    tableName: 'shapes',
    timestamps: false,
  },
);

class Product extends Model {
  declare id: string;
  declare size_id: string;
  declare shape_id: string;
  declare color_id: string;
  declare count: number;
}

Product.init(
  {
    id: {
      defaultValue: DataTypes.UUID,
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    shape_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Shape,
        key: 'id',
      },
      unique: 'products_color_id_size_id_shape_id_key',
    },
    color_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Color,
        key: 'id',
      },
      unique: 'products_color_id_size_id_shape_id_key',
    },
    size_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Size,
        key: 'id',
      },
      unique: 'products_color_id_size_id_shape_id_key',
    },
  },
  {
    sequelize,
    modelName: 'Shape',
    tableName: 'shapes',
    timestamps: false,
  },
);

export { Shape, Color, Size, Product };
