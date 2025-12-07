import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPhone('');
    setDob('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && !email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    if (phone && (phone.length !== 10 || !/^\d+$/.test(phone))) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }
    if (dob) {
      const selectedDate = new Date(dob);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate > today) {
        alert('Invalid date of birth. Please select a valid date.');
        return;
      }
    }
    if (!username || !email || !phone || !dob) {
      alert('Please fill out all fields.');
      return;
    }

    // Everything valid - close modal
    resetForm();
    setIsOpen(false);
  };

  const closeOnOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      setIsOpen(false);
    }
  };

  return (
    <div className="App">
      <h1 className="main-title">User Details Modal</h1>

      <div className="center-container">
        <button onClick={() => setIsOpen(true)}>Open Form</button>
      </div>

      {isOpen && (
        <div className="modal" onClick={closeOnOutsideClick}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h2>Fill the Form</h2>

              <label>Username:</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label>Email:</label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Phone Number:</label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label>Date of Birth:</label>
              <input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />

              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
