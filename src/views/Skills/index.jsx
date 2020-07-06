import React from "react";
import styled from "styled-components";
import SectionContainer from "../../shared/components/SectionContainer";
import Grid from "@material-ui/core/Grid";
import mediaQueries from "../../shared/media-queries";
import theme from "../../shared/theme";

// Data
import { competenceAreas } from "../../static/data";

// Components
import CompetenceCard from "./components/CompetenceCard";

const Content = styled.div`
  @media ${mediaQueries.laptop("min")} {
    padding: 2rem;
  }
  @media ${mediaQueries.tablet("min")} {
    padding: 2rem 0;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 2rem 0;
  }
  margin: auto;
`;

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  color: ${theme.colors.black.main};
`;

const Introduction = styled.div`
  padding: 1rem 0 3rem;
  font-size: 1.17rem;
  @media ${mediaQueries.laptop("min")} {
    display: flex;
  }
`;

const IntroductionPart = styled.div`
  flex: 1;
`;

const Skills = () => {
  return (
    <SectionContainer>
      <Content>
        <Title>Kompetensområden</Title>
        <Grid container spacing={2} component={Introduction}>
          <Grid item xs={12} md={6}>
            Jag kan erbjuda dig genom min expertis att ta fram lämpligaste
            slutpriser till dig som slutkund i delar som berör mobilkran (lyft
            av hus vid leverans), grundarbete och inkoppling av el/vvs. Jag
            erbjuder förhandling, analys och kunskap kring att välja rätt
            entreprenad för ditt husprojekt. Vi bygger ditt hus och jag gör alla
            delar runt om. När huset är levererar och slutanmälan är godkänd är
            det dags för dig som kund att nyttja huset.
          </Grid>
          <Grid item xs={12} md={6}>
            Jag hjälper dig som kund att processa fram en ansökan eller bygglov
            till kommunen, samtliga handlingar och kompletteringar för att nå
            ett startbesked. Jag förhandlar även med entreprenadföretag för att
            nå ett förmånligt pris kring entreprenad av grund, el/vvs. Jag ser
            till att en mobilkran och transport säkert levererar ditt nya hus
            hem till dig.
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {Object.keys(competenceAreas).map((competenceKey) => (
            <CompetenceCard {...competenceAreas[competenceKey]} />
          ))}
        </Grid>
      </Content>
    </SectionContainer>
  );
};

export default Skills;
