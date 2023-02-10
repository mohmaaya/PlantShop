import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardActionArea from "@mui/material/CardActionArea";
import {useNavigate} from "react-router-dom";

const PlantCard = (props) => {

    const { title, description, images, price } = props;
    const navigate = useNavigate();
    return (
        
        <Card sx={{ minWidth: 275,  height: '100%' }}>
            <CardActionArea onClick={() => navigate("/plantDetails", {

                state: {
                    props: props
                }

            })}>
            <CardHeader
                
                title={title}
                subheader={ "$" + price}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
            />

            <CardMedia
                component="img"
                image={images[0]}
            />

            <CardContent>
               
                <Typography variant="body2"

                    sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "4",
                        WebkitBoxOrient: "vertical",
                    }}>

                    {description}
                 
                </Typography>
            </CardContent>
            <CardActions>
              
                </CardActions>
            </CardActionArea>
        </Card>
        
        );




};

export default PlantCard;