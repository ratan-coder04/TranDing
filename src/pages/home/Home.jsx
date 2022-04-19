import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Featuerd from "../../components/featured/Featuerd";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
    <Navbar/>  
   <div className="widgets">
     <Widget type="user"/>
     <Widget type="order"/>
     <Widget type="earning"/>
     <Widget type="balance"/>
   </div>
   <div className="charts">
     <Featuerd/>
     <Chart title ="Last 6 months (Revenue)" aspect ={2/1}/>
   </div>
   <div className="listContainer">
       <div className="listTitle">Latest transcetion</div>
       <List/>
     </div>
    </div>
    </div>
  );
};

export default Home;
