import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import AppImgWebp from "@/assets/img/app.webp";

export default function FlipCard() {
  const [scrollY, setScrollY] = useState(100);
  const [scale, setScale] = useState(1.15);

  const perspectiveValue = scrollY * 0.1;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const newScrollY = Math.max(0, 100 - window.scrollY * 0.5);
      setScrollY(newScrollY);

      const newScale = Math.min(
        1.15,
        Math.max(0.9, 1.15 - window.scrollY * 0.25)
      );
      setScale(newScale);

      if (window.scrollY > lastScrollY) {
        setScrollY(newScrollY + 1);
      } else {
        if (newScrollY >= 400) {
          setScale(Math.min(1.15, newScale + 0.5));
        }
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FlipContainer perspectiveValue={perspectiveValue} scale={scale}>
      <StyledCard />
    </FlipContainer>
  );
}

const FlipContainer = styled.div<{ perspectiveValue: number; scale: number }>`
  width: 80%;
  background: rgb(200, 200, 200, 0.05);
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 150px;
  position: relative;
  box-shadow: 0px 0px 50px 10px rgba(200, 200, 200, 0.2);

  transform: perspective(1000px)
    rotateX(${(props) => props.perspectiveValue}deg)
    scale(${(props) => props.scale});
  transform-origin: center bottom;
  transition: transform 0.5s ease, margin-top 0.5s ease;
  will-change: transform;

  @media (max-width: 1000px) {
    margin-top: 50px;
  }
`;

const StyledCard = styled(Card)`
  width: 100%;
  aspect-ratio: 72/45;
  background-image: url(${AppImgWebp});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  box-shadow: none;
`;
