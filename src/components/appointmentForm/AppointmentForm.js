import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = (e) => {
    switch (e.target.type) {
      case "text":
        setTitle(e.target.value);
        break;
      case "select":
        setContact(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "time":
        setTime(e.target.value);
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={title} type="text" placeholder="Title" />
      <select onChange={handleChange} selected={contact}>
        {contacts.map((contact, key) => {
          return <option key={key}>{contact.name}</option>;
        })}
      </select>
      <input
        onChange={handleChange}
        type="date"
        placeholder="date"
        min={getTodayString}
        placeholder={getTodayString}
        value={date}
      />
      <input onChange={handleChange} value={time} type="time" placeholder="time" />
      <input type="submit" />
    </form>
  );
};
