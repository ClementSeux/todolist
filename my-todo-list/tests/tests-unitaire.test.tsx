import React from "react";
import { test, expect, vi } from "vitest";
import  "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import userEvent, {UserEvent} from "@testing-library/user-event";

import { toggleTodoOperation, removeTodoOperation, ITodo} from "../src/Hooks/useStore";


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

test("toggleTodoOperation", () => {
    const result = toggleTodoOperation(1, todos);
    expect(result).toEqual([
        {
            id: 1,
            titre: "Faire les courses",
            score: 1,
            coment: "Acheter du lait",
            done: true,
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
    ]);
});

test("removeTodoOperation", () => {
    const result = removeTodoOperation(1, todos);
    expect(result).toEqual([
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
    ]);
});







