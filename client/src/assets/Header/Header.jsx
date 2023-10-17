import { Link } from 'react-router-dom'
import s from './Header.module.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AddToWatchlist } from '../../redux/users'

const Header = (props) => {
    const dispatch = useDispatch()

    console.log(props)
    const arrow = "<"
    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <Link to="/" className={s.header_container_text}>{arrow}</Link>
                <h1 className={s.header_container_title}>{props.title}</h1>
                <button onClick={()=>dispatch(AddToWatchlist(+localStorage.getItem('usersid'), props.movieId, props.movieTitle, 
                props.movieDate, props.movieImg, props.movieDuration))} className={s.header_container_btn}><img src={props.img} alt="" /></button>
            </div>
        </header>
    )
}

export default Header