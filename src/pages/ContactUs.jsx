import { useState } from "react";

function ContactForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return !props.edit ? (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your inout"
          value={input}
          name="text"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <button className="contact-button">send</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="contact-input"
          onChange={handleChange}
        ></input>
        <button className="contact-button">Update</button>
      </form>
    </div>
  );
}

export default ContactForm;
