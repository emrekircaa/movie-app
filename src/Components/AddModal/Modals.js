import React, { useState } from "react";
import "./Modal.css";
import FormInput from "../FormInput/FormInput";
import { useDispatch } from "react-redux";
import { addMovie } from "../../feature/movieSlice";

function Modal({ setOpenModal }) {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    original_title: "",
    original_language: "",
    vote_average: "",
    genre_ids: "",
    cast: "",
    director: "",
    overview: "",
    poster_path: "",
  });

  const inputs = [
    {
      id: 8,
      name: "original_title",
      type: "text",
      placeholder: "Title",
      errorMessage: "Required",
      label: "Title",
      required: true,
    },
    {
      id: 1,
      name: "original_language",
      type: "text",
      placeholder: "Language",
      errorMessage: "Required",
      label: "Language",
      required: true,
    },
    {
      id: 2,
      name: "vote_average",
      type: "text",
      placeholder: "Vote Avarage",
      errorMessage: "Required",
      label: "Vote Avarage",
      required: true,
    },
    {
      id: 3,
      name: "genre_ids",
      type: "text",
      placeholder: "Genres",
      errorMessage: "Required",
      label: "Genres",
      required: true,
    },
    {
      id: 4,
      name: "cast",
      type: "text",
      placeholder: "Cast",
      errorMessage: "Required",
      label: "Cast",
      required: true,
    },
    {
      id: 5,
      name: "director",
      type: "text",
      placeholder: "Director",
      errorMessage: "Required",
      label: "Director",
      required: true,
    },
    {
      id: 6,
      name: "overview",
      type: "text",
      placeholder: "Overview",
      errorMessage: "Required",
      label: "Overview",
      required: true,
    },
    {
      id: 7,
      name: "poster_path",
      type: "text",
      placeholder: "Image URL",
      errorMessage: "Required",
      label: "Image URL",
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovie(values));
    setOpenModal(false);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div>
          <div className="app">
            <form onSubmit={handleSubmit}>
              <div className="grids">
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
              </div>
              <button className="modalButton">Add Movie</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
