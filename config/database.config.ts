import { Sequelize } from 'sequelize';

const db = new Sequelize('todos', '', '', {
  storage: '.database.sqlite',
  dialect: 'sqlite',
  logging: false,
});

export default db;
