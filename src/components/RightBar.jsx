import React from "react";
import Box from "@mui/material/Box";
import { Typography, Avatar, AvatarGroup, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material/";

const RightBar = () => {
  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" p={4}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Post
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://res.cloudinary.com/dtnldotxd/image/upload/v1676139977/vscode_vzt2sl.png" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://res.cloudinary.com/dtnldotxd/image/upload/v1676139977/vscode_vzt2sl.png" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://res.cloudinary.com/dtnldotxd/image/upload/v1676139977/vscode_vzt2sl.png" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Activity
        </Typography>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Liked Your Post"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    Ali Connors
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Commented On Your Post"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    Jhon Css
                  </Typography>
                  {" — Real Developer use css only, library is for losers"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Commented On Your Post"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    Sandra Adams
                  </Typography>
                  {" — Open joki pemograman web, harga tomodachi"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
