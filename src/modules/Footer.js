import { Divider, Grid, Typography, Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconConstant } from "./common/IconConstant";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: { padding: "5rem 10rem", background: "#F5F5F5" },
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
    schoolTypography: { fontSize: "1.125rem", fontWeight: 500 },
    subTitle: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#232C95",
      lineHeight: "176.88%",
    },
    underLine: { textDecorationLine: "underline" },
    donation: {
      display: "flex",
      flexDirection: "column !important",
      justifyContent: "center",
    },
  })
);

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <img src={IconConstant.logo} />
            <div>
              <div className={classes.schoolTypography}>
                DBTR National Higher Secondary School
              </div>
              <Typography lineHeight="2rem" className={classes.subTitle}>
                Virtuousness is Life
              </Typography>
              <Typography fontSize="0.875rem" fontWeight={300} color="#404040">
                Established in 1901, DBTR is situated in the temple town of
                Mayiladuthurai.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item md={2}>
          <Typography fontWeight={500} lineHeight="2rem">
            QUICK LINKS
          </Typography>
          <Typography lineHeight="2rem">Admissions</Typography>
          <Typography lineHeight="2rem">Alumni association</Typography>
          <Typography lineHeight="2rem">Donate</Typography>
          <Typography lineHeight="2rem">Events</Typography>
        </Grid>
        <Grid item md={4}>
          <Typography fontWeight={500} lineHeight="2rem">
            Contact
          </Typography>
          <Typography>
            DBTR NHSS, Mahadhana Street, Kamarajar Salai, Mayiladuthurai,
            Tamilnadu – 609001
          </Typography>
          <Typography marginTop="1rem">+91.436.422.3272</Typography>
          <Typography className={classes.underLine}>
            contact@nationalhighschool.in
          </Typography>
        </Grid>
        <Grid item md={2} className={classes.donation}>
          <Typography fontSize="1.25rem" fontWeight={500}>
            Big or small, you can make an impact.
          </Typography>
          <button className={classes.typography + " " + classes.donate}>
            Donate
            <FavoriteIcon />
          </button>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={300} color="#4A4A4A">
          © DBTR 2023, All Rights Reserved | Sitemap
        </Typography>
        <Box color="#4A4A4A">
          <TwitterIcon />
          &nbsp;
          <InstagramIcon />
          &nbsp;
          <FacebookIcon />
          &nbsp;
          <YouTubeIcon />
          &nbsp;
          <LinkedInIcon />
        </Box>
      </Box>

      <Typography fontWeight={300} color="#4A4A4A" display="flex">
        Designed by &nbsp;
        <img src={IconConstant.pepper} />
      </Typography>
    </div>
  );
}

export default Footer;
