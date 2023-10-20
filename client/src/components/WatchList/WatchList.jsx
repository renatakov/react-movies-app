import { useSelector } from "react-redux"
import WatchListItem from "./WatchListItem";
import Header from "../../assets/Header/Header";
const Watchlist = () => {
    const watchlist = useSelector(state => {
        return state.users.users.flatMap(user => user.watchlist);
    });
    const watchListItem = () => {
        if (watchlist) {
            const uniqueItems = new Set();
            const uniqueWatchlist = watchlist.filter(item => {
                if (!uniqueItems.has(item.id)) {
                    uniqueItems.add(item.id);
                    return true;
                }
                return false;
            });
    
            return uniqueWatchlist.map((item, index) => (
                <WatchListItem
                    key={index}
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    img={item.img}
                    duration={item.duration}
                />
            ));
        }
        return null;
    }
    console.log(watchlist);
    return (
        <>
            <Header 
    title="Watchlist"
    />
        {watchListItem()}
        </>
    )
}

export default Watchlist