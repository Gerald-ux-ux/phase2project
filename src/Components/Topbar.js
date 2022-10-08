import React from 'react'
import './Topbar.css'


const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-instagram-square"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
       <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <a className="link" to="/">
              HOME
            </a>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <a className="link" to="/Write">
              WRITE
            </a>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <a className="link" to="/Settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </a>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <a className="link" to="/Login">
                LOGIN
              </a>
            </li>
            <li className="topListItem">
              <a className="link" to="/Register">
                REGISTER
              </a>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}


export default Topbar