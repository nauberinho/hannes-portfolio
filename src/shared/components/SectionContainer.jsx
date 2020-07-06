import React from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import mediaQueries from "../media-queries";
import { fadeIn } from "../keyframes";

const Container = styled.div`
  margin: auto;
  word-wrap: break-word;
  animation: ${fadeIn} 0.5s ease;
  width: 100%;
`;

const SectionContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SectionContainer;
