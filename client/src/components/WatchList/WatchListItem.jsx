import s from "./WatchListItem.module.css"
import { useNavigate } from "react-router-dom";
import star from '../../images/star.svg'
import year from '../../images/Calendar.svg'
import time from "../../images/Clock.svg"

const WatchListItem = (props) => {
    console.log(props)
  const navigate = useNavigate();

    const detailsIdFunc = (id) =>{
        localStorage.setItem("detailsId", id)
        navigate("/details");
      }
return(
    <div className={s.watchlistItem}>
        <img src={`https://image.tmdb.org/t/p/w500${props.img}`} alt="" />
        <div className={s.watchlistItem__info}>
        <button className={s.watchlistItem_link} onClick={()=>{detailsIdFunc(props.id)}}>

      {props.title.length >= 16 ? props.title.slice(0, 16) + "..." : props.title}
      </button>

        <span className={s.release_span}>
        <img src={year} alt="" />
            {props.date.slice(0 , 4)}</span>
        <span className={s.duration_span}>
        <img src={time} alt="" />
            {props.duration} minutes
        </span>
        </div>
    </div>
)
}

export default WatchListItem