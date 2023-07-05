import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza Delivery Com.</h1>;
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numberOfPizzas = pizzas.length;
  // const numberOfPizzas = 0;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numberOfPizzas > 0 && (
        <>
          <p>
            Pizza is a dish of Italian origin, made with an oven-baked, flat,
            generally round bread that is often covered with tomatoes or a
            tomato-based sauce and mozzarella cheese. Other toppings are added
            according to region, culture, or personal preference. Originating as
            a part of Italian cuisine, the dish has become popular in many
            different parts of the world, particularly the United States, where
            numerous varieties have been developed, pizza restaurant chains have
            flourished, and pizza has become a home delivery item as well as
            being available as a frozen food ready to bake at home.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza key={pizza.name} pizza={pizza} />;
            })}
          </ul>
        </>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        photoName="pizzas/spinaci.jpg"
        price={12}
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
      />
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={12}
        photoName="pizzas/focaccia.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizza }) {
  const { photoName, name, ingredients, price, soldOut } = pizza;

  // if (soldOut) return null;

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="spinaci"></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 19;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {/* {isOpen && (
        <div className="order">
          <p>
            We are open until {closeHour}:00. Come and visit or order online !!
          </p>
          <button className="btn">Order</button>
        </div>
      )} */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to serve you between {openHour}:00 and {closeHour}:00 !!!
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00. Come and visit or order online !!</p>
      <button className="btn">Order</button>
    </div>
  );
}

//rendering root file of our project this is react18
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//before react 18
//React.render(<App/>)
