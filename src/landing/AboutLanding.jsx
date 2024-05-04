import { Box } from "@mui/material";
import React from "react";
import image from "../img/about.png";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
export default function AboutLanding() {
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        gap: "60px",
        padding: { xs: "100px 32px", md: "100px 70px" },
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      {" "}
      <Box
        sx={{
          width: { xs: "250px", md: "1000px" },
          height: { xs: "200px", md: "400px" },
        }}
      >
        <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
      </Box>
      <Box>
        <h1 style={{ marginBottom: "20px", fontSize: "40px" }}>About Us</h1>
        <p style={{ marginBottom: "20px", color: "#16D5FF", fontSize: "20px" }}>
          The Most Trusted Cryprocurrency Platform
        </p>
        <p style={{ marginBottom: "20px", color: "#999", fontSize: "18px" }}>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <p style={{ marginBottom: "20px", color: "#999", fontSize: "18px" }}>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit.
        </p>
        <Box sx={{ marginBottom: "20px" }}>
          <Box
            style={{
              marginBottom: "20px",
              color: "#999",
              display: "flex",
              fontSize: "18px",
            }}
          >
            <CheckIcon
              sx={{ color: "#16D5FF", mr: "5px", alignItems: "center" }}
            />
            <p>Tempor erat elitr rebum at clita</p>
          </Box>
          <Box
            style={{
              marginBottom: "20px",
              color: "#999",
              display: "flex",
              fontSize: "18px",
            }}
          >
            <CheckIcon
              sx={{ color: "#16D5FF", mr: "5px", alignItems: "center" }}
            />
            <p>Tempor erat elitr rebum at clita</p>
          </Box>
          <Box
            style={{
              marginBottom: "20px",
              color: "#999",
              display: "flex",
              fontSize: "18px",
            }}
          >
            <CheckIcon
              sx={{ color: "#16D5FF", mr: "5px", alignItems: "center" }}
            />
            <p>Tempor erat elitr rebum at clita</p>
          </Box>
        </Box>
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
          Read More
        </button>
      </Box>
    </Box>
  );
}
