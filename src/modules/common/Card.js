import { Grid } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { formatDate } from "./Utils";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: "33.875rem",
      height: "25rem",
    },
    card: {
      borderRadius: "1rem",
      border: "0.1rem solid #D9D9D9",
      height: "100%",
      width: "100%",
    },
    title: {
      color: "#4E4E4F",
      fontSize: "1.5rem",
      fontWeight: 500,
      paddingLeft: "1.5rem",
    },
    date: {
      color: "#4A4A4A",
      fontSize: "0.875rem",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      paddingLeft: "1.5rem",
    },
    image: {
      width: "100%",
      height: "80%",
      borderTopLeftRadius: "1rem",
      borderTopRightRadius: "1rem",
    },
    calender: { color: "#3481E8" },
  })
);

function Card(props) {
  const { event, handleClick } = props;
  const classes = useStyles();
  return (
    <Grid
      item
      sm={6}
      className={classes.container}
      onClick={() => handleClick(event)}
    >
      <div className={classes.card}>
        <img
          src={`http://localhost:1337${event?.images?.data?.[0]?.attributes?.url}`}
          className={classes.image}
        />
        <div className={classes.title}>{event.title}</div>
        <div className={classes.date}>
          <CalendarTodayIcon className={classes.calender} />
          {formatDate(event.eventDate)}
        </div>
      </div>
    </Grid>
  );
}

export default Card;
