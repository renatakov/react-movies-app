import Header from '../../assets/Header/Header'
import save from "../../images/save-bg.svg"
import genresImg from '../../images/Ticket.svg'
import year from '../../images/Calendar.svg'
import time from '../../images/Clock.svg'
import s from "./Details.module.scss"
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { AddToWatchlist } from "../../redux/users"


const Details = (props) => {
  const api_key = 'f7853352d091e153fb30e4e16c6a4005';
  const [arr3, setArr3] = useState(null);
  const [arr2, setCast] = useState(null);
  const [reviewsData, setReviewsData] = useState(null);
  const [movieTitle, setMovieTitle] = useState(null)
  const [movieImg, setMovieImg] = useState(null)
  const [moviDate, setMovieDate] = useState(null)
  const [movieDuration, setMovieDuration] = useState(null)
  const [movieId, setMovieId] = useState(null)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showAbout, setShowAbout] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showCast, setShowCast] = useState(false); 
  const [reviewsAvailable, setReviewsAvailable] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const DetailsF = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${localStorage.getItem("detailsId")}?api_key=${api_key}&language=en-US`)
      .then((res) => {
        setArr3(res.data);
        setMovieTitle(res.data.title)
        setMovieDate(res.data.release_date)
        setMovieDuration(res.data.runtime)
        setMovieImg(res.data.poster_path)
        setMovieId(res.data.id)
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const ReviewF = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${localStorage.getItem("detailsId")}/reviews?api_key=${api_key}&language=en-US&page=1`)
      .then((res) => {
        setReviewsData(res.data);
        setReviewsAvailable(res.data.results.length > 0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // if (!reviewsAvailable && showReviews) {
  //   return <NoReviews />;
  // }
  console.log(movieTitle)
  // console.log(arr3)

  const CastF = () => {
    axios
    .get(`https://api.themoviedb.org/3/movie/${localStorage.getItem("detailsId")}/credits?api_key=${api_key}&language=en-US`)
    .then((res) => {
      setCast(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
  
  }

  const toggleAbout = () => {
    setShowAbout(true);
    setShowReviews(false);
    setShowCast(false)
    DetailsF();
  };

  const toggleReviews = () => {
    setShowReviews(true);
    setShowAbout(false);
    setShowCast(false)
    ReviewF();
  };

  const toggleCast = () => {
    setShowCast(true);
    setShowReviews(false);
    setShowAbout(false);
    CastF();
  }

  const Title = arr3 ? (
    <div className={s.details_container_title}>
      <img src={`https://image.tmdb.org/t/p/w500${arr3.poster_path}`} alt="" />
      <h1>{arr3.title}</h1>
    </div>
  ) : null;

  const Poster = arr3 ? (
    <div className={s.details_poster}>
      <img
        src={`https://image.tmdb.org/t/p/w500${arr3.poster_path}`}
        style={{ width: windowWidth + 'px', height: `calc(${windowWidth}px / 2)` }}
        alt=""
      />
    </div>
  ) : null;

  const Year = arr3 && arr3.release_date ? (
    <div className={s.details_container_info_year}>
      <img src={year} alt="" />
      <p>{arr3.release_date.split('-')[0]}</p>
    </div>
  ) : null;

  const Time = arr3 && arr3.runtime ? (
    <div className={s.details_container_info_time}>
      <img src={time} alt="" />
      <p>{arr3.runtime} Minutes</p>
    </div>
  ) : null;

  const Genres = arr3 && arr3.genres ? (
  <div className={s.details_container_info_genre}>
    <img src={genresImg} alt="" />
    {arr3.genres.slice(0, 1).map((item) => (
      <p key={item.id}>{item.name}</p>
    ))}
  </div>
) : null;


  const About = arr3 && arr3.overview && showAbout ? (
    <div className={s.details_results_about}>
      <p>{arr3.overview}</p>
    </div>
  ) : null;

  const Review = reviewsData && showReviews ? (
    <div className={s.details_review}>
      {reviewsData.results.map((item) => (
        <div key={item.id}>
          {item.author_details && item.author_details.avatar_path && (
            <img src={`https://www.themoviedb.org/t/p/w64_and_h64_face${item.author_details.avatar_path}`} alt="" />
          )}
          {item.author_details && item.author_details.username && (
            <p>{item.author_details.username}</p>
          )}
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  ) : null;

  // console.log(Review)
  
  const Cast = arr2 && arr2.cast && showCast ? (
    <div className={s.details_cast}>
    {arr2.cast.slice(0, 6).map((item) => (
      <div key={item.id} className={s.details_cast2}>
        {item.profile_path ? (
          <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} className={s.details_cast_img} alt="" />
        ) : null}
        <p className={s.details_cast_name}>{item.name}</p>
      </div>
    ))}
    </div>
  ) : null;


  return (
    <>
    <Header 
    title="Details"
    img={save}
    movieId={movieId}
    movieTitle={movieTitle}
    movieDate={moviDate}
    movieImg={movieImg}
    movieDuration={movieDuration}
    />
    <section className={s.details}>
      {Poster}
      <div className={s.details_container}>
        {Title}
       <div className={s.details_container_wrap}>
          <div className={s.details_container_info}>
            {Year} | {Time} | {Genres}
          </div>
       </div>
      </div>
      <div className={s.wrap}>
        <div className={s.details_navBar}>
          <button className={s.details_navBar_btn} onClick={toggleAbout}>
            About Movie
          </button>
          <button className={s.details_navBar_btn} onClick={toggleReviews}>
            Review
          </button>
          <button className={s.details_navBar_btn} onClick={toggleCast}>
              Cast
          </button>
        </div>
      </div>
      <div className={s.details_results} style={{width: "100%",display: "flex" , justifyContent: "center"}}>
        {About}
      </div>
      <div className={s.details_results} style={{width: "100%",display: "flex" , justifyContent: "center"}}>
        {Review}
      </div>
      <div className={s.details_results} style={{width: "100%",display: "flex" , justifyContent: "center"}}>
        {Cast}
      </div>
    </section>
    </>
  );
}

export default Details;

