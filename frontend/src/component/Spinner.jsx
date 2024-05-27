const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
