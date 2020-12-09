import React from 'react';
import styled from 'styled-components';
import * as polished from 'polished';
import { ProjectBadge } from 'formidable-oss-badges';
import { background, blue } from '../utils/colors';

const SubTitle = styled.h2`
  font-size: ${polished.modularScale(1)};
  font-weight: normal;
  color: ${blue};
  margin: 0;
  margin-left: ${polished.rem(20)};
  letter-spacing: ${polished.rem(0.3)};
  line-height: 1.5;
  color: #ffeb3b;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: ${polished.rem(30)};
  }
`;

const BadgeContainer = styled.div`
  width: 230px;
`;

const Title = styled.h1`
  font-weight: normal;
  font-size: ${polished.modularScale(4)};
  line-height: 1.1;
  margin: 0;
  margin-left: ${polished.rem(20)};

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: ${polished.rem(25)};
    margin-top: ${polished.rem(25)};
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: left;
  margin: ${polished.rem(30)} 0;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Description = styled.div`
  margin: ${polished.rem(50)};
  text-align: center;
  font-size: ${polished.modularScale(1)};
  color: #FFF;
  line-height: 1.5;

  @media (max-width: 600px) {
    margin: ${polished.rem(50)} 0;
  }
`;

const Button = styled.a`
  display: inline-block;
  width: auto;
  padding: ${polished.rem(10)} ${polished.rem(20)};
  text-decoration: none;
  border-radius: ${polished.rem(3)};
  background: gold;
  color: ${background};
  margin: ${polished.rem(30)} 0;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: ${polished.rem(60)};
`;

const Header = () => (
  <Container>
    <TitleRow>
      <BadgeContainer>
        <ProjectBadge
          color="#ffeb3b"
          abbreviation="RR"
          description="React Repeat"
        />
      </BadgeContainer>

      <div>
        <Title>React Repeat</Title>
        <SubTitle>Repeat elements / components to fill you need it.</SubTitle>
      </div>
    </TitleRow>

    <Description>
      <div>
        The most easy way to repeat and fill with elements or React components.
      </div>

      <Button
        href="https://github.com/rocksfenix/react-repeat"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </Button>
    </Description>
  </Container>
);
export default Header;
