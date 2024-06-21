import { test, expect } from "@playwright/test";

test("I can create a task and it appears in the task list", async ({
    page,
}) => {
    await page.goto("http://localhost:5173/");
    await page.getByPlaceholder("Titre").fill("Test tache");
    await page.getByPlaceholder("Score").fill("10");
    await page.getByPlaceholder("Commentaire").fill("Test commentaire");
    await page.getByRole("button", { name: "Ajouter" }).click();

    const task = page.getByText("Test tache - 10 - Test commentaire");
    expect(task).toBeVisible();
});
