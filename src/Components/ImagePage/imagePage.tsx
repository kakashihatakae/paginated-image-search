import React from "react";
import { useLocation } from "react-router-dom";
import { hit } from "../../shared/types";
import styled from "styled-components";
import { Avatar, Chip, Paper, Typography } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ImagePageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const UserProfile = styled.div`
  padding: 16px;
  display: flex;
`;

const InformationWrapper = styled.div`
  padding: 0 20px 0 50px;
`;

const ComponentSet = styled.div`
  margin-top: 10px;
  display: flex;
`;

const Counter = styled.div`
  color: #009fef;
  display: flex;
  align-items: center;
`;

/*
 * This component displays more information about the user
 * who uploaded the image
 */
const ImagePage = () => {
  const location = useLocation();
  const imageData: hit = location.state;
  const tagsList = imageData.tags.split(",").map((tag) => tag.trim());

  return (
    <ImagePageContainer>
      <Paper variant="outlined" sx={{ width: "80%", marginTop: 5 }}>
        <UserProfile>
          <Avatar
            src={imageData.userImageURL}
            sx={{ height: 200, width: 200 }}
          />
          <InformationWrapper>
            <Typography variant="h4" fontWeight="medium" color={"#0a5174"}>
              {imageData.user}
            </Typography>
            <ComponentSet>
              <Counter>
                <CommentIcon sx={{ marginRight: 0.7 }} /> {imageData.comments}
              </Counter>
              <Counter>
                <FavoriteBorderOutlinedIcon
                  sx={{ marginLeft: 3, marginRight: 0.7 }}
                />{" "}
                {imageData.likes}
              </Counter>
            </ComponentSet>
            <ComponentSet>
              {tagsList.map((tag) => (
                <Chip label={tag} sx={{ mr: 1, mt: 1 }} />
              ))}
            </ComponentSet>
          </InformationWrapper>
        </UserProfile>
      </Paper>
    </ImagePageContainer>
  );
};

export default ImagePage;
