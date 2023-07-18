import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { Typography } from "@mui/material";
import PhotoGrid from "./PhotoGird/PhotoGrid";
import Pagination from "./Pagination/Pagination";
import { useLoadImages } from "./utils";
import { IMAGES_PER_PAGE } from "../../shared/constants";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const onSearch = async (query: string) => {
    setQuery(query);
    setPage(1);
  };

  const changePageNumber = (direction: number) => {
    setPage((page) => page + direction);
  };

  const { isLoading, images } = useLoadImages(page, query);
  const hidePageDecrementArrow = page === 1;
  const hidePageIncrementArrow =
    page === Math.ceil(images.totalHits / IMAGES_PER_PAGE);

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {query && (
        <Typography variant="h4" ml={2} mt={3}>
          Search results for {query}
        </Typography>
      )}
      <PhotoGrid
        imageData={images ?? {}}
        changePageNumber={changePageNumber}
        hideArrows={{
          hideLeftArrow: hidePageDecrementArrow,
          hideRightArrow: hidePageIncrementArrow,
        }}
      />
      <Pagination
        pageNumber={page}
        choosePageNumber={setPage}
        changePaginationNumber={changePageNumber}
        spread={5}
        totalPages={Math.ceil(images.totalHits / IMAGES_PER_PAGE) - 10}
        hideArrows={{
          hideLeftArrow: hidePageDecrementArrow,
          hideRightArrow: hidePageIncrementArrow,
        }}
      />
    </>
  );
};
