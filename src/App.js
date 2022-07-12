import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BrowseHotels from "./pages/BrowseHotels";
import FavoriteHotels from "./pages/FavoriteHotels";
import Modal from "./components/UI/Modal";
import React from "react";

function App() {
  return (
    <>
      <Modal />
      <Header />
      <Route path="/" exact>
        <BrowseHotels />
      </Route>
      <Route path="/browse-hotels" exact>
        <BrowseHotels />
      </Route>
      <Route path="/favorite-hotels">
        <FavoriteHotels />
      </Route>
    </>
  );
}

export default App;
