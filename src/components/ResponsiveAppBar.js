import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      {/* <Typography variant="h6" sx={{ my: 2, fontWeight: 300, lineHeight: 1.2, textAlign: 'center' }} className='drawerTitle'>
        <a href="/" className='navTitleLinkblack'>Notariat Kreußlein</a>
      </Typography> */}
      <Divider />
            {/* <NavLink to="/#leistungen" className='navItemDrawer'>Leistungen</NavLink>
            <NavLink to="/#kontakt" className='navItemDrawer'>Kontakt</NavLink> */}
            <HashLink className='navItemDrawer' smooth to="/#leistungen">Tätigkeitsfelder</HashLink>        
            <HashLink className='navItemDrawer' smooth to="/#notare">Notar</HashLink>        
            <HashLink className='navItemDrawer' smooth to="/karriere#">Karriere</HashLink>        
            <HashLink className='navItemDrawer' smooth to="/#kontakt">Kontakt</HashLink>       
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className='navbar'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" className='drawerTitle' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} >
          <a href='/'> <img src="logo2-small.png" className='brandLogo' /> </a>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="navLinksBox">       
            {/* <NavLink to="/#leistungen">Leistungen</NavLink>
            <NavLink to="/#kontakt">Kontakt</NavLink> */}
            <HashLink smooth to="/#leistungen">Tätigkeitsfelder</HashLink>        
            <HashLink smooth to="/#notare">Notar</HashLink>    
            <HashLink smooth to="/karriere#">Karriere</HashLink>       
            <HashLink smooth to="/#kontakt">Kontakt</HashLink>
          </Box>
          {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ColorButton variant="contained" size="small" className='navbarButton'>Online Terminvereinbarung</ColorButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
        anchor={'right'}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}

export default DrawerAppBar;