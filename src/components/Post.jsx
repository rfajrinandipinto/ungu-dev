import React from "react";
import { Box, Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, CardActions, Typography, Checkbox } from "@mui/material";
import { MoreVert, Favorite, FavoriteBorder, Share, GitHub, Public } from "@mui/icons-material/";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar src="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg" aria-label="recipe"></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="My Cool ToDoList App"
        subheader="February 12, 2023"
      />
      <CardMedia component="img" height="20%" image="https://res.cloudinary.com/dtnldotxd/image/upload/v1676140473/todo_rzuy2m.jpg" alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is my 100th time making a todo list app because im too lazy and have severe short attention span to even watch 30 minutes long tutorial video :)
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
        </IconButton>
        <IconButton aria-label="github">
          <GitHub />
        </IconButton>
        <IconButton aria-label="live">
          <Public />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
