import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
    banner:{
        backgroundImage: "url(./banner3.jpg)",
        objectFit:'cover',
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:'column',
        paddingTop:25,
        justifyContent:'space-around',

    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
      
}))

const Banner = () => {

    const classes = useStyles();
  return (
    <div className={classes.banner}>
       <Container className={classes.bannerContent}>
       <div className={classes.tagline}>
        <Typography variant='h1' style={{fontWeight:"bold",marginBottom:15,fontFamily:"Times",color:"white"}}>Crypto Verse</Typography>
        <Typography variant='h5' style={{color: "#EFF54D" ,textTransform:"capitalize" ,fontFamily:"Time"}}>Get All The Information Regarding Your Crypto Currencies</Typography>
       </div>
         <Carousel/>
       </Container>
    </div>
  )
}

export default Banner