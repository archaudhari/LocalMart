
import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./SellerBoard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getShop } from "../../actions/shopAction";
import Medadata from "../../Layout/Medadata";

const Sellerboard = () => {
  const dispatch = useDispatch();

  const { shops } = useSelector((state) => state.shops);

  // const { orders } = useSelector((state) => state.allOrders);

  // const { users } = useSelector((state) => state.allUsers);

  // let outOfStock = 0;

  // shops &&
  //   shops.forEach((item) => {
  //     if (item.Stock === 0) {
  //       outOfStock += 1;
  //     }
  //   });

  useEffect(() => {
    dispatch(getShop());
    // dispatch(getAllOrders());
    // dispatch(getAllUsers());
  }, [dispatch]);

  // let totalAmount = 0;
  // orders &&
  //   orders.forEach((item) => {
  //     totalAmount += item.totalPrice;
  //   });

  // const lineState = {
  //   labels: ["Initial Amount", "Amount Earned"],
  //   datasets: [
  //     {
  //       label: "TOTAL AMOUNT",
  //       backgroundColor: ["tomato"],
  //       hoverBackgroundColor: ["rgb(197, 72, 49)"],
  //       data: [0, totalAmount],
  //     },
  //   ],
  // };

  // const doughnutState = {
  //   labels: ["Out of Stock", "InStock"],
  //   datasets: [
  //     {
  //       backgroundColor: ["#00A6B4", "#6800B4"],
  //       hoverBackgroundColor: ["#4B5000", "#35014F"],
  //       data: [outOfStock, products.length - outOfStock],
  //     },
  //   ],
  // };

  return (
    <div className="dashboard">
      <Medadata title="Dashboard - Seller Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          {/* <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div> */}
          <div className="dashboardSummaryBox2">
            <Link to="/seller/shops">
              <p>shops</p>
              <p>{shops && shops.length}</p>
            </Link>
            {/* <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link> */}
          </div>
        </div>

        {/* <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div> */}
      </div>
    </div>
  );
};


export default Sellerboard