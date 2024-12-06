# TaskManager

A simple task manager to add, categorize, and track tasks with deadlines. Helps in organizing tasks by categories such as Personal, Work, and Other. It also supports light and dark mode switching, and saves the task list even after refreshing the page using `localStorage`.

## Features

- Add tasks with category (Personal, Work, Other) and an optional deadline.
- Categorize tasks and filter by All, Personal, Work, Other.
- Light and Dark mode toggle using an icon.
- Task list is saved in `localStorage`, so it persists even after a page refresh.
- Each task shows:
  - **Do**: The task description.
  - **For**: The category of the task (Personal, Work, Other).
  - **Due**: The deadline, if provided.
- Buttons on each task for marking it as **Completed** or **Delete**.
- Color-coded tasks based on category.

## How to Use

1. Download or clone the repository to your local machine.
   
2. Open the `TaskHTML.html` file in your browser.

3. Add tasks by entering the task description, selecting a category (Personal, Work, or Other), and optionally choosing a deadline.

4. The tasks will be displayed with their description, category, and due date (if set). 

5. Each task has two buttons on the right:
   - **Completed**: Marks the task as completed.
   - **Delete**: Removes the task from the list.

6. The task list will persist even if you refresh the page, thanks to the use of `localStorage`.

7. You can toggle between **Light Mode** and **Dark Mode** using the icon at the top right.

## Technologies Used

- HTML
- CSS
- JavaScript

## License

This project is open source and available under the [MIT License](LICENSE).
