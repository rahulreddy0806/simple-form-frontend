import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_API_URL, { data: formData });
      alert("Data submitted successfully!");
      setFormData("");
    } catch (error) {
      console.error(error);
      alert("Error submitting data");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="input"
        type="text"
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
      />
      <button type="submit">Click Here</button>
    </form>
  );
}

export default Form;