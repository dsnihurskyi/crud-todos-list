import { Request, Response } from 'express';
import * as todosService from '../services/todos';
import todoRow from '../templates/todoRow';

export async function getAll(req: Request, res: Response) {
  const todos = await todosService.getAll();

  return res.render("index", { todos: todos });
};

export async function createTodo(req: Request, res: Response) {
  const { title } = req.body;
  const { dataValues: { id, completed } } = await todosService.create(title);

  return res.send(todoRow({ id, title, completed }));
};

export async function updateTodo(req: Request, res: Response) {
  const { todoId } = req.params;
  const { title, completed } = req.body;
  const currentTodo = await todosService.getById(todoId);

  if (currentTodo?.dataValues) {
    const updatePayload = { id: todoId, title, completed: Boolean(completed) };

    await todosService.update(updatePayload);

    return res.send(todoRow(updatePayload));
  }

  return res.send('');
};

export async function deleteTodo(req: Request, res: Response) {
  const { todoId } = req.params;
  await todosService.deleteTodo(todoId);

  return res.send('');
};
