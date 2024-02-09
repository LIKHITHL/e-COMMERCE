import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="background">
      <div className="container-fluid ">
        <div className="row alignment">
          <div className="col spacing">
            <h3>Links
            </h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Login</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Cart</a></li>
              <li><a href="/">Kids</a></li>
            </ul>
          </div>
          <div className="col spacing">
            <h3>Men
            </h3>
            <ul>
              <li><a href="/">All Products</a></li>
              <li><a href="/">Shirts</a></li>
              <li><a href="/">Hoodies</a></li>
              <li><a href="/">Pants</a></li>
              <li><a href="/">Footwear</a></li>
            </ul>
          </div>
          <div className="col spacing">
            <h3>Women
            </h3>
            <ul className="">
              <li><a href="/">Allproducts</a></li>
              <li><a href="/">Dresses</a></li>
              <li><a href="/">Kurtas</a></li>
              <li><a href="/">Pants</a></li>
              <li><a href="/">Skirts</a></li>
            </ul>
          </div>
          <div className="col spacing">
            <h4>Social Media
            </h4>
            <p className="Follow">Follow Us On</p>
            <div>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter icons"></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram icons"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook icons"></i></a>
              <a href="https://discord.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-discord icons"></i></a>
            </div>
          </div>
        </div>
      </div>
      <hr className="horizontal-line" />
      <p className="copyright">Copyright &copy; 2023 - All Rights Reserved</p>
    </div>
  )
}

export default Footer