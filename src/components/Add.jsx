import React, { useState } from "react";
import { Tooltip, IconButton, Fab, Modal, Box, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from "@mui/material/";
import { Add as AddIcon } from "@mui/icons-material/";
import { EmojiEmotions, VideoCameraBack, PersonAdd, Image, DateRange } from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="add" onClick={() => setOpen(true)} sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", sm: 20, md: 30 } }}>
        <IconButton>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
      <StyledModal open={open} onClose={(e) => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg" sx={{ width: 30, height: 30 }}></Avatar>
            <Typography fontWeight={500} variant="span">
              R Fajri N
            </Typography>
          </UserBox>
          <TextField sx={{ width: "100%" }} id="standard-multiline-static" multiline rows={3} placeholder="What's on your mind ?" variant="standard" />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
