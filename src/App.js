import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Simulate } from 'react-dom/test-utils';

function App() {
  const githubCode = 'https://github.com/lindsaysofia/';

  const githubDemo = 'https://lindsaysofia.github.io/';

  const projects = [{project: 'etch-a-sketch', name: 'Etch-A-Sketch', description: 'Êtes-vous un artiste? Using HTML, CSS, and JavaScript, I created an Etch-A-Sketch where users can paint in varying grid sizes.'}, {project: 'tic-tac-toe', name: 'Tic-Tac-Toe', description: 'To practice the module pattern in JavaScript (not modules themselves), I created a Tic-Tac-Toe game.'}, {project: 'library', name: "Library", description: 'This project works with the localStorage window object in JavaScript to catalog the user\'s library. Users can add and delete books, as well as toggle the "read" status of each book.'}, {project: 'todo-list', name: 'Todo List', description: 'Perfect for New Year\'s resolutions (I\'m kidding), users can create todo projects, and add todos within each project. This project was created to practice using webpack and modules.'}, {project: 'restaurant-page', name: 'Restaurant Page', description: 'A mock restaurant page created using webpack and modules to separate the different pages within the restaurant\'s website.'}, {project: 'calculator', name: 'Calculator', description: 'Using HTML, CSS, and JavaScript, I created a calculator with the capacity to add, subtract, multiply, and divide.'}, {project: 'cv-project', name: 'CV Project', description: 'Using React state and props, I created a CV generator. Users can input their information and a CV will generate that can be downloaded via PDF.'}, {project: 'memory-game', name: 'Memory Game', description: 'This project was created with the assistance of React hooks and lifecycle methods. Users can test their memory by selecting all images in a level, but must avoid selecting the same image twice in a level. Extra points to anyone who can get past level 12, which my boyfriend got to.'}, {project: 'photo-tagging', name: 'Photo Tagging', description: 'One of my favorite projects! I worked with Firebase and React to create six different games. For each game, users need to find certain characters. Once all characters in an image are found, the user can choose to submit their time to a leaderboard.'}, {project: 'shopping-cart', name: 'Shopping Cart', description: 'A mock retail site created using React router and hooks.'}, {project: 'battleship', name: 'Battleship', description: 'Player, place your ships! In this project, a user can play against the computer in an attempt to sink all the computer\'s ships before the computer sinks theirs. Tested using Jest.'}];

  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Projects githubCode={githubCode} githubDemo={githubDemo} projects={projects}/>
      <Contact />
    </div>
  );
}

export default App;
