import { Todo } from '../models/todo';

export function getAll() {
  return Todo.findAll({
    order: [
      ['createdAt', 'DESC'],
    ]
  });
};

export function getById(todoId: string) {
  return Todo.findByPk(todoId);
};

export function create(title: string) {
  return Todo.create({ title });
};

export function deleteTodo(id: string) {
  return Todo.destroy({
    where: { id },
  });
};

interface TodoUpdateFields {
  title: string,
  id: string,
  completed: boolean,
};

export function update({ title, completed, id }: TodoUpdateFields) {
  return Todo.update({ title, completed }, {
    where: { id },
  });
};
