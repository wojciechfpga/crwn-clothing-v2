import React, { useState } from 'react';
import './login.component.scss';
import { loginUser } from '../../utils/firebase.util';
import Input from '../input/input.component';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { user } = await loginUser( formData.email,formData.password);
    console.log(user);
  };

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
