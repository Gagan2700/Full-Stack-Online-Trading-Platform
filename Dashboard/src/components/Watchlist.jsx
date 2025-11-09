import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { watchlist } from '../Data/data';
import { MdKeyboardArrowUp,MdOutlineKeyboardArrowDown  } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <div className="searchicon"><CiSearch/></div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {
          watchlist.map((stock,index)=>{
            return <WatchListItem stock={stock} key={index}/>
          })
        }
      </ul>
    </div>
  );  
};

export default WatchList;

const WatchListItem = ({stock})=>{
  const [mousein,setMouseIn] = useState(false);

  const handleMouse = ()=>{
    setMouseIn(!mousein);
  }

  const handleLeave=()=>{
    setMouseIn(!mousein);
  }

  return(
    <li >
      <div className="item" onMouseEnter={handleMouse} onMouseLeave={handleLeave}>
        <p className={stock.isDown?"down":"up"} style={{fontWeight:"400",fontSize:"0.85rem",textTransform:"uppercase" }}>{stock.name}</p>
        <div className="item-info">
          <div style={{display:"flex", gap:"0.5rem"}}>
            <span className="percent">{stock.percent}</span>
            {
              stock.isDown?<MdOutlineKeyboardArrowDown />:
              <MdKeyboardArrowUp />
            }
          </div>
          <p className={stock.isDown?"down":"up"}>{stock.price}</p>
        </div>
        {
          mousein &&
          <OverLay/>
        }
      </div>
    </li>
  );
}

const handleClick = ()=>{
  let [display,setDisplay] = useState(true);

}

const OverLay=({uid})=>{
  return (
    <div className="actions">
      <button className="buy" onClick={handleClick}>B</button>
      <button className="sell">S</button>
      <button className="action"><IoIosTrendingUp /></button>
      <button className="action"><RiDeleteBin6Line /></button>
    </div>
  )
}

const Buy = ()=>{
  return(
    <div className="buy-box">
      
    </div>
  );
}
