import { AppBar, Toolbar, Typography } from '@mui/material/'
import YardIcon from '@mui/icons-material/Yard';
import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    return (

        <AppBar position = "sticky">
    

            <Toolbar>
                <Typography onClick={() => navigate("/")} > Agrilution</Typography>
                <YardIcon />
            </Toolbar>


               
       </AppBar>

        );
        


};

export default Header;