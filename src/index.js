import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza</h1>
    </header>
  );
}

// Menu Component
function Menu() {
  // Get the pizzas data
  const pizzas = pizzaData;
  // Get the pizza stock
  const pizzaStock = pizzas.length;
  console.log(pizzaStock);
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaStock > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza key={pizza.name} pizzaObj={pizza} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later 🫶🏻</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  // Check if the pizza is sold out
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

// Footer Component
function Footer() {
  // Get the current hour
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 24;
  const isOpen = openHour <= hour && hour < closeHour;

  return (
    <footer className="footer">
      {/* Check if the restaurant is open */}
      {isOpen && (
        <p>
          {new Date().toLocaleTimeString()} We are currently{" "}
          <span style={{ color: "green" }}>open.</span>
        </p>
      )}
      {!isOpen && (
        <div className="order">
          <p>
            {new Date().toLocaleTimeString()} We're until 22:00. Come visit us
            or order <span style={{ color: "red" }}>offline</span>
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
