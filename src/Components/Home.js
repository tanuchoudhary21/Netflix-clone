import Feature from "./Feature";
import Navbar from "./Navbar";
import "./styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Feature />
    </div>
  );
};

export default Home;
