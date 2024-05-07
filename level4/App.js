import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1715106450~exp=1715107050~hmac=385be760311b4266ccfa20d710042515c86ffa88dadfa91bc7b2e3ab25e853a3"
        ></img>
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  return (
    <div className="res-card">
      <h3>{props.resName}</h3>
      <img
        className="img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
      ></img>
      <div className="price">500</div>
      <div className="rating">5 stars</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search bar</div>
      <div className="res-container">
        <ResCard resName={"punjab depot"}></ResCard>
        <ResCard resName={"malwant tdka"}></ResCard>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
