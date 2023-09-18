import React, { useState } from 'react';

import '../../styles/Register.css';

function Register() {
  // State variables to store user input and success message
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form validation and submit data to a server here
    // For simplicity, we'll just log the form data to the console
    console.log('Form data submitted:', formData);
    
    // Display a success message
    setIsRegistered(true);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {isRegistered ? (
        <div className="success-message">
          Thank you for registering!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default Register;
