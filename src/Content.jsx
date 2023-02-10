import React, { useEffect, useState } from 'react';
import PlantCard from './PlantCard';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios';


const Content = () => {

	const [plants, setPlants] = useState();
	

	const getPlants = async () => {


		axios.get('https://dev.api.agrilution.com/plantData.json').then((res) => {
			const responsePlants = res.data;

			setPlants(responsePlants);
		});

	};

	useEffect(() => {
		getPlants();
	}, []);

	
	
	//console.log(plants);


	const getPlantCard = (plantObj) => {
		return (
			<Grid item xs={12} sm={4} key={plantObj.title}>
				<PlantCard {...plantObj} />
			</Grid>
		);

	};



	return (

		<Grid container spacing={2}>
			{plants && Object.values(plants).map(plantObj => getPlantCard(plantObj))}
		</Grid>



	);


};

export default Content;