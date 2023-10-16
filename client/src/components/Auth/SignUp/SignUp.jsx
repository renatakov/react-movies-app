import s from '../SingIn/auth.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { AddUser } from '../../../redux/users'

const SignUp = () => {
    const dispatch = useDispatch()
    const [candidate, setCandidate] = useState ({
        name: '',
        login: '',
        password: ''
    })
    const handleUpdate = (formName, formData) => {
        let newUpdate = {}
        newUpdate[formName] = formData
        setCandidate (
            {...candidate,
            ...newUpdate}
        )
    }    

    const handleCreate = () => {
        dispatch(AddUser(candidate))
    }

    return (
        <>
            <div className={s.auth}>
                <p className={s.auth_title}>Sign up</p>
                <input
                    onChange={(e) => {handleUpdate('name', e.target.value)}} 
                    value={candidate.name} 
                    className={s.auth_form} 
                    type="text"  
                    placeholder='Your name'/>
                <input
                    onChange={(e) => {handleUpdate('login', e.target.value)}} 
                    value={candidate.login} 
                    className={s.auth_form} 
                    type="text" 
                    placeholder='login'/>
                <input
                    onChange={(e) => {handleUpdate('password', e.target.value)}} 
                    value={candidate.password} 
                    className={s.auth_form} 
                    type="password" 
                    placeholder='password'/>
                <button onClick={handleCreate} className={s.auth_btn}>Sign Up</button>
            </div>
        </>
    )
}

export default SignUp