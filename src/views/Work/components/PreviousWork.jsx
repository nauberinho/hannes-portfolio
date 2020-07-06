import React, { useParams } from "react";
import Gallery from "react-photo-gallery";
import { withRouter } from "react-router";
import theme from "../../../shared/theme";

import { makeStyles } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Button from "@material-ui/core/Button";

import { previousWork } from "../../../static/data";

const useStyles = makeStyles(() => ({
  goBackButton: {
    width: "20rem",
    background: "none!important",
    color: theme.colors.green.main,
  },
}));

const BasicRows = ({ match, history }) => {
  const classes = useStyles();

  const { title } = match.params;

  const workToDisplay = previousWork.find((work) => work.href === title);

  console.log(workToDisplay, "=workToDisplay");
  return (
    <>
      <Button
        startIcon={<KeyboardBackspaceIcon />}
        className={classes.goBackButton}
        onClick={() => history.goBack()}
      >
        Tillbaka till portfolio
      </Button>
      {workToDisplay.title}
      <Gallery photos={workToDisplay.photos} />
    </>
  );
};

export default withRouter(BasicRows);
