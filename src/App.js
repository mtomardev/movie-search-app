import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Home from './pages/home';
import MovieList from './component/movieList';
import MovieDetails from './pages/movieDetails';

function App() {
  return (
    <div >

      <BrowserRouter>
        <Header/>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path='movie/:id' element={<MovieDetails/>}></Route>
            <Route path='movies/:type' element={<MovieList/>}></Route>
            <Route path='/*' element={<h1>Error page</h1>}></Route>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
