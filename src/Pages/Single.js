import React from 'react';
import Sidebar from "../Components/Sidebar";
import SinglePost from "../Components/SinglePost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
