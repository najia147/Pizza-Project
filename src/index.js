import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
    <div className="font-sans min-h-screen bg-gray-100">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-gray-800 text-white text-center py-6">
      <h1 className="text-4xl font-bold">Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="py-10">
      <h2 className="text-3xl text-center font-semibold mb-8">Our Menu</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pizzaData.map((pizza, index) => (
          <Pizza key={index} pizza={pizza} />
        ))}
      </div>
    </main>
  );
}

function Pizza({ pizza }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${pizza.soldOut ? "opacity-50" : ""}`}>
      <img
        src={pizza.photoName}
        alt={pizza.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-semibold">{pizza.name}</h3>
      <p className="text-gray-600">{pizza.ingredients}</p>
      <p className="text-xl font-bold mt-2">${pizza.price}</p>
      {pizza.soldOut && <p className="text-red-500 font-semibold">Sold Out</p>}
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>{isOpen ? "We're currently open!" : "Sorry, we're closed."}</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
