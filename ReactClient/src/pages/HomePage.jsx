import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import "./styles/homepagestyles.css"; 

function HomePage() {
  return (
    <div className="bg-">
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="main-content">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
