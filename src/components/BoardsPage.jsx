import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BoardCard from "./BoardCard";

const CardInfo = [
  {
    title: "adana",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    count: 2,
    func: () => {
      console.log("func");
    },
  },

  {
    title: "istanbul",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    count: 4,
    func: () => {
      console.log("func");
    },
  },
];

const AddNewBoard = () => {
  return (
    <Box
      sx={{
        width: 200,
        height: 200,
      }}
    >
      Add New Board
    </Box>
  );
};

const addNew = () => {
  console.log("addNew");
};

export default function BoardsPage(params) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        wrap: "wrap",
      }}
    >
      {CardInfo.map((card) => (
        <BoardCard
          key={card.title}
          board={card}
          onClick={() => {
            console.log("/board/" + card.title);
          }}
        />
      ))}
      <BoardCard board={{ title: `ADD NEW` }} />
    </Box>
  );
}
