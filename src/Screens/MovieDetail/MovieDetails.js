import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { deleteList } from "../../feature/movieSlice";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

function MovieDetail(props) {
  const data = useSelector((state) => state.movie.movieList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const [film, setFilm] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filteredData = data.filter((e) => e.id == id);
    setFilm(filteredData[0]);
    setLoading(false);
  }, []);
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <Navbar />
      {!loading && !open ? (
        <div className="Detailcontainer">
          <div className="imageSection">
            <img
              src={film.poster_path}
              className="poster"
              width={350}
              height={500}
            ></img>
          </div>
          <div className="decsSection">
            <div className="detailHeader">
              <div
                className="voteAvarage"
                style={film.vote_average > 5 ? { color: "green" } : {}}
              >
                {film.vote_average}
              </div>
              <div className="voteAvarage">
                Language / {film.original_language}
              </div>
            </div>
            <div className="desctitle">
              <div className="detailTitle">THE GENRES</div>

              <div> {film.genre_ids} </div>
            </div>

            <div className="desctitle">
              <div className="detailTitle">CAST</div>

              <div> {film.cast} </div>
            </div>
            <div className="desctitle">
              <div className="detailTitle">DIRECTOR</div>

              <div>{film.director}</div>
            </div>
            <div className="desctitle">
              <h4>{film.original_title}</h4>
              <div>{film.overview}</div>
            </div>
            <div className="buttonSection">
              <button
                className="movieDeleteButton"
                onClick={() => {
                  Swal.fire({
                    showCancelButton: true,
                    showCloseButton: true,
                    closeOnClickOutside: false,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    cancelButtonColor: "blue",
                    confirmButtonColor: "red",
                    text: "Would you like to delete to movie?",
                    confirmButtonText: "Delete",
                    cancelButtonText: "Cancel",
                  }).then(function (result) {
                    if (result.isConfirmed) {
                      dispatch(deleteList(film.id));
                      setOpen(!open);
                      setTimeout(() => {
                        navigate("/");
                      }, 1200);
                    } else if (
                      result.isDismissed &&
                      result?.dismiss === "cancel"
                    ) {
                    }
                  });
                }}
              >
                Delete Movie
              </button>
              <button
                onClick={() => {
                  handleClick();
                }}
                style={{ cursor: "pointer" }}
                className="AddButton"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="Detailcontainer">Route HomePage...</div>
      )}
    </div>
  );
}

export default MovieDetail;
