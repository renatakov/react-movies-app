import { createAction, createReducer, nanoid } from "@reduxjs/toolkit"


const initialState = {
    users: [
        {
            id: 1,
            login: 'admin',
            password: 'admin',
            watchlist:[],
            auth_key: '123greg'
        },
    ]
}


export const AddUser = createAction('users/addProduct', (newUser) => ({
    payload: {...newUser}
}))

export const AddToWatchlist = createAction('users/addToBasket', (userId, movieId, title, date, img, duration)=>({
    payload:{
        userId,
        movieId,
        title,
        date,
        img,
        duration
    }
}))



const reducer = createReducer(initialState, (builder) => {
    builder.addCase(AddUser, (state, action) => {
        const newUser = {
            id: nanoid(9),
            name: action.payload.name,
            login: action.payload.login,
            password: action.payload.password,
            basket: [],
            auth_key: nanoid(18)
        }
        state.users = [
            ...state.users,
            {
                ...newUser
            }
        ]
        localStorage.setItem('auth_key', newUser.auth_key)
        localStorage.setItem("id_user", newUser.id)
    })
    builder.addCase(AddToWatchlist, (state, action)=>{
        const newWatchlistCandidate = {
            id: action.payload.movieId,
            title: action.payload.title,
            date: action.payload.date,
            img: action.payload.img,
            duration: action.payload.duration
        }
        state.users = state.users.map((item)=>{
            if(item.id === action.payload.userId){
                item.watchlist = [
                    ...item.watchlist,
                    {
                        ...newWatchlistCandidate
                    }
                ]
            }
            return item
        })
    })
})



export default reducer