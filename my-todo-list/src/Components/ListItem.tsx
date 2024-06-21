import React, { useState } from 'react';
import { ITodo } from '../Hooks/useStore';
import { useStore } from '../Hooks/useStore';

interface ListItemProps {
  todo: ITodo;
} 

const ListItem = ({ todo }: ListItemProps) => {
  const [showModal, setShowModal] = useState(false);
  const { toggleTodo } = useStore();

  function getDoneStyle() {
    return todo.done ? "line-through" : "none";
  }

  function getColor() {
    if (todo.score < 8) {
      return "red";
    } else if (todo.score < 10) {
      return "orange";
    } else if (todo.score < 13) {
      return "yellow";
    } else {
      return "green";
    }
  }

  function getElipsedComent() {
    if (todo.coment.length > 20) {
      return todo.coment.slice(0, 20) + "...";
    } else {
      return todo.coment;
    }
  }

  function closeModal () {
    console.log("closeModal");
    setShowModal((previous) => false);
  }

  return (
    <li
      key={todo.id}
      style={{ 
        listStyleType: "none",
        textDecoration: getDoneStyle(),
        cursor: "pointer" ,
        color: getColor()
      }}
      >
        <span
          onClick={() => setShowModal(true)}
        >
          {todo.titre} - {todo.score} - {getElipsedComent()} - {todo.done ? "Fait" : "A faire"}
        </span>
      <input 
        type="checkbox" 
        checked={todo.done} 
        onChange={() => toggleTodo(todo.id)} 
        style={{
          marginLeft: "10px",
          cursor: "pointer",
        }}
        
        />
    
    
    <div
      style={{
        display: showModal ? "block" : "none",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <h2>{todo.titre}</h2>
      <p>{todo.score}</p>
      <p>{todo.coment}</p>
      <p>{todo.done ? "Fait" : "A faire"}</p>
      <button onClick={(e) =>{
        e.stopPropagation();
        setShowModal(false);
      }
      }
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
      >Fermer</button>
    </div>    
    </li>
  );
}


export default ListItem;