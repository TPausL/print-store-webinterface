import { env } from 'process';
import { Sequelize } from 'sequelize';

//@ts-ignore
export const sequelize = new Sequelize(env.DSN);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
