import s from './Header.module.scss'


const Header = (props) => {
    const arrow = "<"
    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <p className={s.header_container_text}>{arrow}</p>
                <h1 className={s.header_container_title}>{props.title}</h1>
                <button className={s.header_container_btn}><img src={props.img} alt="" /></button>
            </div>
        </header>
    )
}

export default Header