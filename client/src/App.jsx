import { useState, useEffect } from "react";
import HomePage from "./components/HomePage/HomePage";
import Intro from "./components/Intro/Intro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";
import Navigation from "./components/navigation/Navigation";
import s from "./App.module.css";
import SignIn from "./components/Auth/SingIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import Watchlist from "./components/WatchList/WatchList";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <BrowserRouter basename="/react-movies-app">
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <div className={s.introContainer}>
                  <Intro />
                </div>
              ) : (
                <HomePage />
              )
            }
          />

          <Route path="/search" element={<Search />} />
          <Route path="/details" element={<Details />} />
          <Route path = "/signin" element = {<SignIn/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path="/list" element={<Watchlist/>}/>
        </Routes>
        {!loading && <Navigation />}
      </BrowserRouter>
    </>
  );
};

export default App;
