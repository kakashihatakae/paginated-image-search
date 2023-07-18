import { useEffect, useState } from "react";
import { IMAGES_PER_PAGE } from "../../shared/constants";
import { imageResponse } from "../../shared/types";

/*
 *
 * This component is used to pull data from the PixaLab API.
 *
 * @param page - the current page number that the user is on
 * @param query - the search query that the user has entered
 * in the search box
 */
export const useLoadImages = (page: number, query: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<imageResponse>({
    total: 0,
    totalHits: 0,
    hits: [],
  });

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=38317923-9fd1cc34cdaf6e930f9133e84&page=${page}&per_page=${IMAGES_PER_PAGE}&q=${query}`
        );

        if (!response.ok) {
          throw new Error("[Home]: Error while fetch images");
        }

        const imageData = await response.json();
        console.log("==>");
        console.log(imageData);
        setImages(imageData);
      } catch (error) {
        throw new Error("[Home]: Error while fetch images");
      }
      setIsLoading(false);
    };
    fetchImages();
  }, [page, query]);

  return { isLoading, images };
};
