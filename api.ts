import { todo } from "node:test";
import { ITask } from "./types/tasks";

const baseUrl = 'http://localhost:3000/tasks';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}`, { cache: 'no-store' });
    const todos = await res.json();
    return todos;
};

export const addToDo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo;
}

export const editToDo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const updatedToDo = await res.json();
    return updatedToDo;
}

export const deleteToDo = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    })
}