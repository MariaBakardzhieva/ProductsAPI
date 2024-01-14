import { Button, CardActions, CardContent, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { onSignUp } from "../api/auth.api";
import { createUser } from "../store/actions/form";

export function Register() {
  const dispatch = useDispatch();

  const [{ name, email, password, avatar }, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const signUp = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await onSignUp({
      name,
      email,
      password,
      avatar,
    });

    if (response && response.error) {
      setError("Sorry, Sign up failed! Try again...");
      return;
    }
    dispatch(createUser({ email, password, name, avatar }));
    setSuccess(true);
  };

  return (
    <Container className="mb-4">
      {success ? (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <p style={{ fontSize: "36px", fontWeight: "bold" }}>
            Congratulations! You are signed up!
          </p>
          <Link to={"/store"}>Go to store</Link>
        </div>
      ) : (
        <div style={{ marginTop: "30px" }}>
          <h1>Registration</h1>
          <Box component="form" noValidate autoComplete="off" onSubmit={signUp}>
            <Card>
              <CardContent>
                <div>
                  <TextField
                    id="image"
                    type="text"
                    label="URL"
                    value={avatar}
                    placeholder="https://api.lorem.space/image"
                    margin="normal"
                    fullWidth
                    required
                    onChange={(event) =>
                      setCredentials({
                        avatar: event.target.value,
                        email,
                        password,
                        name,
                      })
                    }
                  />
                  <TextField
                    id="name"
                    type="name"
                    label="Name"
                    value={name}
                    placeholder="Name"
                    margin="normal"
                    fullWidth
                    required
                    onChange={(event) =>
                      setCredentials({
                        name: event.target.value,
                        email,
                        password,
                        avatar,
                      })
                    }
                  />
                  <TextField
                    id="email"
                    type="email"
                    label="Email"
                    value={email}
                    placeholder="Email"
                    margin="normal"
                    fullWidth
                    required
                    onChange={(event) =>
                      setCredentials({
                        name,
                        email: event.target.value,
                        password,
                        avatar,
                      })
                    }
                  />
                  <TextField
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    value={password}
                    margin="normal"
                    fullWidth
                    required
                    onChange={(event) =>
                      setCredentials({
                        name,
                        email,
                        avatar,
                        password: event.target.value,
                      })
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
    </Container>
  );
}
