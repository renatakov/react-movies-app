import axios from "axios"
import s from "./HomePage.module.css"
import { useState } from 'react';

const HomePage = () => {
    const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzg1MzM1MmQwOTFlMTUzZmIzMGU0ZTE2YzZhNDAwNSIsInN1YiI6IjYwM2QwYTQ0M2UwOWYzMDA1ZmYxYTQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cjft1BAXMoBhvZ54bC03_LLg_UaTEg0-5eoQMwFGQc8';

    const [arr, setArr] = useState([]);
    const [moviesIdArr, setMoviesIdArr] = useState([])

    const nowPlayingFunc = () => {
      axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${bearerToken}`
        }
      })
      .then(res => {
        setArr(res.data.results);
        const movieIds = res.data.results.map(item=>item.id)
        setMoviesIdArr(movieIds)
      })
      
      .catch(error => {
        console.error(error);
      });
    }
    console.log(moviesIdArr)

    const movieItems = arr.map(item => (
      <div className={s.card} key={item.id}>
        <p>{item.title}</p>
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
              {movieItems}
            </div>
          </div>
        </section>
    )
}

export default HomePage;
