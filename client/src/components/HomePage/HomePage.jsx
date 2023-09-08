import axios from "axios";
import s from "./HomePage.module.css";
import { useState } from 'react';

const HomePage = () => {
  const api_key = 'f7853352d091e153fb30e4e16c6a4005';
  const [arr, setArr] = useState([]);
  const [upcomingArr, setUpcomingArr] = useState([])
  const [topRatedArr, setTopRatedArr] = useState([])
  const [popularArr, setPopularArr] = useState([])

  const nowPlayingFunc = () => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&region=US`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    })
    .then(res => {
      setArr(res.data.results);
      // console.log(arr);
    })
    .catch(error => {
      console.error(error);
    });
  }

  const upcomingFunc = () => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    })
    .then(res => {
      setUpcomingArr(res.data.results);
      // console.log(res)
      console.log(upcomingArr);
    })
  }
  const topRatedFunc = () => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    })
    .then(res => {
      setTopRatedArr(res.data.results);

    })
  }

  const popularFunc = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    })
    .then(res => {
      setPopularArr(res.data.results);

    })
  }

  const nowPlayingMovies = arr.map(item => (
    <div
      className={s.card}
      key={item.id}
    >
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>
    {/* <p>{item.title}</p> */}
      
    </div>
  ));

  const upcomingMovies = upcomingArr.map(item => (
    <div className={s.card}
    key={item.id}>
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>
    {/* <p>{item.title}</p> */}
    </div>
  ))

  const topRatedMovies = topRatedArr.map(item => (
    <div className={s.card}
    key={item.id}>
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>
      {/* <p>{item.title}</p> */}

    </div>
  ))

  const popularMovies = popularArr.map(item => (
    <div className={s.card}
    key={item.id}>
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>
      {/* <p>{item.title}</p> */}

    </div>
  ))

  return (
    <section className={s.homepageSection}>
      <div className={s.homepageSection__filterMovies}>
        <div className={s.filterMovies_headers}>
          <button onClick={nowPlayingFunc} className={s.filterMovies_header_nowPlayingBtn}>Now Playing</button>
          <button onClick={upcomingFunc} className={s.filterMovies_header_upcomingBtn}>Upcoming</button>
          <button onClick={topRatedFunc} className={s.filterMovies_header_topRatedBtn}>Top Rated</button>
          <button onClick={popularFunc} className={s.filterMovies_header_popularBtn}>Popular</button>
        </div>
        <div className={s.filterMovies_nowPlaying}>
          {nowPlayingMovies}
        </div>
        <div className={s.filterMovies_upcoming}>
          {upcomingMovies}
        </div>
        <div className={s.filterMovies_topRated}>
          {topRatedMovies}
        </div>
        <div className={s.filterMovies_popular}>
          {popularMovies}
        </div>
      </div>
    </section>
  )
}

export default HomePage;