import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import icon1 from "../img/icon-1.png";
export default function Header({ icon }) {
  let navigate = useNavigate();
  let nav = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Service", path: "/service" },
    { title: "Token Sale", path: "/tokensale" },
    { title: "Features", path: "/feature" },
    { title: "Contact", path: "/contact" },
  ];
  let icons = [<FacebookIcon />, <TwitterIcon />, <LinkedInIcon />];
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          padding: { xs: "0px 10px", md: "0px 45px" },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {nav.map((ele) => {
              return (
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      m: "0px 10px",
                      color: "black",
                      cursor: "pointer",
                      transition: "0.3s",
                      "&:hover": { color: "#16D5FF" },
                    }}
                    variant="h3"
                    onClick={() => {
                      navigate(ele.path);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    {ele.title}
                  </Typography>
                </Box>
              );
            })}
            <Box sx={{ ml: "50px", display: { xs: "none", md: "block" } }}>
              {icons.map((ele) => {
                return (
                  <IconButton
                    sx={{ color: "#16D5FF" }}
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
            <IconButton
              edge="end"
              aria-haspopup="true"
              color="inherit"
              sx={{
                mr: { xs: "3px", md: "10px" },
                display: { xs: "block", md: "none" },
                p: "0px",
              }}
            >
              {icon}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
