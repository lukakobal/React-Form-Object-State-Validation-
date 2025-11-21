import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // 1) state za form
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // 2) state za napake
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // 3) generična funkcija za vse inpute
  const handleChange = (e) => {
    const { name, value } = e.target;

    // posodobimo form objekt
    setForm({
      ...form,
      [name]: value,
    });

    // validacija sproti
    if (name === "email") {
      if (!value.includes("@")) {
        setErrors((prev) => ({ ...prev, email: "Email is not valid ❌" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    if (name === "password") {
      if (value.length < 6) {
        setErrors((prev) => ({
          ...prev,
          password: "Password must be at least 6 characters ❌",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  // submit funkcija
  const handleSubmit = (e) => {
    e.preventDefault();

    // če ni napak → lahko pošljemo form
    if (!errors.email && !errors.password) {
      alert("Form submitted successfully! 🎉");
    }
  };

  return (
    <div className="container">
      <h1>React Form (Object State + Validation)</h1>

      <form onSubmit={handleSubmit}>
        {/* EMAIL */}
        <label>Email:</label>
        <input
          name="email"
          type="text"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* PASSWORD */}
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
