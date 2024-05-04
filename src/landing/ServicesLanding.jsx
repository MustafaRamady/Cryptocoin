import { Box, Typography } from "@mui/material";
import React from "react";
import img1 from "../img/icon-7.png";
import img2 from "../img/icon-3.png";
import img3 from "../img/icon-9.png";
import img4 from "../img/icon-5.png";
import img5 from "../img/icon-2.png";
import img6 from "../img/icon-8.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
export default function ServicesLanding() {
  let service = [
    { title: "Currency Wallet", img: img1 },
    { title: "Currency Transaction", img: img2 },
    { title: "Bitcoin Investment", img: img3 },
    { title: "Currency Exchange", img: img4 },
    { title: "Bitcoin Escrow", img: img5 },
    { title: "Token Sale", img: img6 },
  ];
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        p: { xs: "100px 32px", md: "100px 70px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ marginBottom: "15px", fontSize: "40px" }}>Services</h1>
      <Typography
        variant="h3"
        sx={{
          color: "#16D5FF",
          marginBottom: "30px",
          fontWeight: "bold",
          fontSize: { xs: "25px", md: "30px" },
          textAlign: "center",
        }}
      >
        Buy, Sell And Exchange Cryptocurrency
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1 , auto)",
            md: "repeat(3 , auto)",
          },
          gridGap: "25px",
        }}
      >
        {service.map((ele) => {
          return (
            <Box sx={{ backgroundColor: "#F2F8FE", padding: "40px" }}>
              <img src={ele.img} alt="" />
              <h1 style={{ fontSize: "20px", margin: "15px 0px" }}>
                {ele.title}
              </h1>
              <p
                style={{
                  color: "#999",
                  letterSpacing: "0.75px",
                  marginBottom: "15px",
                }}
              >
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo
              </p>
              <Box
                sx={{
                  color: "#16D5FF",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <p>Read More</p> <ArrowForwardIcon />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
