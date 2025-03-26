import { useState, useEffect } from "react";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch("http://localhost:7100");
        if (!response.ok) {
          throw new Error("Could not fetch orders");
        }
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="loading">Loading orders...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="orders-container">
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p className="no-orders">No orders found.</p>
      ) : (
        <ul className="orders-list">
          {orders.map((order) => (
            <li key={order._id} className="order-item">
              <div className="order-details">
                <strong>Product:</strong> {order.productName}
                <br />
                <strong>Quantity:</strong> {order.quantity}
                <br />
                <strong>Address:</strong> {order.address}
              </div>
              <img
                src={order.productImage}
                alt={order.productName}
                className="order-image"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
