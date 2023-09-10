import { useState, useEffect } from "react";
import HomePage from "./components/HomePage/HomePage";
import Intro from "./components/Intro/Intro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Задержка перед скрытием интро
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      // Очистите таймер, чтобы избежать утечки памяти
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Показываем интро только на домашней странице */}
          <Route
            path="/"
            element={loading ? <Intro /> : <HomePage />}
          />
          {/* Другие маршруты */}
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
