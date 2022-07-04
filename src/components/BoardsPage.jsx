import { Box, ButtonBase, Fab } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Add";
import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BoardCard from "./BoardCard";
import TextField from "@mui/material/TextField";
import { db } from "../firebase";
import { doc, setDoc, collection, query, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import CreateBordFormDrawer, { useBoardCreationState } from "./CreateBoard";

const AddNewBoard = () => {
  const { isOpen, toggle } = useBoardCreationState();

  return (
    <Fab variant="extended" onClick={toggle} sx={{ position: `fixed`, m: 4, bottom: 0, right: 0 }}>
      <NavigationIcon sx={{ mr: 1 }} />
      Navigate
    </Fab>
  );
};

export default function BoardsPage(params) {
  const [boardData, setBoardData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    onSnapshot(query(collection(db, "boards")), (docs) => {
      const data = [];
      docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });

      setBoardData([...data]);
    });
  }, []);
  console.log(boardData);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        wrap: "wrap",
      }}
    >
      {boardData.map((card) => (
        <BoardCard
          key={card.title}
          board={card}
          onClick={() => {
            console.log("/board/" + card.title);
            navigate("/board/" + card.id);
          }}
        />
      ))}
      <AddNewBoard />
      <CreateBordFormDrawer />
    </Box>
  );
}
