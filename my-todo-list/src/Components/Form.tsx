import React, { useState } from 'react';
import { useStore } from '../Hooks/useStore';

const Form = () => {
  const { addTodo } = useStore();
  const [titre, setTitre] = useState("");
  const [score, setScore] = useState("");
  const [coment, setComent] = useState("");

  function handleChangeTitre(e: React.ChangeEvent<HTMLInputElement>) {
    setTitre(e.target.value);
  }

  function handleChangeScore(e: React.ChangeEvent<HTMLInputElement>) {
    setScore(e.target.value);
  }

  function handleChangeComent(e: React.ChangeEvent<HTMLInputElement>) {
    setComent(e.target.value);
  }


  return (
    
    <div>
      <h2>Ajouter une tâche</h2>
      <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        
      }}
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({
            id: Math.floor(Math.random() * 1000),
            titre: titre,
            score: parseInt(score),
            coment: coment,
            done: false,
          });
          setTitre("");
          setScore("");
          setComent("");
        }}
      >
        <input
        style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
        }}
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={handleChangeTitre}
        />
        <input
        style={{
          backgroundColor: "black",
          color: "white",
          border: "none",
        }}
          type="number"
          placeholder="Score"
          value={score}
          onChange={handleChangeScore}
        />
        <input
          style={{
            backgroundColor: "black",
            color: "white",
            border: "none",
          }}
          type="text"
          placeholder="Commentaire"
          value={coment}
          onChange={handleChangeComent}
        />
        <button type="submit" name="Ajouter"
        >Ajouter</button>
      </form>
    </div>
  );
}

export default Form;