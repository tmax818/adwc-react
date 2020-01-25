import React from 'react';
import {Link } from 'react-router-dom';
import './Header.css'


function Header() {
  return (
    <div className="nav-wrapper">
    <nav className="nav nav-pills nav-justified">
            <li><Link to="/">Home</Link></li>
            <li><a href="calendar.html">Calendar</a></li>
            <li><a href="events.php">Events</a></li>
            <li><a href="rental.php">Rental</a></li>
            <li><Link to="/members">Members</Link></li>
            <li><a href="join.php">Join</a></li>
            <li><a href="gallery.php">Gallery</a></li>
            <li><a href="sponsors.php">Donor</a></li>
            <li><a href="contact.html">Contacts</a></li>
    </nav> 
    </div>
  );
}

export default Header;
