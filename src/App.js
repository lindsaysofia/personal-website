import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Projects from './components/Projects';

function App() {
  const githubCode = 'https://github.com/lindsaysofia/';

  const githubDemo = 'https://lindsaysofia.github.io/';

  const projects = ['etch-a-sketch', 'tic-tac-toe', 'library', 'todo-list', 'restaurant-page', 'calculator', 'cv-project', 'memory-game', 'photo-tagging', 'shopping-cart', 'battleship'];
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Projects githubCode={githubCode} githubDemo={githubDemo} projects={projects}/>
    </div>
  );
}

export default App;
