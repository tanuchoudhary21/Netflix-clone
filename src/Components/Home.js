import Feature from "./Feature";
import List from "./List";
import Navbar from "./Navbar";
import "./styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Feature />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
};

export default Home;
