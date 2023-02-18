export default interface PagintionMetadata {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
