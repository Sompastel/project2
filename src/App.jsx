import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Products from "./Products.jsx";

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="shop-title">🥐 Golden Crust Bakery</h1>

        <p className="shop-sub">
          Freshly Baked Luxury Bread & Pastries Everyday
        </p>

        <div className="btn-group">
          <Link to="/login">
            <button className="main-btn">Login</button>
          </Link>

          <Link to="/register">
            <button className="main-btn outline">Register</button>
          </Link>

          <Link to="/products">
            <button className="main-btn">Menu</button>
          </Link>

        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/products" element={<Products />} />
</Routes>

  );
}

export default App;
