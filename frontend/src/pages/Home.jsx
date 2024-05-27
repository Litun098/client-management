import AddClientModel from "../component/AddClientModel";
import AddProjectModel from "../component/AddProjectModel";
import Clients from "../component/Clients";
import Projects from "../component/Projects";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModel />
        <AddProjectModel/>
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
