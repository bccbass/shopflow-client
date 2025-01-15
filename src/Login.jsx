/** @format */

import React from "react";
import "./background.css";
import { Container, Box, Typography, TextField } from "@mui/material";
import SignInCard from "./SignInCard";

const Login = () => {
	return (
		<Container
			sx={{
				badgroundColor: "red",
				height: "500px",
				m: 0,
				p: 0,
				width: "100vw",
			}}
		>
			<SignInCard />
		</Container>
	);
};

export default Login;
