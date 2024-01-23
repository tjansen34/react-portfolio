import { useState } from "react";
import PortfolioProjectForm from "./PortfolioProjectForm";
import Portfolio from "./Portfolio";

function PortfolioForm() {
  const [project, setProject] = useState([]);

  // Function to add a project list item
  const addProjectItem = (item) => {
    console.log('project item', item);
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new bucket list item to the existing array of objects
    const newProject = [item, ...project];
    console.log(newProject);

    // Call setBucket to update state with our new set of bucket list items
    setProject(newProject);
  };

  // Function to mark bucket list item as complete
  const completeProjectItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedProject = project.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedProject);
    setProject(updatedProject);
  };

  // Function to remove bucket list item and update state
  const removeProjectItem = (id) => {
    const updatedProject = [...project].filter((item) => item.id !== id);

    setProject(updatedProject);
  };

  // Function to edit the bucket list item
  const editProjectItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setProject((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your Project Board?</h1>
      <ProjectForm onSubmit={addProjectItem} />
      <Project
        project={project}
        completeProjectItem={completeProjectItem}
        removeProjectItem={removeProjectItem}
        editProjecttItem={editProjectItem}
      ></Project>
    </div>
  );
}

export default PortfolioForm;
