import React from 'react'
// import styling
import './Header.css';
// import HeaderComponents
import Logo from './HeaderCompo/Logo';
import Search from './HeaderCompo/Search';
import Features from './HeaderCompo/Features';
import MeDDL from './HeaderCompo/MeDDL';
import Product from './HeaderCompo/Product';

const Header = () => {
 return (
  <div className="header">
   <h1>This is header</h1>
   {/** Heder Left Section */}
   <div className="header__left">
    {/** Logo Component */}
    <Logo/>
    {/** Search Component */}
    <Search/>
   </div>
   {/** Header Right Section */}
   <div className="header__right">
    {/** Features Component */}
    <Features/>
    {/** MeDDL Component */}
    <MeDDL/>
    {/** Product Component */}
    <Product/>
   </div>
  </div>
 )
}

export default Header
