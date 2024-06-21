import React from "react";
import { test, expect, vi } from "vitest";
import  "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import userEvent, {UserEvent} from "@testing-library/user-event";

import { useStore, ITodo , StoreProvider } from "../src/Hooks/useStore";
import Form from "../src/Components/Form";
import List from "../src/Components/List";


const todos: ITodo[] = [
    {
        id: 1,
        titre: "Faire les courses",
        score: 1,
        coment: "Acheter du lait",
        done: false,
    },
    {
        id: 2,
        titre: "Réviser le code",
        score: 10,
        coment: "Réviser les hooks",
        done: false,
    },
    {
        id: 3,
        titre: "Faire du sport",
        score: 15,
        coment: "Faire du jogging",
        done: false,
    },
    {
        id: 4,
        titre: "Lire un livre",
        score: 5,
        coment: "Lire le dernier livre de Murakami",
        done: false,
    },
    {
        id: 5,
        titre: "Regarder un film",
        score: 8,
        coment: "Regarder le dernier film de Tarantino",
        done: false,
    },
];


test ("Possible to add a todo", async () => {
    render(<StoreProvider><Form /> <List/></StoreProvider>);

    const input = screen.getByPlaceholderText("Titre");
    await userEvent.type(input, "Faire la vaisselle");

    const input2 = screen.getByPlaceholderText("Score");
    await userEvent.type(input2, "10");

    const input3 = screen.getByPlaceholderText("Commentaire");
    await userEvent.type(input3, "Laver les assiettes");

    const button = screen.getByText("Ajouter");
    await userEvent.click(button);

    expect(screen.getByText("Faire la vaisselle")).toBeInTheDocument();
    expect(screen.getByText("Laver les assiettes")).toBeInTheDocument();
}
);





