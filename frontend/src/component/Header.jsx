import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-light mb-4 p-0">
        <a className="navbar-brand" href="">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>
                Project Management
            </div>
          </div>
        </a>
      </nav>
    </div>
  );
};

export default Header;
