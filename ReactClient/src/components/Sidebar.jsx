function Sidebar() {
    return (
      <div className="sidebar">
        <h5>Contents</h5>
        <div className="list-group">
          <a href="#">Home</a>
          <div className="ms-3">
            <a href="#">Welcome</a>
            <a href="#">About us</a>
          </div>
          <a href="#">Guide</a>
          <div className="ms-3">
            <a href="#">Learn Basic Japanese</a>
            <a href="#">Making a Japanese CV</a>
            <a href="#">Finding a Job</a>
            <a href="#">Document Preparations</a>
          </div>
          <a href="#">Resources</a>
          <div className="ms-3">
            <a href="#">Japanese workbooks</a>
            <a href="#">Japanese reading mats</a>
            <a href="#">Japanese entertainment</a>
            <a href="#">Misc</a>
          </div>
        </div>
      </div>
    );
  }

  export default Sidebar;