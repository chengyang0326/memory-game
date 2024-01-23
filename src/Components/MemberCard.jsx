// Import npm packages
import React from 'react';

// Import Material UI components
import { Card, CardContent, CardMedia, CardActions, Button, Typography, Grid } from '@material-ui/core';
import useStyles from '../assets/styles/style';

// Import material UI icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const MemberCard = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardMedia>
                    <img src={props.image} className={classes.Image} />
                </CardMedia>
                <CardContent>
                    {props.name}
                </CardContent>
                <CardActions style={{display: 'flex', justifyContent: 'center'}}>
                    <a href={props.github} target='_blank'>
                        <GitHubIcon />
                    </a>
                    <a href={props.linkedin} target='_blank'>
                        <LinkedInIcon />
                    </a>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default MemberCard;