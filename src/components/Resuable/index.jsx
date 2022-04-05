import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)(({ theme }) => ({
  background: "url('bg-main.jpg') no-repeat center",
  minHeight: "100vh",
  backgroundSize: "cover",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "blue",
  color: "white",
  marginLeft: theme.spacing(2),
  padding: theme.spacing(1, 4),
  "&:hover": { backgroundColor: "darkblue" },
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    marginLeft: 1,
  },
}));

export const FormBox = styled(Box)(({ theme }) => ({
  width: "85%",
  background: "white",
  borderRadius: "10px",
  [theme.breakpoints.up("md")]: {
    width: "50%",
    padding: theme.spacing(6),
  },
}));
