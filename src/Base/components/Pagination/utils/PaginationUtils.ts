const MAXIMUM_OF_PAGES_BUTTONS_TO_SHOW = 5;

export default class PaginationUtils {
  public static getStartSlice(numberOfPages: number, currentPage: number) {
    if (numberOfPages < MAXIMUM_OF_PAGES_BUTTONS_TO_SHOW) return 0;

    if (Math.min(currentPage + 2, numberOfPages) > numberOfPages - 1) {
      return numberOfPages - MAXIMUM_OF_PAGES_BUTTONS_TO_SHOW;
    }

    return Math.max(currentPage - 3, 0);
  }

  public static getEndSlice(numberOfPages: number, currentPage: number) {
    if (Math.max(currentPage - 3, 0) < 1) {
      return MAXIMUM_OF_PAGES_BUTTONS_TO_SHOW;
    }
    return Math.min(currentPage + 2, numberOfPages);
  }
}
