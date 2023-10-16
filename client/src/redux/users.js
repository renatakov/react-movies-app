import { createAction, createReducer, nanoid } from "@reduxjs/toolkit"


const initialState = {
    users: [
        {
            id: 1,
            login: 'admin',
            password: 'admin',
            wachlist:[],
            auth_key: '123greg'
        },
    ]
}


export const AddUser = createAction('users/addProduct', (newUser) => ({
    payload: {...newUser}
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
})



export default reducer