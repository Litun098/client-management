const ProjectCard = (project) => {
    
  return (
    <div className="col-md-4">
      <div className="card mb-3 p-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{project.project.name}</h5>

          <a href={`/projects/${project.project.id}`} >View</a>
        </div>
        <p className="small">
            Status : <strong>{project.project.status}</strong>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
