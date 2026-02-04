import Login from "./Login";
import Register from "./Register";
function App() {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="shop-title">🥐 Golden Crust Bakery</h1>
        <p className="shop-sub">
          Freshly Baked Luxury Bread & Pastries Everyday
        </p>

        <div className="btn-group">
          <a href="/login">
            <button className="main-btn">Login</button>
          </a>

          <a href="/register">
            <button className="main-btn outline">Register</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
