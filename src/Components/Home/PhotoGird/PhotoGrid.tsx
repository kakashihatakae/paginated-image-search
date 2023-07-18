import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import PhotoCard from "./PhotoCard";
import Arrowbackground from "./ArrowBackground";
import { hit, imageResponse } from "../../../shared/types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Masonry } from "@mui/lab";

interface PhotoGridProps {
  imageData: imageResponse;
  changePageNumber: (direction: number) => void;
  hideArrows: { hideLeftArrow?: boolean; hideRightArrow?: boolean };
}

const PhotoWrapper = styled.div`
  cursor: pointer;
`;

/*
 * This component shows the pictures in the form of a grid.
 *
 * @param imageData - image data to be shows
 * @param changePageNumber - function is called when the user clicks arrow icons
 * on the either side of the page to increment/decrement the page number.
 * @hideArrows - contains information about hiding/showing the arrow icons that are used to
 *  decrement/increment page number
 */
const PhotoGrid = ({
  imageData,
  changePageNumber,
  hideArrows,
}: PhotoGridProps): React.ReactElement => {
  const images = imageData.hits;
  const navigate = useNavigate();

  const onImageClick = (image: hit) => {
    navigate("/img", { state: image });
  };

  return (
    <Box mt={3}>
      {!hideArrows.hideLeftArrow && (
        <Arrowbackground arrowType="left" onClick={() => changePageNumber(-1)}>
          <ArrowBackIos fontSize="large" />
        </Arrowbackground>
      )}
      {!hideArrows.hideRightArrow && (
        <Arrowbackground arrowType="right" onClick={() => changePageNumber(1)}>
          <ArrowForwardIos fontSize="large" />
        </Arrowbackground>
      )}
      <Masonry columns={4} spacing={2}>
        {images.map((image) => (
          <PhotoWrapper onClick={() => onImageClick(image)} style={{}}>
            <PhotoCard img={image} key={image.id} />
          </PhotoWrapper>
        ))}
      </Masonry>
    </Box>
  );
};

export default PhotoGrid;
