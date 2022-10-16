import {AppBar,Toolbar,styled} from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
const Header =styled(AppBar)`
background: #111111
`;
const Tabs =styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`
function Navbar() {
  return (
    <div>
        <Header >
            <Toolbar>
             
                <Tabs to='/'>HOME</Tabs>
                <Tabs to='/dash'>DashBoard</Tabs>
                <Tabs to='/add'>Add New Team</Tabs>
                <Tabs to='/all'>EDIT TEAMS</Tabs>
                <Tabs to='/login'>Log Out</Tabs>
            </Toolbar>
        </Header>
    </div>
  )
}

export default Navbar;