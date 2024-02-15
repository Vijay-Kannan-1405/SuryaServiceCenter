import React from 'react';
import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Tooltip,
  Avatar,
} from '@mui/material';
import './style.scss';


export default function AppBar() {

  return (
      <AppBar position="static" className="appbar">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="toolbar">
            <Box>
              <Tooltip title="LOGO">
                <Avatar alt="S" src='https://stackblitz-user-content.s3.us-west-2.amazonaws.com/ma4ywczbda0gff68thywi8g8jype?response-content-disposition=inline%3B%20filename%3D%22WhatsApp%20Image%202024-02-12%20at%203.31.26%20PM.jpeg%22%3B%20filename%2A%3DUTF-8%27%27WhatsApp%2520Image%25202024-02-12%2520at%25203.31.26%2520PM.jpeg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATEWXQORMGK5LKFZF%2F20240212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240212T112300Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCID%2FkVJ9%2B2CLbHAq4Nayz7eW%2Be4D1bbv6cPalACC535baAiEAqf5zZPWgqLksHkP5Tl7NHfuq%2B59ww2zVeV%2Bw1zZv%2FwwqsgUIWBAGGgwyMTYyNzQwNzI2NjQiDJTWLbk8ERydL%2BlKDSqPBR2kXXm3%2FhsqMU8zZl14Ml3Vj%2BqibAcK3wYPWprPnxexHeIjMrKQ68T%2Bt2KcJAIT14uq0YWHni4Zu1BugPzFFygDW89hCRR7uMcZgaqOFyX1ruH22Xo6Ly9NgUWo5mCNCTU1YM1lIlQ%2BXEwcMAM9JQGtDShw3BsffE1h7LHvWGYZZPVwHkFm7t%2FHjYHmrpHg2KRtCnLr%2Bfj9WWeQBZnajNJ5dmkywWnP%2Be0g8kDDOgF5OTKhN5I9oQioj0Mxr2YQ5%2Btb0PZjBnRFZtkzTWioUSLccY1nxQZeomm%2FnjcfPPms2MggdJjcOlCCDxbO6iL%2FW3E%2B7JviOp9Qy%2Fy3BrNrLmPI%2F46HtjaaFrkxoF8xVkTOf6kvt6Yjq73EI5mG3ZSuOcWh97Hpb6DuL3cQVs355C52ojq%2FcaBPXV4QNwz1cVTH3w3fSg3JlnmpTiO0Nu%2F9Wg0i2g2LHfE7lGA8%2FRY1Ghv1kqswvkg4nDtCoa688fJNJqgI2yDJ%2FttgSFX6wGEJjou50ia%2BT2pY%2BEEy1C90Zfawhe4NP3HuLgPEdw3pikus9etN0sTPR5VPZEUNi1UrjAWK%2FVJx4WOhU8ctzA54Lj5Qa%2Ftt9ebCk8KIPRj0pg%2B6ju4rDWM%2F8mL8SpBcWq%2BZkHXiaKycIf50PRRJsGXwVnfQi6G%2Fxg84VCQe%2B3bFrWGONYseE4CCEGVbO%2BbnnKanAAtECNuqYtddit2LVJENFy17Urk1M82MidERGpJ8DufEc6OiORdgg8kyh6Rn%2BQw5BzKf0sAp%2B%2FNRwhnUc22J4OB%2Fkz0RA7CVPMet7TsLQVSm2dp9xh%2BXrHiiSreVRNHnKZlGvKsrpqJLAoeH1s9VcZrek6W1bZ8pixbREsURNNMwsYanrgY6sQEax3iOyguPg%2B0GgRSvpijsG4XU11XG4boFQnjKTO0eiafY30dhiaieRRJPsCFY37oc80TvC%2Bn%2F3%2BH5PF8FbRFzg%2FEPej%2B4RT920KtscNLtyM62pMVMc9mr8x8pKFUnBx8M5Jtd7%2Be3961jetzOxCKpNUmjJwjm2KCMuYFAE563y%2FlmX7%2FXvIZ%2FABFV3Ia6YSWeNUNBwOzWsa0AuCbYGkiR8FwaHC7vmrNdyv9b%2Fdk4f4I%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=c18793384fba484e8ec2aa3d2e47a95179a4b2000d1c231b16a798e6dfe070ec' />
              </Tooltip>
            </Box>
            <Typography
              noWrap
              className='logotext'
            >
              SURYA SERVICE CENTER AND WASH
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  );
}
