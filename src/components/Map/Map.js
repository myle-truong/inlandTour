import React from 'react';
import GoogleMapReact from 'google-map-react';

//Import layout
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = () => {
   const classes = useStyles();
   const isMobile = useMediaQuery('(min-width: 600px)');

   const coordinates = { lat: 0, lng: 0 };
   return (
      <div className={classes.mapContainer}>
         <GoogleMapReact
            bootstrapURLKeys={{
               key: 'AIzaSyCcc_33FO3TG352KF0oaGibsIAFe8aCEcM',
            }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={20}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={''}
            onChildClick={''}
         ></GoogleMapReact>
      </div>
   );
};

export default Map;
