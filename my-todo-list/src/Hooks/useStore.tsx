// react context provider and hook managing a list of todos
import React, { useState, createContext, useContext } from "react";


export interface ITodo {
  id: number;
  titre: string;
  score: number;
  coment: string;
  done: boolean;
}

interface IStore {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export function toggleTodoOperation(id: number, todos: ITodo[]): ITodo[] {
  return (
  todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  ))
}

export function removeTodoOperation(id: number, todos: ITodo[]): ITodo[] {
  return todos.filter((todo) => todo.id !== id);
}




const StoreContext = createContext<IStore | undefined>(undefined);

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return store;
};
interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, titre: "Faire les courses", score: 1, coment: "Acheter du lait", done: false },
    { id: 2, titre: "Réviser le code", score: 10, coment: "Réviser les hooks", done: false },
    { id: 3, titre: "Faire du sport", score: 15, coment: "Faire du jogging", done: false },
    { id: 4, titre: "Lire un livre", score: 5, coment: "Lire le dernier livre de Murakami", done: false },
    { id: 5, titre: "Regarder un film", score: 8, coment: "Regarder le dernier film de Tarantino", done: false },
  ]);

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };



  const toggleTodo = (id: number) => {
    setTodos(toggleTodoOperation(id, todos));
  };

  return (
    <StoreContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </StoreContext.Provider>
  );
};



