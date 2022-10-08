import React from 'react'
import { useLocation } from "react-router";
import Header from "../Components/Header";
import Posts from '../Components/Posts'
import Sidebar from "../Components/Sidebar";
import "./Homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}
