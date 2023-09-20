import { useState } from 'react'
import s from './Slider.module.css'
import axios from 'axios'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 7,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 800, min: 768 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1.7,
    }
  };

const Slider = () => {

    const api_key = 'f7853352d091e153fb30e4e16c6a4005'
    const [arr, setArr] = useState([])
    const resultsPerPage = 10;

    // const topRatedF = () => {
      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${api_key}`
        }
      })
      .then((res) => {
        const movies = res.data.results.slice(0, resultsPerPage);
        setArr(movies);
      })
      .catch((error) => {
        console.error(error);
      });
    // }

    const topRated = arr.map((item, index) => (
      <div className={s.slider_container_card} key={item.id}>
        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt=""/>
        <p >{index + 1}</p>
      </div>
    ))

    return (
        <section className={s.slider}>
                <div className={s.slider_container}>
                  <Carousel showDots={false} responsive={responsive}>
                      {topRated}
                  </Carousel>
                </div>
        </section>
    )
}

export default Slider