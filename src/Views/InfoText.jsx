import React from 'react';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import './style.scss';

export default function InfoText({ language }) {
  return (
    <Box className="infoshow">
      {language === 'tamil' && (
        <Typography className="infotext">
          அதிகாலை 4 மணி அளவில் உங்கள் காரை தண்ணீர் இல்லாமல் சுத்தம் செய்து
          தருவோம். மாதம் இருமுறை வாட்டர் வாஷ் மற்றும் கார் சர்வீஸ் செக்கப்
          செய்து தரப்படும். மாதக் கட்டணம் 1200 ரூபாயில் இவை அனைத்தும் செய்து
          தரப்படும். சிறந்த முறையில் மைக்ரோ கிளாத் மூலம் முறையில் சுத்தம் செய்து
          தரப்படும். இப்படிக்கு தொடர்பு கொள்ள வேண்டிய எண்.
        </Typography>
      )}
      {language === 'english' && (
        <Typography className="infotext">
          We will clean your car without water at 4 am. Water wash and car
          service checkup will be done twice a month. All this will be done for
          a monthly fee of 1200 rupees. The best method is to clean it with a
          micro cloth. <br />
          Contact Number.
        </Typography>
      )}
      <Stack gap="8px">
        {' '}
        <Typography
          className="mobilenum"
          component={Link}
          href="tel:9600311621"
        >
          9600311621
        </Typography>
        <Button
          variant="contained"
          className="mobilenumbutton"
          href="tel:9600311621"
        >
          Contact
        </Button>
      </Stack>
    </Box>
  );
}
