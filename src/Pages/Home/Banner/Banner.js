import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Typography, Container } from '@mui/material';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '400px'
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} style={{...verticalCenter, textAlign:'left'}}>
                    <Box>
                        <Typography variant="h3">
                            Your new smile <br/> starts here
                        </Typography>
                        <Typography sx={{fontSize: 14, color: 'gray', fontWeight: 300}}>
                            Long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                        </Typography>
                        <Button variant="contained">Text</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} style={verticalCenter}>
                    <img src={chair} alt="" style={{width: '350px'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;