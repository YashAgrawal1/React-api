import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleemailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (email && password) {
      onLogin(email, password);
    }
  };

  return (
    <div>
      <Container style={{ maxWidth: "400px" }}>
        <Box mt={5} p={3} bgcolor="grey" boxShadow={3}>
          <Typography variant="h4" align="center">
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              id="email"
              label="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleemailChange}
              margin="normal"
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};
