import { Box } from "@mui/material";
import React from "react";
import img1 from "../img/icon-2.png";
import img9 from "../img/icon-9.png";
import img10 from "../img/icon-10.png";
export default function TransactionLanding() {
  let arr = [
    { img: img1, title: "Today Transaction" },
    { img: img9, title: "Monthly Transaction" },
    { img: img10, title: "Total Transaction" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "50px", md: "250px" },
        padding: { xs: "100px 32px", md: "100px 70px" },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2F8FE",
        fontFamily: "Arial",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {arr.map((ele) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img src={ele.img} alt="" style={{ marginBottom: "30px" }} />
            <h1 style={{ marginBottom: "15px", fontSize: "40px" }}>123456</h1>
            <h3
              style={{
                color: "#16D5FF",
                marginBottom: "30px",
                fontWeight: "normal",
              }}
            >
              {ele.title}
            </h3>
          </Box>
        );
      })}
    </Box>
  );
}
