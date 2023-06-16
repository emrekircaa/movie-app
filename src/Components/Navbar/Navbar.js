import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refresh } from "../../feature/movieSlice";
import "./Navbar.css";
function Navbar({ refreshs = false }) {
  function handleClick() {
    navigate("/");
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className="navbarHeader"
      onClick={() => {
        handleClick();
      }}
      style={{ cursor: "pointer" }}
    >
      <h1>Movie App</h1>

      {refreshs && (
        <div className="navbarAddSection">
          <button
            className="navbarAddButton"
            onClick={() => {
              dispatch(refresh());
            }}
          >
            refresh
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
