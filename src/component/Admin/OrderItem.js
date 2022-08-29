import React from "react";
import "./OrderItem.css";
import { Link } from "react-router-dom";
import image from "../../images/macbook.jpg";
import { removeItemsFromCart } from "../../actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const OrderItem = ({ item }) => {
  const Confirm = (id) => {
    const data = {
      transactionId: id,
    };

    axios
      .post(`http://localhost:4000/api/v1/admintransaction`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err, "it has an error"));
  };
  return (
    <div className="CartItemCard">
      <div>
        {/* <Link to={`/product/${item.product}`}>{item.name}</Link> */}
        <span>{`Transaction id: ${item.transactionId}`}</span>
        <span>{`User id: ${item.userId}`}</span>
        {item.order.map((item, key) => (
          <span>
            <p>{`PruductId: ${item.productId}`}</p>
            <span>
              {" "}
              <p>{`Quantity: ${item.quantity}`}</p>
            </span>
            <span>
              <p>{`Product Name: ${item.productName}`}</p>
            </span>
          </span>
        ))}
        <span>
          <h2 className={item.status === 2 ? "greenColor" : "redColor"}>
            {item.status === 2 ? (
             <p>Delivered</p>
            ) : item.status === 1 ? (<p style={{color:"blue"}}>Processing</p>):( <p onClick={() => Confirm(item.transactionId)}>Confirm</p>)}
          </h2>
        </span>
      </div>
    </div>
  );
};

export default OrderItem;
