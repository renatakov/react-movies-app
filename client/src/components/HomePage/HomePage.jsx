import axios from "axios";
import s from "./HomePage.module.css";
import { useEffect, useState } from 'react';
import Slider from "../Slider/Slider"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const api_key = 'f7853352d091e153fb30e4e16c6a4005';
  const [arr, setArr] = useState([]);
  // const [detailsId, setDetailsId] = useState(null)
  const navigate = useNavigate();
  

  const nowPlayingFunc = () => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&region=UA`, {
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

  useEffect(()=>{
    setTimeout(nowPlayingFunc(),1000)
  }, [])


  const upcomingFunc = () => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`
      }
    })
    .then(res => {
      setArr(res.data.results);
      // console.log(res)
      // console.log(upcomingArr);
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
      setArr(res.data.results);

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
      setArr(res.data.results);
    })
  }

  const detailsIdFunc = (id) =>{
    localStorage.setItem("detailsId", id)
    navigate("/details");
  }



  const nowPlayingMovies = arr.map(item => (
    <div

      className={s.card}
      key={item.id}
    >
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>
      <button className={s.cardLink} onClick={()=>{detailsIdFunc(item.id)}}>

      {item.title.length >= 18 ? item.title.slice(0, 18) + "..." : item.title}
      </button>

      
    </div>
  ));

  const upcomingMovies = arr.map(item => (
    <div className={s.card}
    key={item.id}>
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>
      <button className={s.cardLink} onClick={()=>{detailsIdFunc(item.id)}}>

      {item.title.length >= 18 ? item.title.slice(0, 18) + "..." : item.title}
      </button>

    </div>
  ))

  const topRatedMovies = arr.map(item => (
    <div className={s.card}
    key={item.id}>
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>
      <button className={s.cardLink} onClick={()=>{detailsIdFunc(item.id)}}>

      {item.title.length >= 18 ? item.title.slice(0, 18) + "..." : item.title}
      </button>
    </div>
  ))

  const popularMovies = arr.map(item => (
    <div className={s.card}
    key={item.id}>
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>
      <button className={s.cardLink} onClick={()=>{detailsIdFunc(item.id)}}>

      {item.title.length >= 18 ? item.title.slice(0, 18) + "..." : item.title}
      </button>
    </div>
  ))

  

  return (
    <section className={s.homepageSection}>
      <div className={s.sign}>
      <Link to='/signin' className={s.signin}>Sign In</Link>
      <Link to='/signup' className={s.signup}>Sign Up</Link>
      </div>

      <h1 className={s.homepageSection__firstHeader}>What do you want to watch?</h1>
      <Slider/>
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