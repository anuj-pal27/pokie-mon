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




## Project Overview
The Pokémon Explorer app lets users explore and compare Pokémon easily. It fetches Pokémon data from the Pokémon API and allows users to search for Pokémon, view their details, add them to favorites, and even compare two Pokémon. There's also a fun "Random Pokémon" button to surprise users with a random Pokémon!

## My Approach

1. **Fetching Data**:
   - I used the **Pokémon API** to get details like stats, abilities, and evolution chains for each Pokémon.
   - I made sure to fetch data only when needed (like when the user searches or views a Pokémon's details) so the app stays fast.

2. **User Features**:
   - **Search**: Users can type the name of a Pokémon, and it fetches its details. I also added some cool **auto-suggestions** to help users find Pokémon faster.
   - **Comparison**: Users can choose two Pokémon and compare their stats side-by-side.
   - **Favorites**: Users can add Pokémon to their favorites, which get saved in **localStorage** so they stay there even if you refresh the page.
   - **Random Pokémon**: There's a button that shows a random Pokémon each time you click it.

3. **Routing and Navigation**:
   - I used **React Router** to navigate between pages like the home page, Pokémon detail page, favorites page, and compare page. It keeps everything nice and organized.

4. **State Management**:
   - I used **React's useState** and **useEffect** hooks to manage state, like holding the Pokémon data or the list of favorites.
   - For favorites, I used **localStorage** so that they’re saved even after a refresh.

## Challenges I Faced

1. **Making API Calls Efficiently**:
   - The Pokémon API has a lot of data, so I had to make sure not to overwhelm the app with too many API calls. Sometimes fetching data for both Pokémon when comparing could take time.
   - **What I did**: I used **debouncing** for search input to avoid making too many calls while typing.

2. **Managing State**:
   - Handling multiple states for Pokémon, favorites, and comparisons was tricky, especially when switching between pages and keeping everything up-to-date.
   - **What I did**: I used React state management and passed data through components effectively.

3. **Designing the UI**:
   - Displaying the Pokémon data (like stats, moves, and evolution chain) in a way that looks good and is easy to understand was a bit tricky.
   - **What I did**: I organized the information into sections and made the layout responsive for both desktop and mobile users.

4. **Auto-Suggestions and Search**:
   - Showing Pokémon name suggestions while typing in the search bar needed to be smooth, and I had to handle cases when there’s no match for the name.
   - **What I did**: I used the API to get Pokémon names and filtered them based on what the user typed, displaying the suggestions in real-time.

5. **User Inputs and Errors**:
   - I wanted to make sure the app doesn’t break if a user types something invalid or there’s an error fetching data.
   - **What I did**: I added error handling to display helpful messages, and loading states so the user knows when something is loading.

## Future Improvements

- **Error Boundaries**: I want to add **error boundaries** so the app doesn’t crash if something goes wrong, and it shows the user a friendly message.
- **Improved Comparison**: I plan to compare more attributes, like typing or moves, to make the comparison more detailed.
- **Better UI**: There’s always room for a better design, so I want to keep improving the app’s visuals, maybe adding some animations.
