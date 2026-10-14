import { useState } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      addTodo: (text) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: Date.now(), text, done: false },
          ],
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((t) => t.id !== id),
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === id ? { ...t, done: !t.done } : t
          ),
        })),
           updateTodo: (id,text) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === id ? { ...t, text } : t
          ),
        })),
    }),
    {
      name: 'localStorage',
    }
  )
);

export default useTodoStore;
    
