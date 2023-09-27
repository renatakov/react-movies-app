import s from "./SearchItem.module.css"
import { useNavigate } from "react-router-dom";
import star from '../../images/star.svg'
import year from '../../images/Calendar.svg'

const SearchItem = (props) => {
  const navigate = useNavigate();

    const detailsIdFunc = (id) =>{
        localStorage.setItem("detailsId", id)
        navigate("/details");
      }
return(
    <div className={s.searchItem}>
        <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt="" />
        <div className={s.searchItem__info}>
        <button className={s.searchItem_link} onClick={()=>{detailsIdFunc(props.id)}}>

      {props.title.length >= 16 ? props.title.slice(0, 16) + "..." : props.title}
      </button>

        <span className={s.release_span}>
        <img src={year} alt="" />
            {props.release_date.slice(0 , 4)}</span>
        <span className={s.rating_span}><img src={star} alt="" />{Math.round(props.vote_average)}</span>
        </div>
    </div>
)
}

export default SearchItem