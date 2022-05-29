import "./App.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";

const App = () => {
  return (
    <div className="wrapper">
      <img src={img1} alt="Shopp.my" />
      <img src={img2} alt="Shopp.my" />
      <img src={img3} alt="Shopp.my" />
    </div>
  );
};

export default App;
