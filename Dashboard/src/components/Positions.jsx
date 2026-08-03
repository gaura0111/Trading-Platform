import React, { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { positions } from "../data/data";

const Positions = () => {
  const [allPositions, setAllPositions] = useState(positions);
  const [flashClasses, setFlashClasses] = useState({});

  useEffect(() => {
    axios.get("/api/allPositions").then((res) => {
      setAllPositions(res.data);
    });

    const socket = io("http://localhost:3002");
    
    socket.on("live-prices", (data) => {
      if (data.positions) {
        setAllPositions((prev) => {
          const newFlashing = {};
          const updated = prev.map((stock) => {
            const liveStock = data.positions.find((s) => s.name === stock.name);
            if (liveStock) {
              if (liveStock.price > stock.price) newFlashing[stock.name] = "flash-green";
              else if (liveStock.price < stock.price) newFlashing[stock.name] = "flash-red";
              return { ...stock, price: liveStock.price };
            }
            return stock;
          });
          
          setFlashClasses(newFlashing);
          setTimeout(() => setFlashClasses({}), 1000);
          
          return updated;
        });
      }
    });

    return () => socket.disconnect();
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index} className={flashClasses[stock.name] || ""}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td className={flashClasses[stock.name] ? "bold" : ""}>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;