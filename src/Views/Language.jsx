import React from 'react';
import {
  Typography,
  Switch,
  Stack,
  styled,
  Button,
} from '@mui/material';
import AppBar from './AppBar.jsx'
import './style.scss';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#fff',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export default function Language({language, setLanguage}) {

  const handleChange = (event) => {
    setLanguage(event.target.checked ? 'tamil' : 'english');
  };

  return (
      <Stack direction='row' gap='4px' alignItems='center' p='16px' justifyContent='center' className='langcont'>
        <Typography className='langtext' component={Button} onClick={() => setLanguage('english')}>{language === 'tamil' ? 'ஆங்கிலம்' : 'English'}</Typography>
        <MaterialUISwitch checked={language === 'tamil'} onChange={handleChange}/>
        <Typography className='langtext' component={Button} onClick={() => setLanguage('tamil')}>{language === 'tamil' ? 'தமிழ்' : 'Tamil'}</Typography>
      </Stack>
  );
}
