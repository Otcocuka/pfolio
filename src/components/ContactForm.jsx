import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className="input"
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        className="textarea"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button className="button-primary">Отправить</button>
    </form>
  );
};

export default ContactForm;