import React, { useState } from 'react';
import './Move.css';

const Move = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    course: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic
  };

  return (
    <div className="admission-form">
      <h2>Add New Admission</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>
          Course:
          <input type="text" name="course" value={formData.course} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Move;
