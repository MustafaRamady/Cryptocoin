import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import icon1 from "../img/icon-1.png";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  let navigate = useNavigate();
  let getInTouch = [
    { title: "123 Street, New York, USA", icon: <LocationOnIcon /> },
    { title: "+012 345 67890", icon: <PhoneIcon /> },
    { title: "info@example.com", icon: <EmailIcon /> },
  ];
  let ourServices = [
    "Currency Wallet",
    "Currency Transaction",
    "Bitcoin Investment",
    "Token Sale",
  ];
  let quickLinks = [
    { title: "About Us", path: "about" },
    { title: "Contact Us", path: "contact" },
    { title: "Our Services", path: "service" },
    { title: "Term & Condition", path: "/" },
  ];
  let followUs = [
    <FacebookIcon />,
    <TwitterIcon />,
    <LinkedInIcon />,
    <YouTubeIcon />,
  ];
  return (
    <Box
      sx={{
        padding: { xs: "100px 32px 0px 32px", md: "100px 70px 0px 70px" },
        backgroundColor: "#F2F8FE",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: "50px",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: "50px" }}>
            <img src={icon1} style={{ width: "35px", height: "35px" }} alt="" />
            <Typography
              variant="h1"
              sx={{
                fontSize: "35px",
                color: "#16D5FF",
                fontWeight: "bold",
                ml: "8px",
              }}
            >
              CryptoCoin
            </Typography>
          </Box>
          <p
            style={{ color: "#999", fontFamily: "Arial", letterSpacing: "1px" }}
          >
            Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
            ipsum et lorem et sit, sed stet lorem sit clita. Diam dolor diam
            ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
            sit.
          </p>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <h3
            style={{
              color: "#000",
              fontFamily: "Arial",
              marginBottom: "25px",
              letterSpacing: "0.5px",
            }}
          >
            Newsletter
          </h3>
          <p
            style={{
              color: "#999",
              fontFamily: "Arial",
              marginBottom: "25px",
              letterSpacing: "1px",
            }}
          >
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita.
          </p>
          <Box
            sx={{
              padding: "10px",
              border: "1px solid #999",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "0.35s",
              "&:hover": { border: "2.5px solid  #16D5FF " },
            }}
          >
            <input
              type="email"
              placeholder="Your Email"
              style={{
                outline: "none",
                border: "none",
                fontSize: "15px",
                color: "#999",
                fontFamily: "Arial",
                backgroundColor: "transparent",
              }}
            />
            <button
              style={{
                color: "white",
                backgroundColor: "#16D5FF",
                outline: "none",
                border: "none",
                padding: "5px 10px",
                fontSize: "25px",
                cursor: "pointer",
                borderRadius: "10px",
              }}
              onClick={() => {
                navigate("/");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Sign Up
            </button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          fontFamily: "Arial",
          mt: "50px",
          borderBottom: "1px solid #999",
          paddingBottom: "15px",
        }}
      >
        <Box>
          <h2 style={{ marginBottom: "20px", fontWeight: "normal" }}>
            Get In Touch
          </h2>
          {getInTouch.map((ele) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: "20px",
                  color: "#888",
                }}
              >
                <span style={{ marginRight: "10px" }}>{ele.icon}</span>
                <Typography>{ele.title}</Typography>
              </Box>
            );
          })}
        </Box>
        <Box>
          <h2 style={{ marginBottom: "20px", fontWeight: "normal" }}>
            Our Services
          </h2>
          {ourServices.map((ele) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: "20px",
                  color: "#888",
                }}
              >
                <span>
                  <ChevronRightIcon />
                </span>
                <Typography
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  sx={{
                    transition: "0.5s",
                    cursor: "pointer",
                    "&:hover": { fontSize: "17px", color: "#16D5FF" },
                  }}
                >
                  {ele}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box>
          <h2 style={{ marginBottom: "20px", fontWeight: "normal" }}>
            Quick Links
          </h2>
          {quickLinks.map((ele) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: "20px",
                  color: "#888",
                }}
              >
                <span>
                  <ChevronRightIcon />
                </span>
                <Typography
                  onClick={() => {
                    navigate(ele.path);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  sx={{
                    transition: "0.5s",
                    cursor: "pointer",
                    "&:hover": { fontSize: "17px", color: "#16D5FF" },
                  }}
                >
                  {ele.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box>
          <h2 style={{ marginBottom: "20px", fontWeight: "normal" }}>
            Follow Us
          </h2>
          <Box>
            {followUs.map((ele) => {
              return (
                <IconButton
                  sx={{
                    border: "1px solid #16D5FF",
                    color: "#16D5FF",
                    m: "0px 2.5px",
                  }}
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  {ele}
                </IconButton>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          p: "15px ",
          fontSize: "20px",
          color: "#999",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography>
          <span style={{ color: "#16D5FF" }}>CryptoCoins</span> , All Right
          Reserved. , Developed By Mustafa Ramady
        </Typography>
      </Box>
    </Box>
  );
}
