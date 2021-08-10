import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { finishLoading, startLoading } from "../actions/ui";
import logo from "../logo.svg";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const handleLoad = () => {
    loading ? dispatch(finishLoading()) : dispatch(startLoading());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        )}
        <a onClick={handleLoad} className="App-link" rel="noopener noreferrer">
          Click to load
        </a>
      </header>
    </div>
  );
};
