import * as React from 'react';
import styles from './testing.module.css';
import { Button } from '@mui/material';


export default function Testing() {

    const [name, setName] = React.useState('');
    const [show, setShow] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    return (
        <div className={styles.page}>
            <label>
                Type something:
                <input type="text" name="name" value={name} onChange={handleChange}/>
            </label>
            <Button variant="contained" onClick={() => setShow(!show)}>Show</Button>
            {show && <div>{name}</div>}
        </div>
    )
}

    