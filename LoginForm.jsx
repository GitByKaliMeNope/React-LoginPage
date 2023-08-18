import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true); // Zustand für die Validierung der Eingabe

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Überprüfung der eingegebenen Daten - hier können verschiedene Logiken implementiert werden
    if (email === "example@example.com" && password === "passwort") {
      setIsValid(true);
      alert("Anmeldung erfolgreich!");
    } else {
      setIsValid(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} required />

      <label>Passwort:</label>
      <input type="password" value={password} onChange={handlePasswordChange} required />

      {isValid ? null : <p style={{ color: 'red' }}>Ungültige Anmeldedaten!</p>}

      <button type="submit">Anmelden</button>
    </form>
  )
}

export default LoginForm;