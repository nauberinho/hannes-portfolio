import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import theme from "../../../shared/theme";
import mediaQueries from "../../../shared/media-queries";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles(() => ({
  cardIcon: {
    color: "white",
  },
  galleryButton: {
    background: theme.colors.green.main + " !important",
    color: "white !important",
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
  },
  media: {
    height: 20,
    paddingTop: "56.25%", // 16:9
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: theme.colors.green.main,
    color: "white",
  },
}));

const PortfolioItem = ({ title, subheader, image, text, listItems, href }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              Hej
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={
            <Typography
              variant="h6"
              component="p"
              className={classes.cardTitle}
            >
              {title}
            </Typography>
          }
          subheader={subheader}
        />
        <div style={{ position: "relative" }}>
          <CardMedia className={classes.media} image={image} title={title} />
          <Button
            component={Link}
            to={`/work/${href}`}
            className={classes.galleryButton}
          >
            Se alla bilder
          </Button>
        </div>

        <Grid component={CardContent} container spacing={1}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" component="p">
              {text}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <List component="nav" aria-label="contacts">
              <ListItem button>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Chelsea Otakan" />
              </ListItem>
              <ListItem button>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default PortfolioItem;
