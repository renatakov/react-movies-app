import axios from "axios";
import s from "./HomePage.module.css";
import { useState } from 'react';

const HomePage = () => {
  const api_key = 'f7853352d091e153fb30e4e16c6a4005';
  const [arr, setArr] = useState([]);

  const nowPlayingFunc = () => {
    axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    })
    .then(res => {
      setArr(res.data.results);
      console.log(arr);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const nowPlayingMovies = arr.map(item => (
    <div
      className={s.card}
      key={item.id}
    >
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>
    </div>
  ));

  return (
    <section className={s.homepageSection}>
      <div className={s.homepageSection__filterMovies}>
        <div className={s.filterMovies_headers}>
          <button onClick={nowPlayingFunc} className={s.filterMovies_header_nowPlayingBtn}>Now Playing</button>
          <button className={s.filterMovies_header_upcomingBtn}>Upcoming</button>
          <button className={s.filterMovies_header_topRatedBtn}>Top Rated</button>
          <button className={s.filterMovies_header_popularBtn}>Popular</button>
        </div>
        <div className={s.filterMovies_nowPlaying}>
          {nowPlayingMovies}
        </div>
      </div>
    </section>
  )
}

export default HomePage;
