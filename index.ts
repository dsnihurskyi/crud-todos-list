import express from 'express';
import db from './config/database.config';
import { router as todosRouter } from './routes/todos';

db.sync().then(() => {
  console.log('connected to database');
});

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(todosRouter);

app.set("view engine", "pug");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
