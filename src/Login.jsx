/** @format */

import React from "react";
import "./background.css";
import { Container, Box, Typography, TextField } from "@mui/material";
import SignInCard from "./SignInCard";

const Login = () => {
	return (
		<Container
			sx={{
				p: 0,
				mr: '10.3rem',
				width: "100vw",
			}}
		>
			<SignInCard />
		</Container>
	);
};

export default Login;
