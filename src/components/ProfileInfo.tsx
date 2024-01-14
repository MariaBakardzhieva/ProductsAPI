import { useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { onUpdate } from "../api/auth.api";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/actions/form";
import { useSelector } from "react-redux";

export function ProfileInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state: any) => state.user);
  const { name, email, avatar } = user;
  const [isOpen, setIsOpen] = useState(false);
  const [updated, setUpdated] = useState({
    name: "",
    email: "",
  });

  const update = () => {
    dispatch(updateUser({ name: updated.name, email: updated.email }));
    onUpdate(updated, id);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto 0" }}>
      <Box>
        <h1 style={{ marginBottom: "30px" }}>My profile</h1>
        <Card>
          <CardContent>
            <Avatar
              alt="profileImg"
              src={avatar}
              style={{ width: "100px", height: "100px", marginBottom: "30px" }}
            />
            <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
              {name}
            </Typography>
            <Typography style={{ fontSize: "16px" }}>{email}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              type="submit"
              onClick={() => setIsOpen(true)}
            >
              Edit
            </Button>
          </CardActions>
          {isOpen ? (
            <>
              <CardContent>
                <div>
                  <TextField
                    id="name"
                    type="name"
                    label="Name"
                    placeholder="Name"
                    margin="normal"
                    fullWidth
                    required
                    onChange={(e) =>
                      setUpdated((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  <TextField
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Email"
                    margin="normal"
                    fullWidth
                    required
                    onChange={(e) =>
                      setUpdated((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </div>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  type="submit"
                  onClick={update}
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  type="submit"
                  onClick={() => setIsOpen(false)}
                >
                  Discard changes
                </Button>
              </CardActions>
            </>
          ) : null}
        </Card>
      </Box>
    </div>
  );
}
