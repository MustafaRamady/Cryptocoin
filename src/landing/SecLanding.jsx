import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "../img/hero-2.png";
import { useNavigate } from "react-router-dom";

export default function SecLanding({ Title }) {
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "100px 32px", md: "100px 70px" },
        alignItems: { xs: "flex-start", md: "center" },
        backgroundColor: "#F2F8FE",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "50px" },
            fontWeight: "bold",
            mb: "20px",
          }}
        >
          {Title}
        </Typography>
        <Typography sx={{ color: "#999", mb: { xs: "30px", md: "0px" } }}>
          <span
            onClick={() => {
              navigate("/");
            }}
            style={{ color: "#16D5FF", cursor: "pointer" }}
          >
            Home
          </span>{" "}
          / <span style={{ color: "#16D5FF", cursor: "pointer" }}>Pages</span> /{" "}
          {Title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "300px", md: "500px " },
          height: { xs: "200px", md: "400px" },
        }}
      >
        <img src={Image} alt="" style={{ width: "100%", height: "100%" }} />
      </Box>
    </Box>
  );
}
