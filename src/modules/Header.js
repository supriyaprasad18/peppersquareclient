import { makeStyles, createStyles } from "@mui/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconConstant } from "./common/IconConstant";

const useStyles = makeStyles((theme) =>
  createStyles({
    box: {
      display: "flex",
      height: "123px",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    typography: { fontSize: "1.5rem" },
    donate: {
      borderRadius: "4px",
      backgroundColor: "#F54E39",
      color: "#FFFFFF",
      border: "none",
      display: "flex",
      gap: "0.5rem",
      padding: "0.25rem 1rem",
    },
    csr: {
      color: "#F54E39",
      border: "1.4px solid #F54E39",
      borderRadius: "4px",
      backgroundColor: "#FFFFFF",
    },
  })
);

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <img src={IconConstant.logo} />
      <div className={classes.typography}>The School</div>
      <div className={classes.typography}>Academics</div>
      <div className={classes.typography}>Life@DBTR</div>
      <div className={classes.typography}>Contact Us</div>
      <button className={classes.typography + " " + classes.csr}>CSR</button>
      <button className={classes.typography + " " + classes.donate}>
        Donate
        <FavoriteIcon />
      </button>
    </div>
  );
}

export default Header;
