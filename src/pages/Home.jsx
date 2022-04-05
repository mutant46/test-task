import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { StyledBox } from "../components/Resuable";
import Form from "../components/MainForm";
const Home = () => {
  return (
    <StyledBox
      display="flex"
      sx={{
        background: "url('bg-main.jpg') no-repeat center",
        minHeight: "100vh",
        backgroundSize: "cover",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Form />
    </StyledBox>
  );
};

export default Home;
