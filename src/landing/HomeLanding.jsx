import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../img/hero-1.png";
import { useNavigate } from "react-router-dom";
export default function HomeLanding() {
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "100px 32px", md: "100px 70px" },
        alignItems: "center",
        backgroundColor: "#F2F8FE",
        fontFamily: "Arial",
      }}
    >
      <Box sx={{ mb: { xs: "25px", md: "0px" } }}>
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "60px" },
            fontWeight: "bold",
            mb: "20px",
          }}
        >
          Make Better Life With Trusted CryptoCoin{" "}
        </Typography>
        <p style={{ color: "#999", fontSize: "18px", marginBottom: "20px" }}>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <button
          style={{
            color: "white",
            backgroundColor: "#16D5FF",
            outline: "none",
            border: "none",
            padding: "10px 20px",
            fontSize: "25px",
            cursor: "pointer",
            borderRadius: "3px",
          }}
          onClick={() => {
            navigate("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Explore More
        </button>
      </Box>
      <Box
        sx={{
          width: { xs: "250px", md: "800px" },
          height: { xs: "250px", md: "500px" },
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Box>
  );
}
