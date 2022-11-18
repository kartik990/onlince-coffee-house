import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex="4" p={2}>
      <Post
        username="Scarlet Witch"
        img="https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Post
        username="John Snow"
        img="https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cml2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
      />
      <Post
        username="Mr.kings Man"
        img="https://images.unsplash.com/photo-1556905200-279565513a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Post
        username="Tony Stark"
        img="https://images.unsplash.com/photo-1585935238141-240f3e5567fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGVjbm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
      />
      <Post
        username="John Snow"
        img="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
    </Box>
  );
};

export default Feed;
