import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useLocation } from "react-router-dom";
import Carousel from 'react-material-ui-carousel';
import Grid from '@mui/material/Unstable_Grid2';
import Slider from '@mui/material/Slider';




const PlantDetails = () => {

    const location = useLocation();
    const title = location.state.props.title;
    const description = location.state.props.description;
    const price = location.state.props.price;
    const images = location.state.props.images;
    const blueColor = location.state.props.light_settings.blue;
    const farredColor = location.state.props.light_settings.farred;
    const redColor = location.state.props.light_settings.red;
    const whiteColor = location.state.props.light_settings.white;

    const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    return (
        

       
        <Card sx={{height: '100%'}}>
          
            <CardHeader
                
                title={title}
                subheader={ "$" + price}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
            />

            <CardMedia>
                    <Carousel>
                        {
                            images.map((image, i) => <img src={image} />)
                        }
                    </Carousel>
                
            </CardMedia>

            <CardContent>
               
                <Typography variant="body2">

                    {description}
                 
                </Typography>
            </CardContent>
                <CardActions>
                    <Typography sx={{ color: 'blue' }}>
                        blue: Ensures healthy roots, strong stems, and healthy - bigger- leafs.
                    </Typography>
                <Slider min={blueColor[0]} max={blueColor[1]} size='small' value={value} onChange={handleChange} />

                    <Typography >
                        white: Minor impact on plant growth or health. Effects production of essential oil and thus taste of the greens(plants).
                    </Typography>
                <Slider min={whiteColor[0]} max={whiteColor[1]} size='small' value={value} onChange={handleChange}/>

                    <Typography sx={{ color: 'red' }}>
                        red: Essential for flowering or very weak stage in plants.
                    </Typography>
                <Slider min={redColor[0]} max={redColor[1]} size='small' value={value} onChange={handleChange}/>

                    <Typography sx={{ color: '#8B0000' }}>
                        far-red: Impacts the height grow of the plant. Plant is potentially getting bigger with weaker stems when far-red value is higher.
                    </Typography>
                <Slider min={farredColor[0]} max={farredColor[1]} size='small' value={value} onChange={handleChange}/>
            </CardActions>
            </Card>
        

        );
   

};

    export default PlantDetails;