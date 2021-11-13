import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItems } from './NavItems';
import './Navbar.css';
import { MyContext } from '../utils/Context';



function Navbar() {
  const [sidebar, setSidebar] = useState(false);



  const showSidebar = () => setSidebar(!sidebar);

 

  return (
    <div>
      <div className='navbar'>
        <div className="d-flex justify-content-between w-100 ">
          <div className='menu-bars'>
            <Link to='#'>
              <i className="material-icons" id="menu-btn" data-toggle="dropdown">menu</i>
              <div className="dropdown-menu">
                <Link to="/" className="dropdown-item">
                  <span>Dashboard</span>
                </Link>
                <Link to="/store" className="dropdown-item">
                  <span>Store</span>
                </Link>
                <Link to="/events" className="dropdown-item">
                  <span>Events</span>
                </Link>
                <Link to="/feedback" className="dropdown-item">
                  <span>Feedback</span>
                </Link>
                <Link to="/transport" className="dropdown-item">
                  <span>TransportAgents</span>
                </Link>
                <Link to="/purchase" className="dropdown-item">
                  <span>Purchase</span>
                </Link>
              </div>
            </Link>
          </div>
          <div className="profile dropdown dropleft">
            <i className="material-icons" data-toggle="dropdown">account_circle</i>
            <MyContext.Consumer>
              {
                (context)=>{
                  return(
                    <div className="dropdown-menu">
                    <a className="dropdown-item" onClick={context.logout}>Logout</a>
                    </div>
                  );
                }
              }
            </MyContext.Consumer>
          </div>
        </div>
      </div>
      <nav className="nav-menu">
        <ul className='nav-menu-items' onClick={showSidebar}>
          {NavItems.map((item, index) => {
            return (
              <li key={index} className={item.cName} style={item.style}>
                <Link to={item.path}>
                  <i className="material-icons">{item.icon}</i>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

    </div>
  );




}

export default Navbar;