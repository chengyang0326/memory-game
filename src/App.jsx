// Import npm packages
import React, { useState} from 'react';
import { Link } from 'react-router-dom';

// Import Material-UI components
import { AppBar, Toolbar, CssBaseline, Container, Grid, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import useStyles from './assets/styles/style';

// Material Icons
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

// Import assets
import logo from './assets/images/logo.png';
import backgroundImage from './assets/images/backgroundImage.jpg';
import BalaYokesh from './assets/images/balayokesh.jpg';
import defaultProfilePicture from './assets/images/defaultProfilePicture.png';

// Import custom components
import CardComponent from './Components/CardComponent.jsx';
import MemberCard from './Components/MemberCard.jsx';

const App = () => {
	const classes = useStyles();
    return (
        <div>
			<CssBaseline />
			<AppBar className={classes.NavBar}>
				<Toolbar>
					<img src={logo} className={classes.Logo} alt='mickey logo' />
				</Toolbar>
				<Typography variant='h3'>
					Mickey
				</Typography>
				<Button variant='contained' color='primary' style={{padding: '0 2% 0 2%'}}>
					<Link to='/game' style={{textDecoration: 'none', color: '#fff'}}>
						Play Game
					</Link>
				</Button>
			</AppBar>

			<main>
				<div className={classes.Div} style={{paddingTop: '27vh'}}>
					<Grid container spacing={4}>
						<CardComponent 	
							image='https://media.tenor.com/images/cd00080ba0fd57ad0bce235519c96962/tenor.gif'
							title='First star on Hollywood walk of fame'
							description='Mickey mouse is the first cartoon character who received a star on the Hollywood walk of fame'
						/>
						<CardComponent 
							image='https://media.tenor.com/images/9c3a07f1220085f8fe461f0a161a972f/tenor.gif'
							title='How tall is Mickey?'
							description='Mickeys estimated height is 2 feet and 3 inches.  And his estimated weight is 23 pounds'
						/>
						<CardComponent 
							image='https://media1.tenor.com/images/4390dff2b1976f1dad4da5b5ab2e474f/tenor.gif?itemid=15538485'
							title='Mickey and Minnie'
							description='Mickey and Minnie have never been married in any of their onscreen appearances'
						/>
					</Grid>					
				</div>

				<h1 style={{textAlign: 'center'}} onClick={ () => {window.location.href = '#section2'}} id='section2'>
					<ArrowDropDownCircleIcon style={{fontSize: '2em'}} size='large' />
				</h1>

				<div className={classes.Div} style={{background: `url(${backgroundImage})`, backgroundSize: 'cover', display: 'flex', justifyContent: 'left'}}>
					<Card className={classes.Section2}>
						<CardContent>
							<Typography variant='h2' >
								We implemented a fun game for you.  Give it a try
							</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' color='primary' size='large'>
								<Link to='/game' style={{textDecoration: 'none', color: '#fff'}}>
									Play game
								</Link>				
							</Button>
						</CardActions>
					</Card>
				</div>

				<div className={classes.Div} style={{background: `url(https://www.hdwallpaper.nu/wp-content/uploads/2017/03/mickey_mouse-13-768x480.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
					<Typography variant='h2' align='center' style={{marginTop: '5%', padding: '2%', background: 'white', borderRadius: '10px'}}> 
						All Our dreams can come true, If we have the courage to pursue them
					</Typography>
				</div>				

				<Container className={classes.Div}>
					<Typography variant='h2' gutterBottom>
						Our team - MickeyHacks
					</Typography>
					<Grid container spacing={4}>
						<MemberCard 
							name='Monesh Goyal'
							github='https://github.com/2201monesh'
							linkedin='https://www.linkedin.com/in/monesh-goyal-2b1325200/'
							image={defaultProfilePicture}
						/>
						<MemberCard 
							name='Bala Yokesh Mani'
							github='https://github.com/balayokesh'
							linkedin='https://linkedin.com/in/balayokeshmani'
							image={BalaYokesh}
						/>
						<MemberCard 
							name='Cheng Yang'
							github='https://github.com/ChengYang03'
							linkedin='https://www.linkedin.com/in/cheng-yang-0470151a8/'
							image={defaultProfilePicture}
						/>
					</Grid>
				</Container>
			</main>

			<footer style={{textAlign: 'center', background: 'black'}}>
				<Typography variant='subtitle1' style={{color: 'white', padding: '1%'}}>
					Made with ❤️ by team Mickey Hacks
				</Typography>
			</footer>
        </div>
    );
}

export default App;
