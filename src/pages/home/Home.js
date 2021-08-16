import Feature from "../../Components/Feature";
import List from "../../Components/List";
import Navbar from "../../Components/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Feature />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
