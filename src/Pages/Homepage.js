import React from 'react'
import { useLocation } from "react-router";
import Header from "../Components/Header";
import Posts from '../Components/Posts'
import Sidebar from "../Components/Sidebar";
import "./Homepage.css";
import "../Components/Header.css";

export default function Homepage({ data }) {
  console.log(data)

  const location = useLocation();
  console.log(location);
  return (
    <div>

      {data.map((blog, index) => {
        return (
          <div className="content" key={index}>
            <p className="headerTitles">{blog.title}</p>
            <p className="headerTitles">{blog.paragraph}</p>
          </div>
        );
      })
      }


      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );

}
