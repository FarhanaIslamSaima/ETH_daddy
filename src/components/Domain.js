import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { Card,makeStyles,Typography ,Button} from '@material-ui/core';
const useStyle=makeStyles({
  container:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'500px',
    margin:'0 auto',
    '&>*':{
      margin:'10px'
    }

  }
})

const Domain = ({ domain, ethDaddy, provider, id }) => {
  const classes=useStyle()
console.log(domain.name)
  return (
    <Card className={classes.container}>
      <Typography>{domain.name}</Typography>
      <Typography>{ethers.utils.formatUnits(domain.cost.toString(),'ether')}</Typography>
      <Button variant={'contained'} color={'primary'} style={{background:'black',borderRadius:'none'}}>Buy</Button>


    </Card>
  );
}

export default Domain;