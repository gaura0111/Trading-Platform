import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleActionClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: mode,
    })
    .then(() => {
      closeBuyWindow();
    })
    .catch((err) => {
      console.error("Error placing order:", err);
      closeBuyWindow();
    });
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  const colorTheme = mode === "BUY" ? "#4184f3" : "#ff5722";

  return (
    <div className="container" id="buy-window" draggable="true" style={{ height: "auto", paddingBottom: "20px" }}>
      <div className="header" style={{ backgroundColor: colorTheme, padding: "12px 20px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}>
        <h3 style={{ color: "#fff", margin: 0, fontSize: "1.1rem" }}>
          {mode} {uid}
        </h3>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * (stockPrice || 140.65)).toFixed(2)}</span>
        <div>
          <Link
            className="btn"
            style={{ backgroundColor: colorTheme }}
            onClick={handleActionClick}
          >
            {mode === "BUY" ? "Buy" : "Sell"}
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;