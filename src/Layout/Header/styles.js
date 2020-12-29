import {makeStyles} from  '@material-ui/core';
import headerBackground from '../../Images/headerBackground.jpg';

const useStyles = makeStyles((theme) => ({
    header:{
        width:"100vw",
        height:"80vh",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        background: `url(${headerBackground})`,
        display:"flex",
        alignItems:"center"
    },
    headingContainer:{
        width: "50%",
    }
}));

export default useStyles;