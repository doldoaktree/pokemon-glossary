import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from './customized-selects';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function PrimarySearchAppBar() {
  
  return (
    <Box sx={{ flexGrow: 1, 
               alignItems: 'center'}}>
      <AppBar>
        <Toolbar sx={{ display:'flex', justifyContent:'center'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Filter by
          </Typography>
          <Dropdown props={"flamethrower"}/>
          <Stack spacing={2} direction="row">
            <Button 
              variant="contained"
              color='secondary' 
              onClick={() => {
                alert('I am clicked');
              }}
              >
                Click me!
            </Button>
          </Stack>
         </Toolbar>
        </AppBar>
    </Box>
  );
}
