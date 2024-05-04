import React from "react";
import SecLanding from "../landing/SecLanding";
import { Box, IconButton, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  let navigate = useNavigate();
  let followUs = [
    <FacebookIcon />,
    <TwitterIcon />,
    <LinkedInIcon />,
    <YouTubeIcon />,
  ];
  return (
    <>
      <Helmet>
        <title>Contact - Crypto Coins</title>
      </Helmet>
      <SecLanding Title={"Contact Us"} />
      <Box
        sx={{ p: { xs: "100px 32px", md: "100px 70px" }, fontFamily: "Arial" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box>
            <h1 style={{ marginBottom: "15px", fontSize: "40px" }}>
              Contact Us
            </h1>
            <h3
              style={{
                color: "#16D5FF",
                marginBottom: "30px",
                fontWeight: "normal",
              }}
            >
              If You Have Any Query, Please Contact Us
            </h3>
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
            Say Hello
          </button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "50px",
            gap: "200px",
            flexDirection: { xs: "column", row: "row" },
          }}
        >
          <Box>
            <Box sx={{ borderBottom: "1px solid #999", mb: "20px" }}>
              <p style={{ color: "#999", marginBottom: "15px" }}>Our Office:</p>
              <h1 style={{ marginBottom: "15px" }}>
                123 Street, New York, USA
              </h1>
            </Box>
            <Box sx={{ borderBottom: "1px solid #999", mb: "20px" }}>
              <p style={{ color: "#999", marginBottom: "15px" }}>Call us:</p>
              <h1 style={{ marginBottom: "15px" }}>+012 345 6789</h1>
            </Box>
            <Box sx={{ borderBottom: "1px solid #999", mb: "20px" }}>
              <p style={{ color: "#999", marginBottom: "15px" }}>Mail us:</p>
              <h1 style={{ marginBottom: "15px" }}>info@example.com</h1>
            </Box>
            <Box sx={{ borderBottom: "1px solid #999", mb: "20px" }}>
              <p style={{ color: "#999", marginBottom: "15px" }}>Follow Us:</p>
              <Box sx={{ pb: "20px" }}>
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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                color: "#999",
                marginBottom: "30px",
                letterSpacing: "0.75px",
                lineHeight: "1.22",
              }}
            >
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.
            </p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "30px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                sx={{ width: "calc(50% - 15px)" }}
              />
              <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                sx={{ width: "calc(50% - 15px)" }}
              />
            </Box>
            <TextField
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              sx={{ mb: "30px" }}
            />
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              sx={{ mb: "30px" }}
            />
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
                width: "fit-content",
              }}
              onClick={() => {
                navigate("/");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Send Message
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
