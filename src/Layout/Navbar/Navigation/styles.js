import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navLink: {
    fontSize: "1.2rem",
    textDecoration: "none",
    color: theme.palette.secondary.contrastText,
    transition: "all .9s",
    padding: "1rem 2rem",
    "&:hover, &:active": {
      color: theme.palette.secondary.contrastText,
      backgroundColor: "#43AEA2",
    },
  },
}));

export default useStyles;
