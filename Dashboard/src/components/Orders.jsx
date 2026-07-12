import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title" style={{ marginBottom: "20px" }}>Orders ({allOrders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <th style={{ textAlign: "left", padding: "12px" }}>Mode</th>
                  <th style={{ textAlign: "left", padding: "12px" }}>Instrument</th>
                  <th style={{ textAlign: "right", padding: "12px" }}>Qty.</th>
                  <th style={{ textAlign: "right", padding: "12px" }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "12px", textAlign: "left" }}>
                      <p style={{
                        background: order.mode === "BUY" ? "rgb(222, 239, 255)" : "rgb(255, 197, 197)",
                        color: order.mode === "BUY" ? "rgb(66, 133, 244)" : "rgb(233, 120, 120)",
                        width: "60px",
                        textAlign: "center",
                        borderRadius: "3px",
                        margin: 0,
                        fontWeight: "500",
                        fontSize: "0.8rem",
                        padding: "2px 0"
                      }}>
                        {order.mode}
                      </p>
                    </td>
                    <td style={{ padding: "12px", textAlign: "left", fontWeight: "500" }}>{order.name}</td>
                    <td style={{ padding: "12px", textAlign: "right" }}>{order.qty}</td>
                    <td style={{ padding: "12px", textAlign: "right" }}>₹{order.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;