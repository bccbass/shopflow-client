/** @format */

import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MuiCard from "@mui/material/Card";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Logo from "../Logo";
import { handleLogin } from "../assets/apiHelpers";
import { UserContext } from "../UserContext";
import CircularProgress from "@mui/material/CircularProgress";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

export default function SignInCard() {
  const [generalError, setGeneralError] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const { refetch } = useContext(UserContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: handleLogin,
    onError: (error) => {
      setEmailError(true);
      setPasswordError(true);
      setGeneralError("Invalid email or password");
      console.error("error", error);
    },
    onSuccess: () => {
      navigate("/");
    },
  });



  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (emailError || passwordError) {
      return;
    }
    const userObj = {
      email: email,
      password: password,
    };
    mutation.mutate({ refetch: refetch, body: userObj });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const resetErrorMsgs = () => {
    setEmailError(false);
    setPasswordError(false);
    setGeneralError("");
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  return (
    <Card
      variant="outlined"
      sx={{
        mx: "auto",
        mt: { xs: 4, sm: 2, md: 8, xl: 12 },
      }}
    >
      <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
      <Logo variant="h3" color="primary" />
      <Typography
        // component="h1"
        align="center"
        color="text.secondary"
        variant="h5"
        sx={{
          width: "100%",
          pt: 4,
        }}
      >
        Sign in
      </Typography>
      <Typography
        // component="h1"
        align="center"
        color="error"
        variant="h7"
        sx={{
          height: "1.67rem",
          width: "100%",
        }}
      >
        {generalError}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 4,
          mb: 4,
        }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            onChange={resetErrorMsgs}
            variant="outlined"
            color={emailError ? "error" : "primary"}
          />
        </FormControl>
        <FormControl>
          {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
						
						<Link
							component="button"
							type="button"
							onClick={handleClickOpen}
							variant="body2"
							sx={{ alignSelf: "baseline" }}
						>
							Forgot your password?
						</Link>
					</Box> */}

          {/* <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            onChange={resetErrorMsgs}
            required
            fullWidth
            variant="outlined"
            color={passwordError ? "error" : "primary"}
          />
        </FormControl> */}

          <FormLabel htmlFor="password">Password</FormLabel>
          <OutlinedInput
            notched
            autoFocus
            onChange={resetErrorMsgs}
            color={"primary"}
            required
            error={passwordError}
            helperText={passwordError ? passwordErrorMessage : ""}
            id="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            // label={"Password"}
          />
          <Typography sx={{ pl: 2, pt: 0.3, fontSize: ".8rem" }} color="error">
            {passwordError ? passwordErrorMessage : ""}
          </Typography>
        </FormControl>
        {/* <FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/> */}
        {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
        <Button
          sx={{ mt: 4 }}
          type="submit"
          fullWidth
          disabled={mutation.isPending}
          variant="contained"
          onClick={validateInputs}
        >
          {mutation.isPending ? <CircularProgress size={"25px"} /> : "Sign In"}
        </Button>
        {/* <Typography sx={{ textAlign: "center" }}>
					Don&apos;t have an account?{" "}
					<span>
						<Link
							href="/material-ui/getting-started/templates/sign-in/"
							variant="body2"
							sx={{ alignSelf: "center" }}
						>
							Sign up
						</Link>
					</span>
				</Typography> */}
      </Box>
      {/* <Divider>or</Divider>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
				<Button
					fullWidth
					variant="outlined"
					onClick={() => alert("Sign in with Google")}
					// startIcon={<GoogleIcon />}
				>
					Sign in with Google
				</Button>
				<Button
					fullWidth
					variant="outlined"
					onClick={() => alert("Sign in with Facebook")}
					// startIcon={<FacebookIcon />}
				>
					Sign in with Facebook
				</Button>
			</Box> */}
    </Card>
  );
}
