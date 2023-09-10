import s from "./SearchItem.module.css"

const SearchItem = (props) => {
return(
    <div className={s.searchItem}>
        <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt="" />
        <div className={s.searchItem__info}>
        <h3>{props.title.length >= 20 ? props.title.slice(0, 20) + "..." : props.title}</h3>
        <span>{props.release_date}</span>
        <span>{props.vote_average}</span>
        </div>
    </div>
)
}

export default SearchItem