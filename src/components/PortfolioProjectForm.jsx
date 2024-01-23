import { useState } from "react";

function ProjectForm(props) {
  const [input, setInput] = useState("");
  let [completion, setCompletion] = useState("");

  const completionLevel = ["incomplete", "in progress", "complete"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!completion) {
      completion = "incomplete";
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      completion: completion,
    });

    setInput("");
    setCompletion("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="Project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="Project-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${completion}`}>
            {completion || "Priority"}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setCompletion(completionLevel[0])}>
              Need to start
            </p>
            <p onClick={() => setCompletion(completionLevel[1])}>
              Need to complete
            </p>
            <p onClick={() => setCompletion(completionLevel[2])}>Completed</p>
          </div>
        </div>
        <button className="project-button">Add a Project here!</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="project-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${completion}`}>
            {completion || "Priority"}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setCompletion(completionLevel[0])}>Need to start</p>
            <p onClick={() => setCompletion(completionLevel[1])}> Need to complete</p>
            <p onClick={() => setCompletion(completionLevel[2])}>
              Completed
            </p>
          </div>
        </div>
        <button className="project-button">Update</button>
      </form>
    </div>
  );
}

export default ProjectForm;
