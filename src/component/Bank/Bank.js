import { useState, useEffect } from "react";
import axios from "axios";
import "./Bank.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import OrderItem from "../Bank/BankItem";

const Bank = () => {
  const [orderItem, setOrderItem] = useState([]);

 


  useEffect(() => {

    const func = ()=>{
      axios
      .get(`api/v1/bankinfo`)
      .then((res) => setOrderItem(res.data.bankInfo))
      .catch((err) => console.log(err, "it has an error"));
    }

    func();
  },[orderItem]);

  console.log(orderItem)

  return (
    <>
      
      <div className="main">       
        <div className="your-order">Bank User Details</div>
		<div className="cartPage">
          {orderItem &&
            orderItem.map((item, key) => (
              <div className="check" key={item._id}>
                <OrderItem item={item} />
              </div>
            ))}
        </div>	
      </div>
    </>
  );
};

export default Bank;
