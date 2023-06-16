import { createSlice } from "@reduxjs/toolkit";
import data from "../data1.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  movieList: JSON.parse(localStorage.getItem("movieListStroga")) || data.result,
};

export const movieSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    deleteList: (state, action) => {
      const nextCartItems = state.movieList.filter(
        (item) => item.id !== action.payload
      );
      state.movieList = nextCartItems;
      toast.info("Deleted Movie", {
        position: "top-right",
        autoClose: 2000,
      });
      localStorage.setItem("movieListStroga", JSON.stringify(state.movieList));
    },
    addMovie: (state, action) => {
      let uniqID = new Date().valueOf();
      let tempProductItem = { ...action.payload, id: uniqID };
      state.movieList.push(tempProductItem);
      toast.info("Added Movie", {
        position: "top-right",
      });
      localStorage.setItem("movieListStroga", JSON.stringify(state.movieList));
    },
    refresh: (state) => {
      state.movieList = data.result;
      toast.info("Refreshing", {
        position: "top-right",
      });
      localStorage.setItem("movieListStroga", JSON.stringify(state.movieList));
    },
  },
});

export const { deleteList, addMovie, refresh } = movieSlice.actions;

export default movieSlice.reducer;
