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
function LoginNav() {
  return (
    <div>
        <Header position='static' >
            <Toolbar>
                <Tabs to='/'>PIM</Tabs>
                <Tabs to='/login'>Login</Tabs>
                <Tabs to='/register'>Register</Tabs>
            </Toolbar>
        </Header>
    </div>
  )
}

export default LoginNav;