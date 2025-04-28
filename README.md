# 🧩 Pokémon Explorer

An interactive, responsive React application that fetches data from the [PokeAPI](https://pokeapi.co/) and allows users to **search**, **filter**, and **browse** Pokémon with a clean and attractive UI.

---

## 🚀 Features

- **Fetch** the first 150 Pokémon from the PokeAPI.
- **Display** Pokémon with:
  - Name
  - Sprite Image
  - Type(s)
  - ID Number
- **Real-time Search** to filter Pokémon by name.
- **Dropdown Filter** to filter Pokémon by type (Fire, Water, Grass, etc.).
- **Loading** and **Error** states for API handling.
- **Responsive Design** that works on mobile and desktop.
- **Card Layout** with clean design.
- **Built with Functional Components and React Hooks.**


---

## 🛠️ Tech Stack

- **React.js** (Functional Components + Hooks)
- **CSS** for styling
- **Fetch API** for data fetching
- **PokeAPI** for Pokémon data

---

## 📂 Project Structure

pokemon-explorer/ ├── public/ │ └── index.html ├── src/ │ ├── components/ │ │ ├── Header.jsx │ │ ├── SearchBar.jsx │ │ ├── Filter.jsx │ │ └── PokemonCard.jsx │ ├── App.js │ ├── App.css │ └── index.js ├── package.json ├── README.md


---

## ⚙️ Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/anuj-pal27/pokie-mon.git
   cd pokemon-explorer

Install dependencies
npm install

Start the application
npm start

Open your browser and visit:
http://localhost:3000


🧹 Available Scripts

In the project directory, you can run:

npm start — Runs the app in development mode.

npm run build — Builds the app for production to the build/ folder.

🧠 Future Improvements
Add infinite scrolling or pagination.

Add Pokémon detail page (on card click).

Add a theme switcher (Light/Dark mode).

Improve UI with animations and transitions.

Add the ability to mark favorite Pokémon.

🙌 Acknowledgements
PokeAPI — Free Pokémon data API.

React — JavaScript library for building user interfaces.

