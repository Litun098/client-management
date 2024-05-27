import { useMutation } from "@apollo/client";

import { useNavigate } from "react-router-dom";

import { FaTrash } from "react-icons/fa";

import { DELETE_PROJECT } from "../mutations/projectMutation";
import { GET_PROJECTS } from "../queries/projectQueries";

const DeleteProjectButton = (projectId) => {
  const navigate = useNavigate();
  console.log(projectId.projectId)

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId.projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={deleteProject}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
