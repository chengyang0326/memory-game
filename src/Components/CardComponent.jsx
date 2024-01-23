// Import npm packages
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

// Import Material-UI components
import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography, Container } from '@material-ui/core';

// Import assets
import useStyles from '../assets/styles/style';

const CardComponent = (props) => {
    const classes = useStyles();
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                {/* Front side of card */}
                <Card>
                    <CardMedia 
                        className={classes.Image}
                        image={props.image}
                    />
                    <CardContent>
                        <Typography variant='subtitle1'>
                            {props.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' color='primary' onClick={handleClick} >
                            Know more
                        </Button>
                    </CardActions>
                </Card>

                {/* Back side of card */}
                <Card>
                    <CardContent style={{height: '300px', marginTop: '15%'}}>
                        <Typography variant='h4' color='textSecondary'>
                            {props.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' color='primary' onClick={handleClick}>
                            See Image
                        </Button>
                    </CardActions>
                </Card>
            </ReactCardFlip>
        </Grid>
    );
}

export default CardComponent;