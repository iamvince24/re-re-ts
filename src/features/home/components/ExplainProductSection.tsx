import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import NotebookImg from "@/assets/img/NotebookImg.webp";
import GanttImg from "@/assets/img/GanttImg.webp";

const ExplainProductSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = cardRef.current?.getBoundingClientRect() ?? { top: 0 };
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (top < windowHeight) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container ref={cardRef} id="targetWhy">
      <ContentWrapper>
        <TextSection>
          <Title>Why Re-Re ?</Title>
          <Description>
            "In modern note-taking tools, whether it's paper or software, most
            of them cannot record the time spent on learning something.
            Additionally, each note usually only records the starting time and
            editing time in a point-like manner, which is relatively
            non-intuitive when faced with a large number of notes. However, we
            believe that recording learning time is very helpful for one's own
            learning, especially in this era of information explosion.&nbsp;
            <HighlightedText>
              For people who need to absorb a large amount of different
              information, evaluating their own learning situation and finding
              the best learning method and the time spent on it are important
              investments that can improve efficiency.
            </HighlightedText>
            &nbsp; However, currently there is no software that can help record
            both notes and time, and this is exactly what we want to achieve."
            <br />
            <br />
          </Description>
          <MobileImageContainer>
            <MobileNotebookCard isVisible={isVisible} />
          </MobileImageContainer>
          <Description>
            "Re-Re is a time management learning software. By displaying the
            time intervals spent on each note on a Gantt chart, users can
            clearly understand their learning progress during each time period
            in the past.&nbsp;
            <HighlightedText>
              The biggest advantage of this software is its ability to utilize
              past learning assessments to effectively plan future learning
              content, making it more systematic and tailored to individual
              needs.
            </HighlightedText>
            &nbsp; We hope that every user can make full use of their past
            learning experiences while continuously learning."
          </Description>
        </TextSection>
        <DesktopImageContainer>
          <NotebookCard isVisible={isVisible} />
        </DesktopImageContainer>
      </ContentWrapper>
      <GanttCard isVisible={isVisible} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0px;

  @media (max-width: 767px) {
    margin: 0px 0px 100px;
  }
`;

const ContentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Title = styled(Typography)`
  font-size: 40px;
  letter-spacing: -1px;
  font-family: Montserrat;
  font-weight: 900;
  text-align: left;
  background: linear-gradient(
    151deg,
    #f4f4f3 1.35%,
    rgba(244, 244, 243, 0) 220.28%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 767px) {
    font-size: 25px;
  }
`;

const Description = styled(Typography)`
  font-size: 22.5px;
  line-height: 35px;
  font-weight: 400;
  text-align: left;
  letter-spacing: 0.5px;
  color: rgba(200, 200, 200, 0.6);

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const HighlightedText = styled.span`
  color: rgba(200, 200, 200, 0.9);
  font-weight: 600;
`;

const MobileImageContainer = styled.div`
  width: 100%;
  display: none;
  justify-content: center;
  margin: 30px 0px;

  @media (max-width: 1200px) {
    display: flex;
  }
`;

const DesktopImageContainer = styled.div`
  width: 50%;
  display: flex;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const NotebookCard = styled(Card)<{ isVisible: boolean }>`
  width: 70%;
  max-width: 500px;
  margin: 0px auto 0px;
  margin-right: 30px;
  aspect-ratio: 486/352;
  background-image: ${(props) =>
    props.isVisible ? `url(${NotebookImg})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  box-shadow: none;
`;

const MobileNotebookCard = styled(Card)<{ isVisible: boolean }>`
  display: flex;
  width: 30%;
  min-width: 200px;
  aspect-ratio: 486/352;
  background-image: ${(props) =>
    props.isVisible ? `url(${NotebookImg})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  box-shadow: none;

  @media (max-width: 767px) {
    min-width: 150px;
  }
`;

const GanttCard = styled(Card)<{ isVisible: boolean }>`
  width: 60%;
  aspect-ratio: 1233/370;
  margin: 120px 0px;
  background-image: ${(props) =>
    props.isVisible ? `url(${GanttImg})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  box-shadow: none;

  @media (max-width: 767px) {
    width: 70%;
    margin: 50px 0px;
  }

  @media (max-width: 400px) {
    width: 80%;
  }
`;

export default ExplainProductSection;
