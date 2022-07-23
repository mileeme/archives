/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import Section from "../Container/Section";
import Container from "../Container/Container";
import { mq } from "../../Styles/tokens";
import bannerPersonSmiling from "../../Assets/bannerPersonSmiling.png"
import Cs from "../../Assets/Cs.png"
import Email from "../Input/Email";
import ButtonArrow from "../Button/ButtonArrow";
import Icon from "../Icon/Icon";

export default function BannerEmailCapture(props) {
  const BannerContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 16px",
    display: "flex",
    alignItems: "start",
    minHeight: 470,
    backgroundImage: `url(${Cs}),linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0)), linear-gradient(to right, rgba(0, 0, 0, 0.8) 25%, rgba(62, 44, 32, 0.7), rgba(255, 255, 255, 0)), url(${bannerPersonSmiling})`,
    backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    backgroundPosition: "top center",
    backgroundSize: "cover",
  })

  const Heading = styled.div({
    margin: "0 16px",
    [mq[1]]: {
      width: 640,
    }
  })

  return (
    <Section aria-labelledby='sectionHeading' css={{padding: 0}}>
      <BannerContainer>
        <Heading>
          <h1 id="sectionHeading">
            <Typography css={{color: "white"}} label="Build your career and train for that job today" d1Semibold />
          </h1>
          <Email />

        </Heading>
        <ButtonArrow css={{color: "white"}} label="Testing 123" icon={<Icon icon="arrowNext" variant="primary"/>}/>      
      </BannerContainer>
    </Section>
  );
}
