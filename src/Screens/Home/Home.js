import React, { useEffect, useState } from "react";
import "./Home.css";
import data1 from "../../data1.json";
import { useNavigate } from "react-router-dom";
import Modals from "../../Components/AddModal/Modals";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const removedItem = useSelector((state) => state.movie.movieList);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  console.log(removedItem);
  useEffect(() => {
    setData(data1.result);
    setLoading(false);
  }, []);
  function handleClick(id) {
    navigate(`movie/${id}`);
  }
  return (
    <>
      <Navbar refreshs={true} />
      <div className="App">
        <div className="AddSection">
          <button
            onClick={() => {
              setModalOpen(true);
            }}
            className="AddButton"
          >
            Add Movie
          </button>
          <div></div>
        </div>
        {modalOpen && <Modals setOpenModal={setModalOpen} />}
        <div className="container">
          {!loading &&
            removedItem.map((e, index) => (
              <div
                className="movieContainer"
                key={index.toString()}
                onClick={() => {
                  setOpen(open);
                  handleClick(e.id);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="movie">
                  <img
                    src={e.poster_path}
                    className="poster"
                    width={250}
                    height={375}
                  ></img>
                  <div className="movie-details">
                    <div className="box">
                      <h4 className="title">{e.original_title}</h4>
                      <p className="rating">{e.vote_average}</p>
                    </div>
                    <div className="overview">
                      <h1>{e.original_title}</h1>
                      {e.overview}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
