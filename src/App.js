import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import data1 from "./data1.json";
import Home from "./Screens/Home/Home";
import MovieDetails from "./Screens/MovieDetail/MovieDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
