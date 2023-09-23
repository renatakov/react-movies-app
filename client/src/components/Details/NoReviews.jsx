import ReviewImg from '../Assets/Img/ReviewImg.svg'
import s from './NoReviews.module.scss'

const NoReviews = () => {
    return (
      <div className={s.noReviews}>
        <img src={ReviewImg} className={s.noReviews_img}/>
        <p className={s.noReviews_text}>No comments yet..</p>
    </div>
    )
}

export default NoReviews