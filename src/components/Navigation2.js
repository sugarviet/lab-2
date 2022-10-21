import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { NavItem, Navbar, Icon} from "react-materialize";
import { Link } from "react-router-dom";

import { ThemeContext } from './ThemeContext';
import {useContext, useEffect} from 'react'

const pages1 = [
  {
  id: 1,
  name:"News",
  linkTo: '/news'
  }, 
  {
  id:2,
  name: "About us",
  linkTo: '/about'
  },
  {
  id:3,
  name: "Contact",
  linkTo: '/contact'
}
];

const pages = ['News', 'About', 'Contact'];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navigation2 = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const {theme, toggle, light} = useContext(ThemeContext);

     useEffect(() => {
        props.getToggle(theme);
        console.log(theme); 
    })

  return (

    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

            <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/V_%28logo_2010%29.svg/1024px-V_%28logo_2010%29.svg.png"/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages1.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages1.map((page) => (
              <Link style={{textDecoration: 'none'}} to={page.linkTo}>
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >         
                {page.name}
              </Button>
                </Link>
            ))}
          </Box>

          {/* <i className="fa-solid fa-lightbulb" style={{fontSize: '30px', marginRight: '20px', color: 'white'}}></i> */}
          <i className="fa-solid fa-lightbulb" onClick={toggle} style={{color:theme.color, cursor: 'pointer', fontSize: '30px', marginRight: '20px'}}></i>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://images.livemint.com/img/2022/08/01/1600x900/Cat-andriyko-podilnyk-RCfi7vgJjUY-unsplash_1659328989095_1659328998370_1659328998370.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  //   <Navbar className="navbar-header"
  //   alignLinks="right"
  //   brand={<a className="brand-logo" href="#">Logo</a>}
  //   id="mobile-nav"
  //   menuIcon={<Icon>menu</Icon>}
  //   options={{
  //     draggable: true,
  //     edge: 'left',
  //     inDuration: 250,
  //     onCloseEnd: null,
  //     onCloseStart: null,
  //     onOpenEnd: null,
  //     onOpenStart: null,
  //     outDuration: 200,
  //     preventScrolling: true
  //   }}
  // >
  //   <NavItem href="">
  //     Getting started
  //   </NavItem>
  //   <NavItem href="components.html">
  //     Components
  //   </NavItem>
  // </Navbar>
  );
};
export default Navigation2;
