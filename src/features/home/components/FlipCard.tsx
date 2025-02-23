import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";

const AppImgWebp = new URL("@/assets/img/app.webp", import.meta.url).href;

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
    <>
      <Box
        sx={{
          width: "80%",
          background: "rgb(200, 200, 200, 0.05)",
          borderRadius: "5px",
          marginTop: "40px",
          marginBottom: "150px",
          position: "relative",
          boxShadow: "0px 0px 50px 10px rgba(200, 200, 200, 0.2)",

          transform: `perspective(1000px) rotateX(${perspectiveValue}deg) scale(${scale})`,
          transformOrigin: "center bottom",
          transition: "transform 0.5s ease, margin-top 0.5s ease",

          willChange: "transform",

          "@media (max-width:1000px)": {
            marginTop: "50px",
          },
        }}
      >
        <Card
          sx={{
            width: "100%",
            aspectRatio: "72/45",
            backgroundImage: `url(${AppImgWebp})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        />
      </Box>
    </>
  );
}
