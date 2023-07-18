import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/system";

const TextFieldComp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

const HomeIconComp = styled.div`
  position: absolute;
  margin-left: 12px;
  padding: 8px;
  border-radius: 10px;
  border-width: 2px;
  border-color: black;
  border-style: solid;
  cursor: pointer;
`;

const ButtonStyle = styled.div`
  margin-left: 12px;
  height: 100%;
`;

interface SearchBarProps {
  onSearch: (query: string) => void;
}

/*
 * This component shows the search bar and the home component. Mode is set to
 * query' when user click on Search button to download paginated
 * data using the /search pexel API. Mode is set to 'home' when user clicks on the home icon,
 * that is when the user is shown images whith an empty search query
 *
 * @param onSearch - function that sets mode to 'query'
 */
const SearchBar = ({ onSearch }: SearchBarProps): React.ReactElement => {
  const [query, setQuery] = useState("");

  const onSubmit = () => {
    onSearch(query);
    setQuery("");
  };

  const onHomeClick = () => {
    onSearch("");
  };

  return (
    <Box mt={5}>
      <HomeIconComp onClick={onHomeClick}>
        <HomeIcon fontSize="large" />
      </HomeIconComp>
      <TextFieldComp>
        <TextField onChange={(e) => setQuery(e.target.value)} value={query} />
        <ButtonStyle>
          <Button
            disabled={query === ""}
            variant="contained"
            sx={{ height: 55 }}
            onClick={onSubmit}
          >
            Search
          </Button>
        </ButtonStyle>
      </TextFieldComp>
    </Box>
  );
};

export default SearchBar;
