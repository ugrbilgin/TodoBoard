import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const bull = (
  <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

const BoardCard = ({ board }) => {
  return (
    <Card
      sx={{
        width: 200,
        height: 200,
        borderRadius: "5px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "space-between",
        }}
      >
        <Typography variant="h5" component="h2">
          {board.title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            fontSize: "14px",
            lineHeight: "1.5",
            color: "text.secondary",
          }}
        >
          {board.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Typography
          variant="body2"
          component="p"
          sx={{
            fontSize: "18px",
            lineHeight: "1.5",
            color: "text.tertiary",
          }}
        >
          {!!board.count && board.count + " tasks"} {/*ben adamin dibiyim aq bunu anladim*/}
        </Typography>
        {!!board.id && (
          <Link to={`/board/${board.id}`}>
            <Button size="small" onClick={board.func}>
              Learn More
            </Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
};

export default BoardCard;

/*
const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        name
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        desc
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          width: 300,
          height: 300,
          borderRadius: "5px",
        }}
      >
        {card}
      </Card>
    </Box>
  );
}
*/
