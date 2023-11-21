import React, { useState } from 'react';
import './Register.css';

const RegisterForm = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    fullname: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add your validation logic here, for example, checking if passwords match

    // For demonstration purposes, let's just log the form data
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='regist1'>
      <center>
      <h2>Register</h2> 
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br></br>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br></br>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br></br>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br></br>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br></br>
        <button type="submit">Register</button>
      </form>
      </center>
    </div>
  );
};

export default RegisterForm;
