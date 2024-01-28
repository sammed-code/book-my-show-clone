import './App.css';
import axios from "axios";

// React Slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Routes
import { Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/Home.Page';
import MoviePage from './pages/Movie.Page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
    </Routes>
  );
}

export default App;