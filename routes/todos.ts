import express from 'express';
import * as todosController from '../controllers/todos';

export const router = express.Router();

router.get('/', todosController.getAll);
router.post('/', todosController.createTodo);
router.put('/:todoId', todosController.updateTodo);
router.delete('/:todoId', todosController.deleteTodo);
