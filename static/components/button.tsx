import * as React from 'react';
import Button from '@mui/material/Button';

type Props = {
  onClick: () => void; 
}

export default function MyButton(props: Props) {
  const {onClick} = props;
  return <Button onClick={() => onClick()}>Click me</Button>
}
