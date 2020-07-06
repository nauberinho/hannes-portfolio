import React from "react";
import PropTypes from "react-proptypes";
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
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

const useStyles = makeStyles(() => ({
  cardIcon: {
    color: "white",
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

const CompetenceCard = ({ title, text, image, Icon, order }) => {
  const classes = useStyles();

  console.log(order, "=order");

  return (
    <Grid item xs={12} md={6}>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {order}
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
        />
        <CardMedia className={classes.media} image={image} title={title} />
        <Grid component={CardContent} container spacing={1}>
          <Grid item xs={12} md={12}>
            <Typography variant="subtitle1" component="p">
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CompetenceCard;
