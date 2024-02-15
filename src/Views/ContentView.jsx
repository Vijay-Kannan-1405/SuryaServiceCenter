import React, { useState } from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import AppBar from './AppBar.jsx';
import './style.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Language from './Language.jsx';
import InfoText from '../Views/InfoText.jsx';

export default function ContentView() {
  const [language, setLanguage] = useState('tamil');

  return (
    <Box className="maincont" id="id">
      <AppBar />
      <Divider style={{ border: '2px solid #fff' }} />
      <Language language={language} setLanguage={setLanguage} />
      <Divider style={{ border: '2px solid #fff' }} />
      <InfoText language={language} />
      <Box
        component={IconButton}
        href="https://www.linkedin.com/in/vijaykannan1405/"
        target='_blank'
        sx={{ position: 'fixed', bottom: '16px', right: '20px' }}
      >
        <LinkedInIcon sx={{ color: '#205ba1' }} />
      </Box>
      <Box
        component={IconButton}
        href=""
        target='_blank'
        sx={{ position: 'fixed', bottom: '16px', right: '60px' }}
      >
        <GitHubIcon sx={{ color: '#fffff090' }} />
      </Box>
    </Box>
  );
}
