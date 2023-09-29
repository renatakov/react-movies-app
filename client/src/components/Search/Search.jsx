import s from "./Search.module.css"
import Header from '../../assets/Header/Header'
import info from "../../images/info-circle.svg"
import searchImg from "../../images/Search.svg"
import notFoundImg from "../../images/no-results 1.png"
import { useState } from "react"
import {useForm} from "react-hook-form"
import axios  from "axios"
import React from "react"
import SearchItem from "./SearchItem"
const Search = () => {
    const [inputSearchData, setInputSearchData] = useState({})
    const [searchList, setSearchList] = useState([])
    const [searchStatus, setSearchStatus] = useState("init")
    const { register, handleSubmit } = useForm();
    const inputSearchRef = React.createRef(null)
    const api_key = 'f7853352d091e153fb30e4e16c6a4005';
    const onSubmit = (data) => {
        setInputSearchData(data);
        console.log(inputSearchData)
    }
    async function searchMovie(){
            await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${inputSearchData.search}&include_adult=false&language=en-US&page=1`, {
                headers: {
                accept: 'application/json',
                Authorization: `Bearer ${api_key}`
            }
        })
        .then((res)=>{
            if(inputSearchData.search !== undefined){
                setSearchList(res.data.results)
            }
                if(res.data.results.length === 0) {
                    setSearchStatus("not found")
                }
                console.log(searchList)
            })
            .catch((error)=>{
                console.log(error)
            })
    
}

    const SearchListCollection = searchList.map((item)=>{
        return(
            <SearchItem
            id={item.id}
            poster_path={item.poster_path}
            title={item.title}
            vote_average={item.vote_average}
            release_date={item.release_date}
            />
        )
    })
    return(
        <>
    <Header title="Search" img={info}/>

        <form onSubmit={handleSubmit(onSubmit)} className={s.searchSection}>
        <input
        ref={inputSearchRef}
        {...register("search")}
        type="text" 
        placeholder="Search"/>
        <button onClick={searchMovie} type="submit">
            <img src={searchImg} alt="" />
        </button>
        </form>
        {searchStatus === "not found" ?
        <div className={s.notFoundSearch}>
            <img src={notFoundImg} alt="" />
            <p>we are sorry, we can <br/> not find the movie :(</p>
        </div> : 
        SearchListCollection
        }
        </>
    )
}

export default Search