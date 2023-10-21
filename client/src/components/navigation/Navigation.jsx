import { Link, useLocation } from "react-router-dom";
import s from "./Navigation.module.css";
import React, { useEffect } from "react";



const Navigation = () => {
    const refNav = React.createRef()
    const location = useLocation()
    console.log(location.pathname)
    // useEffect(()=>{
    //     if(location.pathname !== "/"){
    //         refNav.current.style.position = "static"
    //     }
    // }, [])
    return (
        
        <nav ref={refNav} className={s.nav}>
            <hr className={s.hr} />
        <div className={s.items}>
            <div className={s.home_div}>
            <svg className={s.svg_h} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5245 21H13.7817H6.3487H4.6059C2.86855 21 1.46014 19.4607 1.46014 17.5618V8.84736C1.46683 8.09967 1.78828 7.39702 2.33154 6.94256L8.26578 1.6853C9.30997 0.771566 10.7943 0.771566 11.8385 1.6853L17.7989 6.93303C18.3401 7.38935 18.661 8.09083 18.6703 8.83784V17.5618C18.6703 19.4607 17.2619 21 15.5245 21Z" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <Link to="/" className={s.home_l}>Home</Link>
        </div>
        <div className={s.Search_div}>
            <svg className={s.svg_s} width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="9.78854" cy="10.7666" rx="8.14181" ry="8.98856" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.4513 17.4851L18.6433 21" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <Link to="/search" className={s.search_l}>Search</Link>
        </div>
        <div className={s.watch_div}>
            <svg className={s.svg_l} width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.69633 17.6316L2.32373 20.881C1.89477 21.1271 1.3663 20.9529 1.12982 20.4874V20.4874C1.0614 20.3432 1.02449 20.1834 1.02203 20.0206V5.62244C1.02203 2.87644 2.7217 1.77805 5.16756 1.77805H10.9133C13.2845 1.77805 15.0588 2.80322 15.0588 5.43937V20.0206C15.0588 20.2804 14.9653 20.5295 14.7989 20.7132C14.6326 20.8968 14.4069 21 14.1716 21C14.0216 20.9974 13.874 20.9567 13.7405 20.881L8.33474 17.6316C8.13554 17.5128 7.89553 17.5128 7.69633 17.6316Z" stroke="#67686D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            <Link to="/list" className={s.list_l}>Watch list</Link>
                </div>
            </div>
        </nav>
        
)}

export default Navigation;