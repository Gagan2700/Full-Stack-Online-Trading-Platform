// import { positions } from "../Data/data";
import { useState,useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions,setPositions] = useState([]);

  useEffect(()=>{
    const getPositions = async ()=>{
      const response = await axios.get("http://localhost:8080/allPositions");
      setPositions(response.data);
    }
    getPositions();
  },[])

  return (
    <>
      <h3 className="title">Positions {positions.length}</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          </thead>
          <tbody>
            {
              positions.map((stock,index)=>{
                const currVal = stock.price*stock.qty;
                const isProfit = currVal-stock.avg*stock.qty>=0.0;
                const profClass = isProfit ?"profit":"loss";
                const dayClass  = stock.isLoss ? "loss":"profit";
                return <tr key={index} >
                  <td>{stock.Product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currVal-stock.avg*stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;