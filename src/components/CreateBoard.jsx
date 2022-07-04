import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import create from "zustand";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useBoardCreationState = create((set, get) => ({
  isOpen: false,
  toggle: () => set((f) => ({ ...f, isOpen: !f.isOpen })),
}));
export default function CreateBordFormDrawer() {
  const { isOpen, toggle } = useBoardCreationState();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <Dialog open={isOpen} onClose={toggle}>
      <DialogTitle>Create A New Board</DialogTitle>
      <DialogContent>
        <DialogContentText> Enter the board info </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          autoFocus
          margin="dense"
          id="desc"
          label="Description"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setDescription(e.target.value);
            console.log(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggle}>Cancel</Button>
        <Button
          onClick={async () => {
            await setDoc(doc(db, "boards", String(Date.now().toString(16))), {
              title: title,
              description: description,
              createdAt: Date.now(),
            });
            toggle();
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
