# Student Management System

A simple browser-based app to manage student records using HTML, CSS, and JavaScript.

## Features

- Add students with ID, name, email, and course
- Edit and delete existing student records
- Search students by name
- Persistent storage via `localStorage`
- Live student count display

## Files

| File | Description |
|------|-------------|
| `index.html` | Main UI structure |
| `style.css` | Styling |
| `script.js` | App logic (CRUD + search) |

## Usage

1. Open `index.html` in a browser
2. Fill in the form fields and click **Add Student**
3. Use the search bar to filter by name
4. Click **Edit** to load a record back into the form for changes
5. Click **Delete** to remove a student

## Notes

- Student ID must be unique
- Data persists in the browser's `localStorage` — no backend required
