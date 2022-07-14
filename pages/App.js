import * as React from 'react';
import { createTheme, makeStyles } from '@mui/material';
import Typography from '@mui/material';
import { fontSize } from '@mui/system';
import { isClassExpression } from 'typescript';

const theme = createTheme ({
    typography: {
       fontSize: 5,
    },
});

export default function App() {
    const classes = theme();
    return(
        <Typography
            className={classes.typography}
            variant='body2'
        >
            
        </Typography>
    );
}

