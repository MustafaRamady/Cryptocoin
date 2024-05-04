import { Box } from "@mui/material";
import React from "react";
import img1 from "../img/icon-7.png";
import img2 from "../img/icon-6.png";
import img3 from "../img/icon-5.png";
import img4 from "../img/icon-4.png";
import img5 from "../img/icon-3.png";
import img6 from "../img/icon-8.png";
export default function WhyUsLanding() {
  let arr = [
    { title: "Easy To Start", img: img1 },
    { title: "Safe & Secure", img: img2 },
    { title: "Affordable Plans", img: img3 },
    { title: "Secure Storage", img: img4 },
    { title: "Protected By Insurancet", img: img5 },
    { title: "24/7 Support", img: img6 },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: "100px 32px", md: "100px 70px" },
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ marginBottom: "15px", fontSize: "40px" }}>Why Us!</h1>
      <h3
        style={{ color: "#16D5FF", marginBottom: "30px", fontWeight: "normal" }}
      >
        The Best In The Crypto Industy{" "}
      </h3>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1 , auto)",
            md: "repeat(3 , auto)",
          },
          gridGap: "25px",
          mt: "50px",
        }}
      >
        {arr.map((ele) => {
          return (
            <Box sx={{ display: "flex" }}>
              <img
                src={ele.img}
                alt=""
                style={{ width: "50px", height: "50px", marginRight: "15px" }}
              />
              <Box>
                <h2 style={{ marginBottom: "25px", fontWeight: "normal" }}>
                  {ele.title}
                </h2>
                <p style={{ color: "#999" }}>
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo
                </p>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
