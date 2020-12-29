import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#278882",
    padding: "4rem 8rem",
    color: "white",
  },
  navLink: {
    fontSize: "1rem",
    textDecoration: "none",
    color: theme.palette.secondary.contrastText,
    transition: "all .5s",
    "&:hover, &:active": {
      color: theme.palette.secondary.main
    },
  },
  contactBox:{
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-around",
  },
  icon:{
    width: "32px",
    height:"32px",
  },
  contactTextContainer:{
    marginLeft:"1rem",
    padding:".5rem"
  },
  copyrightBox:{
      marginTop: theme.spacing(2),
      borderTop: "3px solid white",
      padding: "1rem",
  }
}));

export default useStyles;
