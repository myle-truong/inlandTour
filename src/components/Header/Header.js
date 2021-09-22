import React from 'react';

//Import layout
import { AppBar, Typography, InputBase, Box, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

//Import Map from google map
import { Autocomplete } from '@react-google-maps/api';

import useStyles from './styles';

const Header = () => {
   const classes = useStyles();
   return (
      <div>
         <AppBar position="static">
            <Toolbar className="classes.toolbar">
               <Typography variant="h6">InlandTour </Typography>
               <Box display="flex">
                  <Typography variant="h6"></Typography>
                  {/* <Autocomplete> */}
                  <div className={classes.search}>
                     <div className={classes.searchIcon}>
                        <SearchIcon />
                     </div>
                     <InputBase
                        placeholder="Search new places"
                        classes={{
                           root: classes.inputRoot,
                           input: classes.inputInput,
                        }}
                     />
                  </div>
                  {/* </Autocomplete> */}
               </Box>
            </Toolbar>
         </AppBar>
      </div>
   );
};

export default Header;
