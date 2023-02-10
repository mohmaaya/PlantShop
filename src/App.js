import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Header from "./Header";
import Content from "./Content";
import PlantDetails from "./PlantDetails";
import { Route, Routes } from "react-router-dom"



const App = () => {
    

    return (
        
        <Grid container direction="column">
            <Grid item>

                    <Header />
                    <br></br>
            </Grid>


            <Grid item container>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8}>
                <Routes>
                      <Route exact path="/" element={<Content />} />
                      <Route exact path="/plantDetails" element={ <PlantDetails />} />
                </Routes>
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>

        </Grid>
        
        );


};

export default App;