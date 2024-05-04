import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import payment1 from "../img/payment-1.png";
import payment2 from "../img/payment-2.png";
import payment3 from "../img/payment-3.png";
import payment4 from "../img/payment-4.png";
export default function TokenSaleLanding({ background }) {
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
        backgroundColor: { background },
      }}
    >
      <h1 style={{ marginBottom: "15px", fontSize: "40px" }}>Token Sale</h1>
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
        Token Sale Countdown
      </Typography>
      <Box
        sx={{
          mb: "30px",
          display: { xs: "grid", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gridTemplateColumns: "repeat(2,auto)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "25px 50px",
          }}
        >
          <h1 style={{ marginBottom: "15px", fontSize: "40px" }}>0</h1>
          <h3
            style={{
              color: "#16D5FF",
              marginBottom: "30px",
              fontWeight: "normal",
            }}
          >
            Days
          </h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "25px 50px",
          }}
        >
          <h1 style={{ marginBottom: "15px", fontSize: "40px" }}>0</h1>
          <h3
            style={{
              color: "#16D5FF",
              marginBottom: "30px",
              fontWeight: "normal",
            }}
          >
            Hours
          </h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "25px 50px",
          }}
        >
          <h1 style={{ marginBottom: "15px", fontSize: "40px" }}>0</h1>
          <h3
            style={{
              color: "#16D5FF",
              marginBottom: "30px",
              fontWeight: "normal",
            }}
          >
            Minutes
          </h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "25px 50px",
          }}
        >
          <h1 style={{ marginBottom: "15px", fontSize: "40px" }}>0</h1>
          <h3
            style={{
              color: "#16D5FF",
              marginBottom: "30px",
              fontWeight: "normal",
            }}
          >
            Seconds
          </h3>
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
          marginBottom: "30px",
        }}
        onClick={() => {
          navigate("/");
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Buy Token
      </button>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <img src={payment1} alt="" style={{ width: "60px ", height: "40px" }} />
        <img src={payment2} alt="" style={{ width: "60px ", height: "40px" }} />
        <img src={payment3} alt="" style={{ width: "60px ", height: "40px" }} />
        <img src={payment4} alt="" style={{ width: "60px ", height: "40px" }} />
      </Box>
    </Box>
  );
}
