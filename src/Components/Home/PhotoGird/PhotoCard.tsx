import { Skeleton, Box } from "@mui/material";
import React, { useState } from "react";
import { hit } from "../../../shared/types";

interface PhotoProps {
  img: hit;
}

/*
 * Component to show a picture in the photo grid. It shows the name of the
 * photographer which is hoverable. The user is rerouted to a new window
 * if he/she click on the name. Shows a skeleootn when the image is loading.
 *
 * @param img - contains information about a single image
 */
const PhotoCard = ({ img }: PhotoProps): React.ReactElement => {
  const [loading, setLoading] = useState(true);

  const imgOnLoad = () => {
    setTimeout(() => setLoading(false), 400);
  };

  return (
    <Box margin={1}>
      {loading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={img.webformatHeight / 2}
        />
      )}
      <img
        src={img.webformatURL}
        onLoad={imgOnLoad}
        style={{ width: "100%", display: loading ? "none" : "" }}
        alt=""
      />
    </Box>
  );
};

export default PhotoCard;
