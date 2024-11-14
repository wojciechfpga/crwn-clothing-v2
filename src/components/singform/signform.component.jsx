import React, { useState } from 'react';
import './signform.component.scss';
import { createUser } from '../../utils/firebase.util';
import { writeUserToDB } from '../../utils/firebase.util';
const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    const {user}=await createUser(formData.password,formData.email)
   console.log(user);
    await writeUserToDB(user,{username:formData.username});
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="username"
          placeholder="Nazwa użytkownika"
          value={formData.username}
          onChange={handleChange}
        />
        <small className="form-description">Wpisz swoją nazwę użytkownika</small>
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <small className="form-description">Podaj swój adres email</small>
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Hasło"
          value={formData.password}
          onChange={handleChange}
        />
        <small className="form-description">Hasło powinno mieć co najmniej 8 znaków</small>
      </div>
      <div className="form-group">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Powtórz hasło"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <small className="form-description">Potwierdź swoje hasło</small>
      </div>
      <button type="submit" className="submit-btn">Zarejestruj się</button>
    </form>
  );
};

export default Form;
