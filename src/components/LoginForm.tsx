import { Button, CardActions, CardContent, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { onLogin } from "../api/auth.api";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions/form";

export function LoginForm() {
  const dispatch = useDispatch();

  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const login = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await onLogin({
      email,
      password,
    });

    if (response && response.error) {
      setError("Sorry, Login failed!");
      return;
    }
    dispatch(setUser({ email, password }));
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <p style={{ fontSize: "36px", fontWeight: "bold" }}>
            You are logged in!
          </p>
          <Link to="/store">Go to store</Link>
        </div>
      ) : (
        <div style={{ marginTop: "30px" }}>
          <h1>Please Log In</h1>
          <Box component="form" noValidate autoComplete="off" onSubmit={login}>
            <Card>
              <CardContent>
                <div>
                  <TextField
                    id="email"
                    value={email}
                    type="email"
                    label="Email"
                    placeholder="Email"
                    margin="normal"
                    fullWidth
                    required
                    onChange={(event) =>
                      setCredentials({ email: event.target.value, password })
                    }
                  />
                  <TextField
                    id="password"
                    value={password}
                    type="password"
                    label="Password"
                    placeholder="Password"
                    margin="normal"
                    fullWidth
                    required
                    onChange={(event) =>
                      setCredentials({ email, password: event.target.value })
                    }
                  />
                </div>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  type="submit"
                >
                  Login
                </Button>
                <Button
                  href={"/register"}
                  variant="contained"
                  size="large"
                  color="secondary"
                  style={{ marginLeft: "10px", color: "#fff" }}
                >
                  Sign up
                </Button>
              </CardActions>
              {error.length > 0 && (
                <p style={{ paddingLeft: "8px", color: "red" }}>{error}</p>
              )}
            </Card>
          </Box>
        </div>
      )}
    </>
  );
}
