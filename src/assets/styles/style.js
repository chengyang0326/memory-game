import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles ((theme) => ({
    Logo: {
        width: '65px',
        marginRight: '2%',
    },
    NavBar: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#090b13',
        padding: '2%',
        minHeight: '14vh',
    },
    Div: {
        minHeight: '88vh',
        padding: '2%',
    },
    Image: {
        height: '300px',
        width: '100%',
        backgroundColor: '#fff',
    },
    Section2: {
        minWidth: '50%',
        maxWidth: '500px',
        margin: '4%',
        padding: '3%',
        alignSelf: 'center'
    },
    modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
        margin: '5%',
        textAlign: 'center',
        padding: '2%',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export default useStyles;