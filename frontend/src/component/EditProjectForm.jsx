import { useMutation } from "@apollo/client";

import { useState } from "react";

import { UPDATE_PROJECT } from "../mutations/projectMutation";
import { GET_PROJECT } from "../queries/projectQueries";

const EditProjectForm = (project) => {
  const [name, setName] = useState(project.project.name);
  const [description, setDescription] = useState(project.project.description);
  const [status, setStatus] = useState(project.project.status);

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.project.id, name, description, status },
    refetchQueries:[{query:GET_PROJECT,variables:{id:project.project.id}}]
  });
  const onSubmit = (e) => {
    e.preventDefault();

    if (name == "" || description == "" || status == "") {
      return alert("Please fill all fields.");
    }
    
    updateProject(name,description,status)
  };
  return (
    <div className="mt-5">
      <h3>Update Project Details</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            value={status}
            className="form-select"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button className="btn btn-primary" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProjectForm;
