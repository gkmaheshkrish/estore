import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
//import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}

/*const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;


   text-transform: capitalize;
 font - size: 1.4rem;
 background: transparent;
 */
 const ButtonContainer = styled.button`
 border: 0.05rem solid var(--lightBlue);
 border - radius: 0.5rem;
 padding: 0.2rem 0.5rem;
 outline - color: red;
 cursor: pointer;
 text-transform: capitalize;
 font - size: 1.4rem;
 background: transparent;
 display: inline - block;
 margin: 0.2rem 0.5rem 0.2rem 0;
 transition: all 0.5s ease -in -out;
   &: hover {
   background: var(--lightBlue);
   color: var(--mainBlue);
 }
 `;
