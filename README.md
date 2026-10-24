# Leafline — Library Management System (Plain HTML, CSS & JavaScript)

A beginner-friendly library dashboard. It uses **no framework, no package installation, and no build tools**.

## Run the website
1. Extract the ZIP file.
2. Open the `leafline-library-html` folder.
3. Double-click `index.html` to open it in Chrome, Edge, or Firefox.

That is all you need to run the local demo. For easier editing, open the folder in Visual Studio Code. You can optionally install the Live Server extension and choose **Open with Live Server** on `index.html`.

## Features
- Overview dashboard with total, available, issued, and overdue counts
- Book inventory: add, edit, delete, search and filter
- Issue a book to a reader with an issue date and due date
- Return books and automatically update the book status
- Reports with category breakdown and availability rate
- Export inventory to CSV
- Responsive layout for desktop and mobile
- Automatically saves records in this browser using `localStorage`

## Important limitations
- This is a front-end student demo. Data is stored only in the browser on the current device/browser.
- It does not have login security, a shared database, or cloud sync.
- If you clear browser site data, the saved records may be removed.
- The dashboard starts with six sample books. You can edit or delete them, or replace them with your own records.

## Suggested CI/CD assignment path
1. Create a GitHub repository and upload these files.
2. Add a simple automated test and a GitHub Actions workflow.
3. Use GitHub Pages to publish the static website.
4. Record a 1–2 minute demo with your own voice, showing the app and pipeline.

CI/CD pipeline setup for Leafline Library Management System.
