import { useState, useEffect } from "react";
import HomePage from "./components/HomePage/HomePage";
import Intro from "./components/Intro/Intro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";
import Navigation from "./components/navigation/Navigation";
import s from "./App.module.css";

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
      <BrowserRouter>
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
        </Routes>

        {/* Показываем Navigation только если loading стал false */}
        {!loading && <Navigation />}
      </BrowserRouter>
    </>
  );
};

export default App;
