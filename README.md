# Real-Time Markdown Editor

A real-time markdown editor built with Angular that allows users to write Markdown text and instantly see the rendered HTML preview.

## Features

- Live preview of Markdown text as HTML
- Real-time conversion of Markdown to HTML
- Responsive side-by-side layout for editor and preview panes
- Syntax highlighting for code blocks (optional)

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager)
- Angular CLI

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jayinmt/real-time-markdown-editor.git
```

2. Navigate to the project directory:

```bash
cd real-time-markdown-editor
```

3. Install the dependencies:

```bash
npm install
```

### Usage

1. Start the development server:

```bash
ng serve
```

2. Open your browser and navigate to `http://localhost:4200`.

3. Start typing Markdown text in the editor pane on the left. The rendered HTML preview will update in real-time on the right pane.

## Project Structure

- `src/app/app.component.ts`: The main component that manages the editor.
- `src/app/app.component.html`: The template for the editor component.
- `src/app/app.component.css`: The styles for the editor component.
- `src/app/markdown.service.ts`: The service responsible for converting Markdown to HTML.

## Dependencies

- Angular
- marked.js: A lightweight Markdown-to-HTML converter library.

## Optional Enhancements

- Integrate syntax highlighting for code blocks using a library like Prism.js.
- Add auto-expanding textarea functionality.
- Implement custom Markdown shortcuts.
- Add file saving and loading capabilities.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
