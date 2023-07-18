import { Button, ButtonGroup, Typography } from "@mui/material";
import styled from "styled-components";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const PaginationLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px;
  margin-top: 48px;
  margin-bottom: 48px;
`;

interface PaginationProps {
  pageNumber: number;
  spread: number;
  totalPages: number;
  choosePageNumber: React.Dispatch<React.SetStateAction<number>>;
  changePaginationNumber: (direction: number) => void;
  hideArrows: { hideLeftArrow?: boolean; hideRightArrow?: boolean };
}

/*
 * This component is solely responsible to show the pagination button array
 * at the bottom of the screen. It shows an array of size spread
 * if data is of the required size, if not then lesser buttons are shown.
 *
 * @param pageNumber - contains information related to the 'page' param of the pexel API
 * @param choosePageNumber - function is called when the user clicks on a page number
 * in the button array
 * @param currentPageNumber - the current page number
 * @param hideArrows - contains information about hiding/showing the arrow icons that are used to
 *  decrement/increment pagination number
 */
const Pagination = ({
  pageNumber,
  spread,
  totalPages,
  choosePageNumber,
  changePaginationNumber,
  hideArrows,
}: PaginationProps): React.ReactElement => {
  let buttonLabelArray: number[] = Array(spread);
  const isLeftEnd = pageNumber - spread + 1 <= 1;
  const isRightEnd = pageNumber + spread - 1 >= totalPages;

  if (isLeftEnd) {
    buttonLabelArray = buttonLabelArray
      .fill(1)
      .map((element, index) => element + index);
  } else if (isRightEnd) {
    buttonLabelArray = buttonLabelArray
      .fill(totalPages - spread + 1)
      .map((element, index) => element + index);
  } else {
    const totalIters = -Math.floor(spread / 2);
    buttonLabelArray = buttonLabelArray
      .fill(pageNumber)
      .map((element, index) => element + index + totalIters);
  }

  return (
    <PaginationLayout>
      <ButtonGroup variant="text">
        {!hideArrows.hideLeftArrow && (
          <Button onClick={() => changePaginationNumber(-1)}>
            <KeyboardDoubleArrowLeftIcon />
          </Button>
        )}
        {!isLeftEnd && (
          <>
            <Button size="large" onClick={() => choosePageNumber(1)}>
              {1}
            </Button>
            <Typography sx={{ pt: 1, pl: 2 }}>.........</Typography>
          </>
        )}
        {buttonLabelArray.map((label) => (
          <Button
            size="large"
            variant={pageNumber === label ? "contained" : "text"}
            onClick={() => choosePageNumber(label)}
          >
            {label}
          </Button>
        ))}
        {!isRightEnd && (
          <>
            <Typography sx={{ pt: 1, pl: 2 }}>.........</Typography>
            <Button size="large" onClick={() => choosePageNumber(totalPages)}>
              {totalPages}
            </Button>
          </>
        )}
        {!hideArrows.hideRightArrow && (
          <Button>
            <KeyboardDoubleArrowRightIcon
              onClick={() => changePaginationNumber(1)}
            />
          </Button>
        )}
      </ButtonGroup>
    </PaginationLayout>
  );
};

export default Pagination;
