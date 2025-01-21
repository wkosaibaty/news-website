export interface ArticleFilters {
  search?: string;
  category_id?: number;
  source_id?: number;
  published_at_from?: string;
  published_at_to?: string;
  page?: number;
  page_limit?: number;
}
