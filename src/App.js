import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const githubCode = 'https://github.com/lindsaysofia/';

  const githubDemo = 'https://lindsaysofia.github.io/';

  const projects = [{project: 'etch-a-sketch', name: 'Etch-A-Sketch', description: ''}, {project: 'tic-tac-toe', name: 'Tic-Tac-Toe', description: ''}, {project: 'library', name: "Library", description: ''}, {project: 'todo-list', name: 'Todo List', description: ''}, {project: 'restaurant-page', name: 'Restaurant Page', description: ''}, {project: 'calculator', name: 'Calculator', description: ''}, {project: 'cv-project', name: 'CV Project', description: ''}, {project: 'memory-game', name: 'Memory Game', description: ''}, {project: 'photo-tagging', name: 'Photo Tagging', description: ''}, {project: 'shopping-cart', name: 'Shopping Cart', description: ''}, {project: 'battleship', name: 'Battleship', description: ''}];
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
