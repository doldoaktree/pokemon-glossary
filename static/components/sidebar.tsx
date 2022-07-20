import { Box } from '@mui/material';
import { bgcolor } from '@mui/system';
import React from 'react';


function Sidebar():any {
    return (
        <Box 
          bgcolor="pink"
          flex={1}
          p={2}
          sx={{display: 'flex', flexDirection:'column', }}
        > 
          Sidebar 
        </Box>
    );
};
export default Sidebar;