import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    footer: {
        textAlign: 'center',
        position: 'fixed',
        left: 0,
        bottom: 0,
        color: 'black',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '120px',
    },
    link: {
        textDecoration: 'none',
        color: 'rgba(21, 101, 192)',
    },
    container: {
        padding: '0 5%',
        width: '100%',
        margin: '0',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '45vh',
        borderRadius: 10,
        color: 'white',
        padding: 30
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    }
})