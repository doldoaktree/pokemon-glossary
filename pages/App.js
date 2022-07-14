import * as React from 'react';
import { makeStyles } from '@mui/material';
import Typography from '@mui/material';
import { fontSize } from '@mui/system';
import { isClassExpression } from 'typescript';

const useStyles = makeStyles({
    Typography: {
       fontSize: 12,
    }
});

export default function App() {
    const classes = useStyles();
    return(
        <Typography
        className={classes.typographyJenSize}
        variant='body2'
        >

        </Typography>
    );
}

