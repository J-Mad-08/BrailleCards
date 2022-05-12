import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function CreateAUser() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const userCreator = (event) => {
    console.log("in user Creator", event.target);
    event.preventDefault();

    fetch("http://localhost:3000/createUser", {
      method: "POST",
      // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data, "data"))
      .catch((err) => console.log(err, "ERROR"));
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Lets Get Started
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Lets Get Started</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To access this website, please enter your name and email address
            here. We will do the rest.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          {/* build userCreator to save to db with fetch*/}
          <Button onClick={userCreator}>Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
