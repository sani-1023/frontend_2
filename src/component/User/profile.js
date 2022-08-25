import React, { useState, useEffect } from "react";
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import profile  from "../../images/profile.png"


const Profile = () => {
  //const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get(`api/v1/me`).then((res) => {
      setUser(res.data.user);

      // console.log(user)
    });
  }, []);

  return (
    <div className="main">
      <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="profile-nav col-md-3">
            <div className="panel">
              <div className="user-heading round">
                <a href="#">
                  <img
                    src={profile}
                    alt=""
                  />
                </a>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
          <div className="profile-info col-md-9">
            <div className="panel">
              <div className="bio-graph-heading">Your Profile</div>
              <div className="panel-body bio-graph-info">
                <h1>Basic Information</h1>
                <div className="row">
                  <div className="bio-row">
                    <p>
                      <span>Name </span>: {user.name}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Country </span>: Bangladesh
                    </p>
                  </div>

                  <div className="bio-row">
                    <p>
                      <span>Email </span>: {user.email}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Mobile </span>: +88 {user.phone}
                    </p>
                  </div>
                  <div className="bio-row">
                    <p>
                      <span>Bank Account </span>: {user.bankAccount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="your-order">your recent orders</div>
      {/* <div className="order-container">
                
                     <p><span> Order Id : </span>    sjbkjfswjfobejnofjo</p>
                     <p><span> Product name : </span>   product 1</p>
                     <p><span> Quantity : </span>  5</p>
                     <p><span> Total price : </span>   1500/=</p>
                     <p><span> Date : </span>   Today</p>
               
            </div> */}
      <div class="card">
        <div class="container">
          <h4>
            <b>Order Id:</b>
            <b> lnsdhlknldknlks</b>
          </h4>
          <h4>
            <b>Product Name:</b>
            <b> product1</b>
          </h4>
          <h4>
            <b>Quantity:</b>
            <b> 5</b>
          </h4>
          <h4>
            <b>Total Price:</b>
            <b> 500/=</b>
          </h4>
          <h4>
            <b>Date:</b>
            <b> Today</b>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;
