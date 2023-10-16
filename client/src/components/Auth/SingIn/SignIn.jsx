import { useDispatch, useSelector } from 'react-redux';
import s from './auth.module.css';
import { useState } from 'react';
import { AddUser } from '../../../redux/users';

const SignIn = () => {
  const dispatch = useDispatch();
  const [candidate, setCandidate] = useState({
    login: '',
    password: '',
  });

  const selectUsers = (state) => state.users.users;
  const users = useSelector(selectUsers);

  const handleUpdate = (formName, formDate) => {
    setCandidate({
      ...candidate,
      [formName]: formDate,
    });
  };

  const handleLogin = () => {
    // Find a user with the provided login and password
    const user = users.find(
      (userItem) =>
        userItem.login === candidate.login && userItem.password === candidate.password
    );

      if (user) {
        localStorage.setItem("usersid", user.id)
      // User found, you can perform the necessary actions here
      console.log('User found:', user);
    } else {
      // User not found, handle the error or display a message
      console.log('User not found');
    }
  };

  const handleCreate = () => {
    dispatch(AddUser(candidate));
  };

  return (
    <>
      <div className={s.auth}>
        <p className={s.auth_title}>Log in</p>
        <input
          className={s.auth_form}
          value={candidate.login}
          type="text"
          placeholder="Your login"
          onChange={(e) => handleUpdate('login', e.target.value)}
        />
        <input
          className={s.auth_form}
          value={candidate.password}
          type="password"
          placeholder="Your password"
          onChange={(e) => handleUpdate('password', e.target.value)}
        />
        <button className={s.auth_btn} onClick={handleLogin}>
          Log in
        </button>
      </div>
    </>
  );
};

export default SignIn;