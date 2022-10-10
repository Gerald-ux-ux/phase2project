import React, { useState } from "react";
import { useLocation } from "react-router";
import Header from "../Components/Header";
import Posts from "../Components/Posts";
import Sidebar from "../Components/Sidebar";
import "./Homepage.css";

export default function Homepage() {
  const [data, setData] = useState([]);

  const location = useLocation();
  console.log(location);

  return (
    <div>
      {data.length === 0 ? (
        <h3></h3>
      ) : (
        data.map((blog, index) => {
          return (
            <div className="content" key={index}>
              <p>{blog.title}</p>
              <p>{blog.paragraph}</p>
            </div>
          );
        })
      )}

      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}
