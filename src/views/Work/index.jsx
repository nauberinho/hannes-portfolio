import React, { useState } from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import _ from "lodash";

import { Link } from "react-router-dom";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SectionContainer from "../../shared/components/SectionContainer";
import { MdKeyboardArrowRight } from "react-icons/md";

// Components
import PortfolioItem from "./components/PortfolioItem";

// Data
import { previousWork } from "../../static/data";

// Theme
import theme from "../../shared/theme";
import mediaQueries from "../../shared/media-queries";

import Grid from "@material-ui/core/Grid";

const Content = styled.div`
  // @media ${mediaQueries.laptop("min")} {
  //   width: 90%;
  // }
  // @media ${mediaQueries.laptop("max")} {
  //   width: 90%;
  // }
  margin: auto;
`;

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

const Introduction = styled.div`
  padding: 1rem 0 3rem;
  font-size: 1.3rem;
`;

const StyledExpansionPanel = styled(ExpansionPanel)`
  && {
    background-color: none !important;
    &:before {
      display: none;
    }
  }

  &:before {
    background-color: none !important;
  }
`;

const StyledExpansionSummary = styled(ExpansionPanelSummary)`
  && {
    font-weight: 500;
    @media ${mediaQueries.tablet("min")} {
      display: flex;
    }
  }
`;

const TitleAndTechniques = styled.div`
  flex: 1;
  display: flex;
  @media ${mediaQueries.tablet("max")} {
    flex-direction: column;
  }
`;

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  display: flex;
  @media ${mediaQueries.tablet("max")} {
    flex-direction: column;
  }
`;

const StyledExpansionPanelDescription = styled.div`
  width: 50%;
  padding: 0 2rem 0 0;
  @media ${mediaQueries.tablet("max")} {
    width: 100%;
    padding: 0 0 1rem;
  }
`;

const StyledExpansionPanelSpecs = styled.div`
  width: 50%;
  @media ${mediaQueries.tablet("max")} {
    width: 100%;
  }
`;

const SpecsTitle = styled.span`
  font-weight: 500;
`;

const SpecsArea = styled.div`
  padding: 0rem 0 2rem;
`;

const ItemTitle = styled.div`
  font-size: 1.2rem;
  flex: 1;
  @media ${mediaQueries.tablet("max")} {
    width: 100%;
  }
  font-weight: 400;
  transition: 0.2s ease;
  display: flex;
  ${({ isActive }) => isActive && `color: ${theme.colors.yellow.main};`};
  span {
    display: inline-block;
    margin: auto 0;
  }
`;

const ItemSummary = styled.div`
  flex: 1;
  @media ${mediaQueries.tablet("max")} {
    width: 100%;
    padding: 1rem 0;
  }
  font-size: 1rem;
  font-weight: 100;
  transition: 0.2s ease;
  display: flex;
  align-content: flex-start;
`;

const IconWrapper = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
`;

const StyledLink = styled.a`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: ${theme.colors.yellow.main};
  font-weight: bold;
  display: flex;
  svg {
    margin-top: auto;
    display: inline-block;
  }
`;

const Work = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, expanded) => {
    setExpanded(expanded ? panel : false);
  };
  return (
    <SectionContainer>
      <Content>
        <Title> Projects</Title>
        <Introduction>An overview of projects I've developed.</Introduction>
        <Grid container spacing={2}>
          {previousWork.map((work) => (
            <PortfolioItem {...work} />
          ))}
        </Grid>
      </Content>
    </SectionContainer>
  );
};

export default Work;
