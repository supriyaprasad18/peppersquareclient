import { Dialog, DialogTitle, Grid, Typography, Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import Card from "./common/Card";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { formatDate } from "./common/Utils";
import { IconConstant } from "./common/IconConstant";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      color: "#FFF",
      textAlign: "center",
      fontSize: "5.125rem",
      fontWeight: 700,
    },
    subTitle: {
      color: "#FFF",
      textAlign: "center",
      fontSize: "1.75rem",
    },
    container: {
      padding: "4.5rem 10rem",
    },
    types: { display: "flex", gap: "1rem", flexWrap: "wrap" },
    type: {
      borderRadius: "1.875rem",
      border: "1px solid #D0D0D0",
      background: "#F4F4F4",
      padding: "0.75rem 1.25rem",
      cursor: "pointer",
    },
    selected: { backgroundColor: "#3481E8", color: "#FFF" },
    button: {
      color: "#F54E39",
      border: "1.4px solid #F54E39",
      borderRadius: "4px",
      backgroundColor: "#FFFFFF",
      fontSize: "1.25rem",
    },
    viewMore: { display: "flex", justifyContent: "center" },
    gallery: {
      backgroundImage: `url(${IconConstant.galleryBackground})`,
      height: "28rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

function Events() {
  const classes = useStyles();
  const [types, setTypes] = useState(["All"]);
  const [selectedType, setSelectedType] = useState("All");
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [limit, setLimit] = useState(6);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEventTypes = async () => {
    if (types.length > 1) return;
    const result = await fetch("http://localhost:1337/api/event-types");
    const data = await result.json();
    const arr = data?.data?.map((item) => item?.attributes?.label);
    setTypes([...types, ...arr]);
  };

  const fetchEvents = async () => {
    const result = await fetch("http://localhost:1337/api/events?populate=*");
    const data = await result.json();
    const arr = data?.data?.map((item) => item?.attributes);
    setEvents([...arr]);
    setFilteredEvents([...arr]);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchEventTypes();
    fetchEvents();
  }, []);

  useEffect(() => {
    setFilteredEvents(
      events
        .filter((event) => {
          if (selectedType === "All") return true;
          else return selectedType === event?.type?.data?.attributes?.label;
        })
        .splice(0, limit)
    );
  }, [selectedType, limit]);

  if (loading) return <Typography>Loading...........</Typography>;
  return (
    <div>
      <div className={classes.gallery}>
        <div className={classes.title}>Our events gallery</div>
        <div className={classes.subTitle}>
          Events at DBTR are filled with joyous occasions, cultural
          <br /> gatherings, and learning opportunities that bring us all
          together.
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.types}>
          {types.map((type, index) => (
            <div
              className={`${classes.type} ${
                selectedType === type ? classes.selected : ""
              }`}
              onClick={() => setSelectedType(type)}
              key={index}
            >
              {type}
            </div>
          ))}
        </div>
        <Grid container spacing={4} marginTop="4rem" marginBottom="4rem">
          {filteredEvents.length === 0 ? (
            <Typography>No Events Found</Typography>
          ) : (
            filteredEvents.map((event, index) => (
              <Card
                event={event}
                handleClick={() => setSelectedEvent(index)}
                key={index}
              />
            ))
          )}
        </Grid>
        {filteredEvents.length > limit ? (
          <div className={classes.viewMore}>
            <button
              className={classes.button}
              onClick={() => setLimit(limit + 6)}
            >
              View More
            </button>
          </div>
        ) : null}
      </div>
      <Dialog
        open={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            color: "#FFFFFF",
          },
        }}
      >
        <DialogTitle style={{ display: "flex", justifyContent: "flex-end" }}>
          <CloseIcon onClick={() => setSelectedEvent(null)} />
        </DialogTitle>

        <Box display="flex" alignItems="center" justifyContent="center">
          <ArrowBackIosIcon
            onClick={() =>
              selectedEvent === 0
                ? setSelectedEvent(filteredEvents.length - 1)
                : setSelectedEvent(selectedEvent - 1)
            }
          />
          <img
            src={`http://localhost:1337${filteredEvents[selectedEvent]?.images?.data?.[0]?.attributes?.url}`}
            width="80%"
          />
          <ArrowForwardIosIcon
            onClick={() =>
              setSelectedEvent((selectedEvent + 1) % filteredEvents.length)
            }
          />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-around">
          <div>{filteredEvents[selectedEvent]?.title}</div>
          <div>{formatDate(filteredEvents[selectedEvent]?.eventDate)}</div>
        </Box>
      </Dialog>
    </div>
  );
}

export default Events;
