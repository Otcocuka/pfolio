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
    let apiToken = "6091232201:AAFeK7pA7uJID96rEkiMmH649rdLvE4Pyo0";
  let chatId = "@salskdjhhakgjfhakjhwkdjbmzxjchzb";
  let text = "Hello world!";

  let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;

  let request = new XMLHttpRequest();
  request.open("GET", urlString);
  request.send();
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
