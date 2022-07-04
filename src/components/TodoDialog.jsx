import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function BasicSpeedDial({ todo }) {
  return (
    <Box sx={{ height: 80, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial ariaLabel="SpeedDial basic example" sx={{ position: "absolute", bottom: 16, right: 16 }} icon={<MoreVertIcon />} direction={`left`}>
        <SpeedDialAction
          key={"Delete"}
          icon={<DeleteIcon />}
          tooltipTitle={"Delete"}
          onClick={() => {
            setDoc(doc(db, "todos", todo.id), { deleted: true });
          }}
        />
        <SpeedDialAction key={"Edit"} icon={<EditIcon />} tooltipTitle={"Edit"} />
      </SpeedDial>
    </Box>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ board }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    onSnapshot(query(collection(db, "boards", board.id, "todos")), (docs) => {
      const data = [];
      docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      console.log(data);
      setTodos([...data]);
    });
  }, []);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        See More
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {board.title}
            </Typography>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          {todos.map((todo) => (
            <>
              <ListItem key={todo.id} button>
                <ListItemText primary={todo.todo} />
                <BasicSpeedDial todo={todo} />
              </ListItem>
              <Divider />
            </>
          ))}
          <ListItem button>
            <TextField
              sx={{ ml: 2, flex: 19 }}
              id="standard-basic"
              label="Standard"
              variant="standard"
              onChange={(e) => {
                setTodo(e.target.value);
                console.log(todo);
              }}
            />
            <Button
              sx={{ ml: 2, flex: 1 }}
              variant="contained"
              onClick={async () => {
                await setDoc(doc(db, `/boards/${board.id}/todos/${todo}`), {
                  todo: todo,
                  completed: false,
                  createdAt: new Date(),
                  updatedAt: new Date(),
                });
              }}
            >
              Save
            </Button>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
