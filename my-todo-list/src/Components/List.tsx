import React from 'react';
import  {useStore} from '../Hooks/useStore';
import ListItem from './ListItem';

const List = () => {
  const { todos } = useStore();
  return (
    <div>
      <h2>Liste des Todos</h2>
      <ul
        style={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "10px",
        }}
      >
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} />
        ))}
      </ul>
      
    </div>
  );
};

export default List;