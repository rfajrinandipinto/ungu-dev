import React, { useState } from "react";
import Box from "@mui/material/Box";
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          UNGU.dev
        </Typography>
        <CodeIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg" onClick={(e) => setOpen(true)} />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg" />
          <Typography variant="span">Fajri</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
