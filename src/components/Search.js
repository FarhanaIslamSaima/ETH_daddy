import React from 'react';
import {Box,makeStyles,Typography} from '@material-ui/core'
import SearchBar from './SearchBar';
const useStyle=makeStyles({
  container:{
    marginTop:'60px',
    height:'350px',
    backgroundColor:'grey',
    display:'flex',
    width:'100%'

  },
  leftContainer:{
    width:'60%',
    display:'flex',
    flexDirection:'column',
    marginTop:'20px',
    padding:'40px'
    

  },
  header:{
    fontSize:'13px'
  }

})
 
const Search = () => {
  const classes=useStyle()
  return (
    <Box className={classes.container}>
      <Box className={classes.leftContainer}>
        <Typography variant={'h6'} className={classes.header}>SEEK AND BUY AVAILABLE DOMAIN NAMES</Typography>
      <Typography variant={'h4'} style={{fontWeight:'bold'}}>It all begin with a<br/> domain name</Typography>
      <SearchBar/>
      </Box>
      <Box className={classes.rightContainer}>

      </Box>
      
    </Box>
  );
};

export default Search;





