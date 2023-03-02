import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieList from './components/MovieList';
import Movie from './pages/Movie';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='movie/:id' element={<Movie />}/>
          <Route path='movies/:type' element={<MovieList />}/>
          <Route path='/*' element={<h1>ERROR  PAGE  NOT  FOUND</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
