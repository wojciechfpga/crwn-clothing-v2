import React, { useState, useContext } from 'react';
import './login.component.scss';
import { loginUser } from '../../utils/firebase.util';
import { UserContext } from '../../contexts/user.context';
import Input from '../input/input.component';
import { logoutUser } from '../../utils/firebase.util';

const LoginForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await loginUser(formData.email, formData.password);
      console.log(user);
      setCurrentUser(user); // Zapisz użytkownika w kontekście
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = async() => {
    // Tu zaimplementuj logikę wylogowania
    console.log('Logout triggered');
    setCurrentUser(null); // Wyczyszczenie kontekstu
    await logoutUser()
  };

  if (currentUser) {
    return (
      <div className="logout-container">
        <p>Witaj, {currentUser.email}</p>
        <button className="logout-btn" onClick={handleLogout}>
          Wyloguj
        </button>
      </div>
    );
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        description="Email"
      />
      <Input
        type="password"
        name="password"
        placeholder="Hasło"
        value={formData.password}
        onChange={handleChange}
        description="Type password"
      />
      <button type="submit" className="submit-btn">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
