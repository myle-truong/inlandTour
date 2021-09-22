import React from 'react';

//Import Layout
import { CssBaseline, Grid } from '@material-ui/core';

//Import components
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
   return (
      <CssBaseline>
         <Header />
         <Grid container spacing={3} style={{ width: '100%' }}>
            <Grid item={12} md={4}>
               <List />
            </Grid>
            <Grid item={12} md={4}>
               <Map />
            </Grid>
         </Grid>
      </CssBaseline>
   );
};

export default App;
