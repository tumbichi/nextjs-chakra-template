import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { Button, Center, Flex } from "@chakra-ui/react";

import PaginationUtils from "./utils/PaginationUtils";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  numberOfPages: number;
  numberOfRows: number;
  rowsPerPage?: number;
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  numberOfPages,
  numberOfRows,
  rowsPerPage = 10,
}: PaginationProps) => {
  const goToNextPage = useCallback(() => {
    setCurrentPage((prevState) => prevState + 1);
  }, [setCurrentPage]);

  const goToPreviousPage = useCallback(
    () => setCurrentPage((prevState) => prevState - 1),
    [setCurrentPage]
  );

  const goToFirstPage = useCallback(() => setCurrentPage(1), [setCurrentPage]);

  const goToLastPage = useCallback(
    () => setCurrentPage(numberOfPages),
    [setCurrentPage, numberOfPages]
  );

  const renderPageNumbers = useMemo(
    () =>
      Array.from(Array(numberOfPages).keys())
        .slice(
          PaginationUtils.getStartSlice(numberOfPages, currentPage),
          PaginationUtils.getEndSlice(numberOfPages, currentPage)
        )
        .map((page) => page + 1)
        .map((page) => (
          <Button
            key={`page-${page}`}
            aria-selected={page === currentPage}
            variant="pagination"
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        )),
    [currentPage, numberOfPages, setCurrentPage]
  );

  useEffect(() => {
    // setNumberOfPages(Math.ceil(numberOfRows / rowsPerPage));
    // goToFirstPage();
  }, [numberOfRows, rowsPerPage, goToFirstPage]);

  if (numberOfPages <= 1) {
    return null;
  }

  return (
    <Flex align="center" justify="space-between">
      <Center>
        <Button
          _first={{
            borderStartRadius: 4,
            border: "1px solid",
            borderColor: "main.500",
          }}
          disabled={currentPage === 1}
          isDisabled={currentPage === 1}
          variant="pagination"
          onClick={goToFirstPage}
        >
          {"<<<"}
        </Button>
        <Button
          disabled={currentPage === 1}
          isDisabled={currentPage === 1}
          variant="pagination"
          onClick={goToPreviousPage}
        >
          {"<"}
        </Button>
        {renderPageNumbers}
        <Button
          disabled={currentPage === numberOfPages}
          isDisabled={currentPage === numberOfPages}
          variant="pagination"
          onClick={goToNextPage}
        >
          {">"}
        </Button>
        <Button
          _last={{
            borderEndRadius: "base",
          }}
          disabled={currentPage === numberOfPages}
          isDisabled={currentPage === numberOfPages}
          variant="pagination"
          onClick={goToLastPage}
        >
          {">>>"}
        </Button>
      </Center>
    </Flex>
  );
};

export default Pagination;
