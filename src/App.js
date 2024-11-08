import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const provinces = [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick",
    "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island",
    "Quebec", "Saskatchewan", "Northwest Territories", "Nunavut", "Yukon"
  ];

  return (
    <div className="App">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br />

        <label>Full Name: </label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required /><br />

        <label>Address: </label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required /><br />

        <label>City: </label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required /><br />

        <label>Province: </label>
        <select name="province" value={formData.province} onChange={handleChange} required>
          <option value="">Select a Province</option>
          {provinces.map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select><br />

        <label>Postal Code: </label>
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required /><br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Information</h2>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;