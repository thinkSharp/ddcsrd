import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon } from '@material-ui/core'
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons'
import logo from '../logi.png'

// css styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background : '#511',
        height : '100%'
    },
    avatar: {
        display: 'block',
        margin: '05rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'tan'
    }
}))

const menuItems =[
    {
        listIcon: <Home />,
        listText: 'Home'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'ContactUs'
    }
]

const Navbar = () => {
    const classes = useStyles();

    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    };

    const slidelist = slider => (
        <Box className={classes.menuSliderContainer} component='div' onClick={toggleSlider('right', false)}>
        <Avatar className={classes.avatar} src={logo} alt='Vishal Bajoria'/>
        <Divider />
        <List>
            {
                menuItems.map((istItem, key) =>(
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem}>{istItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={istItem.listText}>{istItem.listText}</ListItemText>
                    </ListItem>
                ))
            }
            
        </List>
    </Box>
    )
    return (
        <>

        <Box component='nav'>
            <AppBar position='static' style={{background: '#222'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}> 
                    <ArrowBack style={{color:"tomato"}}></ArrowBack>
                    </IconButton>
                    <Typography variant='h5' style={{color:'tan'}}>Registration</Typography>
                    <MobileRightMenuSlider anchor='left' open={state.right} onClose={toggleSlider("right", false)}>
                        {slidelist('right')}
                        </MobileRightMenuSlider> 

                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
