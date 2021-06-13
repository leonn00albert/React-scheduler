import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleChange = (e) => {
   
    switch (e.target.type) {
      case "text":
        setName(e.target.value);
        break;
      case "tel":
        setPhone(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        val={name}
        placeholder="Name"
      />
      <input
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        onChange={handleChange}
        type="tel"
        val={phone}
        placeholder="Phone"
      />
      <input
        onChange={handleChange}
        type="email"
        val={email}
        placeholder="Email"
      />
      <input type="submit"/>
    </form>
  );
};
