export interface Page<T> {
  page: number;
  page_size: number;
  records_count: number;
  records: T;
}
