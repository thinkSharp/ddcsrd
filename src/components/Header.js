import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import logo from '../logi.png';

// css styles
const useStyles = makeStyles(
    theme => ({
        avatar: {
            width: theme.spacing(15),
            height: theme.spacing(15),
            margin: theme.spacing(1)
        },
        title: {
            color: 'tomato'
        },
        subTitle: {
            color: 'tan',
            marginBottom: '3rem'
        },
        typedContainer: {
            position: 'absolute',
            top:'50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', 
            width: '100vw',
            textAlign:'center',
            zIndex: 1
        }
    })
)
const Header = () => {
    const cssClasses = useStyles()
    return (
        <Box className={cssClasses.typedContainer}>
            <Grid container justify='center'> 
            <Avatar className={cssClasses.avatar} src={logo} alt='Vishal Bajoria' />
            </Grid>
            <Typography className={cssClasses.title}  variant='h4'>
                <Typed strings={['Registration', 'Web Development', 'Depository']} typeSpeed={40} backSpeed={60}>

                </Typed>
            </Typography>
            <Typography className={cssClasses.subTitle}  variant='h5'>
                <Typed strings={['Registration', 'Web Development', 'Depository']} typeSpeed={40} backSpeed={60} loop>

                </Typed>
            </Typography>
            <br />
        </Box>
    )
}

export default Header
