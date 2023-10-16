import { createAction, createReducer, nanoid } from "@reduxjs/toolkit"


const initialState = {
    users: [
        {
            id: 1,
            login: 'admin',
            password: 'admin',
            watchlist:[1],
            auth_key: '123greg'
        },
    ]
}


export const AddUser = createAction('users/addProduct', (newUser) => ({
    payload: {...newUser}
}))

export const AddToWatchlist = createAction('users/addToBasket', (userId, movieId)=>({
    payload:{
        userId,
        movieId
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

        state.users = state.users.map((item)=>{
            if(item.id === action.idUser){
                item.watchlist = [
                    ...item.watchlist,
                    action.movieId
                ]
            }
            return item
        })
    })
})



export default reducer