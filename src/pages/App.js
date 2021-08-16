import "./App.scss";
import Register from "./register/Register";
// import Home from "./home/Home";
import Watch from "./watch/Watch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Watch/> */}
        {/* <Home /> */}
        <Register />
      </header>
    </div>
  );
}

export default App;
