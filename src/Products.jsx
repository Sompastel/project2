import "./Products.css";

function Products() {
  const items = [
    {
      id: 1,
      name: "Strawberry Cake",
      price: 120,
      image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e"
    },
    {
      id: 2,
      name: "Croissant",
      price: 80,
      image: "https://images.unsplash.com/photo-1555507036-ab794f4afe5c"
    },
    {
      id: 3,
      name: "Chocolate Donut",
      price: 70,
      image: "https://images.unsplash.com/photo-1505253210343-9b8b9d6c6c41"
    },
    {
      id: 4,
      name: "Latte Coffee",
      price: 95,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    }
  ];

  return (
    <div className="product-container">
      <h1 className="product-title">🍰 เมนูคาเฟ่สุดน่ารัก</h1>

      <div className="product-grid">
        {items.map(item => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price} บาท</p>
            <button>สั่งซื้อ</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
