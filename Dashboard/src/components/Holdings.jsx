import React, { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { VerticalGraph } from "./VerticalGraph";
import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState(holdings);
  const [flashClasses, setFlashClasses] = useState({});

  useEffect(() => {
    axios.get("/api/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });

    const socket = io("http://localhost:3002");
    
    socket.on("live-prices", (data) => {
      if (data.holdings) {
        setAllHoldings((prev) => {
          const newFlashing = {};
          const updated = prev.map((stock) => {
            const liveStock = data.holdings.find((s) => s.name === stock.name);
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

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };



  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index} className={flashClasses[stock.name] || ""}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td className={flashClasses[stock.name] ? "bold" : ""}>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
       <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;