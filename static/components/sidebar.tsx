import { Box } from '@mui/material';
import { bgcolor } from '@mui/system';
import React from 'react';


function Sidebar():any {
    return (
        <Box bgcolor="pink" position='static'
        flex={1}
        p={2}
        sx={{display: {xs:'none', sm:'block'}}}
        > 
          Sidebar 
        </Box>
    );
};
export default Sidebar;