import React, { useState } from 'react';
import './signform.component.scss';
import { createUser } from '../../utils/firebase.util';
import { writeUserToDB } from '../../utils/firebase.util';
import Input from '../input/input.component';
// Komponent Input


const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { user } = await createUser(formData.password, formData.email);
    console.log(user);
    await writeUserToDB(user, { username: formData.username });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="username"
        placeholder="Nazwa użytkownika"
        value={formData.username}
        onChange={handleChange}
        description="Wpisz swoją nazwę użytkownika"
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        description="Podaj swój adres email"
      />
      <Input
        type="password"
        name="password"
        placeholder="Hasło"
        value={formData.password}
        onChange={handleChange}
        description="Hasło powinno mieć co najmniej 8 znaków"
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Powtórz hasło"
        value={formData.confirmPassword}
        onChange={handleChange}
        description="Potwierdź swoje hasło"
      />
      <button type="submit" className="submit-btn">
        Zarejestruj się
      </button>
    </form>
  );
};

export default Form;
