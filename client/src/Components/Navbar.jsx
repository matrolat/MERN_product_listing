import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {styled} from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Navbar() {

   const Header = styled(AppBar)`
        background:black;
    `
    const Tabs = styled(Link)`
        margin-right:20px;
        font-size:20px;
        text-decoration:none;
        color:white;

    `

  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to="/" > All Products</Tabs>
            <Tabs to="/addproducts"> Add Products</Tabs>
        
        </Toolbar>
    </Header>
  )
}
